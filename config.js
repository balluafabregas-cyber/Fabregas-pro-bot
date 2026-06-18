// ============================================
// FABREGAS-PRO-BOT CONFIGURATION
// MADE IN BY BALLUA FABREGAS ✨
// ============================================

module.exports = {
  // Owner Settings
  ownerNumber: '+250798363480',
  ownerName: 'Ballua Fabregas',
  
  // Bot Settings
  botName: 'Fabregas-Pro-Bot',
  botVersion: '1.0.0',
  prefix: '.',
  
  // Features
  autoRead: true,
  autoTyping: true,
  autoRecording: false,
  
  // Logging
  debug: true,
  logLevel: 'info',
  
  // Database
  database: {
    type: 'sqlite',
    path: './data/bot.db'
  },
  
  // API Keys (Add your keys here)
  apiKeys: {
    weather: process.env.WEATHER_API || 'your-api-key',
    news: process.env.NEWS_API || 'your-api-key',
    translate: process.env.TRANSLATE_API || 'your-api-key',
    openai: process.env.OPENAI_API || 'your-api-key'
  },
  
  // Command Settings
  commands: {
    max: 200,
    timeout: 5000,
    errorMessage: '❌ Error executing command'
  },
  
  // Rate Limiting
  rateLimit: {
    enabled: true,
    maxMessages: 5,
    timeWindow: 10000
  },
  
  // Categories
  categories: [
    'entertainment',
    'utilities',
    'media',
    'admin',
    'automation',
    'education',
    'aichat',
    'social',
    'info',
    'creative'
  ]
};
