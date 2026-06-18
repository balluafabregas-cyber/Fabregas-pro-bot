// ============================================
// FABREGAS-PRO-BOT MAIN FILE
// MADE IN BY BALLUA FABREGAS ✨
// ============================================

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  Browsers
} = require('@whiskeysockets/baileys');

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const config = require('./config');
const logger = require('./src/utils/logger');
const Database = require('./src/database/db');

let sock = null;

// ============================================
// STARTUP MESSAGE
// ============================================

function printBanner() {
  console.clear();
  console.log(chalk.cyan.bold(`
╔════════════════════════════════════════════╗
║     FABREGAS-PRO-BOT v${config.botVersion}              ║
║     🤖 WhatsApp Automation Bot         ║
║     MADE IN BY BALLUA FABREGAS ✨      ║
║     Owner: ${config.ownerNumber}         ║
╚════════════════════════════════════════════╝
  `));
}

// ============================================
// INITIALIZE BOT
// ============================================

async function initializeBot() {
  printBanner();
  
  try {
    // Create necessary directories
    const dirs = ['./sessions', './data', './logs'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        logger.info(`Created directory: ${dir}`);
      }
    });

    // Initialize database
    logger.info('Initializing database...');
    const db = new Database();
    await db.initialize();

    // Setup authentication
    const { state, saveCreds } = await useMultiFileAuthState('sessions');

    // Create socket
    sock = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      browser: Browsers.appropriate('Chrome'),
      logger: {
        level: config.debug ? 'debug' : 'error',
        log: (...args) => logger.debug(JSON.stringify(args))
      }
    });

    // Handle connection updates
    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect } = update;

      if (connection === 'connecting') {
        logger.info(chalk.yellow('⏳ Connecting...'));
      } else if (connection === 'open') {
        logger.info(chalk.green('✅ Bot Connected Successfully!'));
        logger.info(chalk.cyan(`Bot Name: ${config.botName}`));
        logger.info(chalk.cyan(`Owner: ${config.ownerNumber}`));
        logger.info(chalk.cyan('Ready to receive commands...'));
      } else if (connection === 'close') {
        let reason = new Error('Unknown ConnectionError');
        if (lastDisconnect?.error) {
          reason = lastDisconnect.error;
        }
        if (reason?.message?.includes('Stream Errored')) {
          logger.error('Connection error - reconnecting...');
          setTimeout(() => initializeBot(), 3000);
        }
      }
    });

    // Handle credentials update
    sock.ev.on('creds.update', saveCreds);

    // Handle messages
    sock.ev.on('messages.upsert', async (m) => {
      const message = m.messages[0];
      if (!message.message) return;
      
      await handleMessage(message, sock);
    });

  } catch (error) {
    logger.error('Error initializing bot:', error);
    setTimeout(() => initializeBot(), 3000);
  }
}

// ============================================
// MESSAGE HANDLER
// ============================================

async function handleMessage(message, sock) {
  try {
    const text = message.message?.conversation || 
                 message.message?.extendedTextMessage?.text || 
                 '';
    
    if (!text.startsWith(config.prefix)) return;

    const args = text.slice(config.prefix.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();
    
    const sender = message.key.remoteJid;
    const isGroup = sender.endsWith('@g.us');
    const isOwner = sender.includes(config.ownerNumber.replace(/\D/g, ''));

    logger.info(`Command: ${command} | From: ${sender} | Group: ${isGroup}`);

    // Simple command router (will be expanded)
    if (command === 'ping') {
      await sock.sendMessage(sender, {
        text: '🏓 Pong! Bot is working perfectly.\n\n_MADE IN BY BALLUA FABREGAS ✨_'
      });
    } 
    else if (command === 'help') {
      const helpText = `
╔═════════════════════════════════════════╗
║    FABREGAS-PRO-BOT HELP MENU      ║
╚═════════════════════════════════════════╝

🎮 Entertainment Commands:
${config.prefix}joke - Random joke
${config.prefix}riddle - Random riddle
${config.prefix}game - Play a game

🛠️ Utility Commands:
${config.prefix}calc - Calculator
${config.prefix}weather - Weather info
${config.prefix}convert - Unit converter

📚 More Commands:
Type ${config.prefix}commands for full list

_Owner: ${config.ownerNumber}_
_MADE IN BY BALLUA FABREGAS ✨_
      `;
      await sock.sendMessage(sender, { text: helpText });
    }
    else if (command === 'commands') {
      const cmdText = `
📋 FABREGAS-PRO-BOT (200+ Commands)

Available Categories:
🎮 Entertainment
🛠️ Utilities  
🎵 Media
📊 Info & Data
⚙️ Automation
🔐 Admin
🎓 Education
💬 AI Chat
📱 Social Media
🎨 Creative

Type ${config.prefix}help for more info

_MADE IN BY BALLUA FABREGAS ✨_
      `;
      await sock.sendMessage(sender, { text: cmdText });
    }
    else {
      await sock.sendMessage(sender, {
        text: `❌ Command not found: ${command}\nType ${config.prefix}help for commands\n\n_MADE IN BY BALLUA FABREGAS ✨_`
      });
    }

  } catch (error) {
    logger.error('Error handling message:', error);
  }
}

// ============================================
// START BOT
// ============================================

initializeBot().catch(err => {
  logger.error('Fatal error:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  logger.info(chalk.yellow('\nShutting down bot...'));
  if (sock) sock.end();
  process.exit(0);
});
