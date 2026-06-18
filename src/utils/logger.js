// ============================================
// LOGGER UTILITY
// MADE IN BY BALLUA FABREGAS ✨
// ============================================

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logFile = path.join(logsDir, `bot-${moment().format('YYYY-MM-DD')}.log`);

const logger = {
  info: (message) => {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.blue(`[${timestamp}] ℹ️ ${message}`));
    fs.appendFileSync(logFile, `[${timestamp}] INFO: ${message}\n`);
  },

  error: (message, error) => {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.red(`[${timestamp}] ❌ ${message}`));
    if (error) console.error(error);
    fs.appendFileSync(logFile, `[${timestamp}] ERROR: ${message}\n`);
  },

  success: (message) => {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.green(`[${timestamp}] ✅ ${message}`));
    fs.appendFileSync(logFile, `[${timestamp}] SUCCESS: ${message}\n`);
  },

  warn: (message) => {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(chalk.yellow(`[${timestamp}] ⚠️ ${message}`));
    fs.appendFileSync(logFile, `[${timestamp}] WARN: ${message}\n`);
  },

  debug: (message) => {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    if (process.env.DEBUG === 'true') {
      console.log(chalk.gray(`[${timestamp}] 🔧 ${message}`));
    }
    fs.appendFileSync(logFile, `[${timestamp}] DEBUG: ${message}\n`);
  }
};

module.exports = logger;
