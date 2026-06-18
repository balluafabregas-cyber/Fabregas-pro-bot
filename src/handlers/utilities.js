// ============================================
// UTILITIES COMMANDS HANDLER
// MADE IN BY BALLUA FABREGAS ✨
// ============================================

const logger = require('../utils/logger');

const utilities = {
  async calc(sock, sender, args) {
    try {
      const expression = args.join(' ');
      if (!expression) {
        await sock.sendMessage(sender, { text: '❌ Usage: .calc 2+2' });
        return;
      }
      
      // Simple calculation (be careful with eval in production)
      const result = eval(expression);
      await sock.sendMessage(sender, { text: `📊 Result: ${expression} = ${result}\n\n_MADE IN BY BALLUA FABREGAS ✨_` });
    } catch (error) {
      logger.error('Calc command error:', error);
      await sock.sendMessage(sender, { text: '❌ Invalid calculation' });
    }
  },

  async weather(sock, sender, args) {
    try {
      const city = args.join(' ') || 'London';
      const weatherText = `
☀️ WEATHER INFORMATION
City: ${city}

Feature coming soon!

_MADE IN BY BALLUA FABREGAS ✨_
      `;
      await sock.sendMessage(sender, { text: weatherText });
    } catch (error) {
      logger.error('Weather command error:', error);
    }
  },

  async convert(sock, sender, args) {
    try {
      const conversionText = `
🔄 UNIT CONVERTER

Usage: .convert 100km to miles

Feature coming soon!

_MADE IN BY BALLUA FABREGAS ✨_
      `;
      await sock.sendMessage(sender, { text: conversionText });
    } catch (error) {
      logger.error('Convert command error:', error);
    }
  },

  async time(sock, sender, args) {
    try {
      const now = new Date();
      const timeText = `
⏰ CURRENT TIME
${now.toLocaleString()}

_MADE IN BY BALLUA FABREGAS ✨_
      `;
      await sock.sendMessage(sender, { text: timeText });
    } catch (error) {
      logger.error('Time command error:', error);
    }
  }
};

module.exports = utilities;
