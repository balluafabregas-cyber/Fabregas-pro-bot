// ============================================
// ENTERTAINMENT COMMANDS HANDLER
// MADE IN BY BALLUA FABREGAS ✨
// ============================================

const logger = require('../utils/logger');

const jokes = [
  '😂 Why don\'t scientists trust atoms? Because they make up everything!',
  '😂 What do you call a fake noodle? An impasta!',
  '😂 Why did the scarecrow win an award? He was outstanding in his field!',
  '😂 I\'m reading a book about anti-gravity. It\'s impossible to put down!',
  '😂 What did the ocean say to the beach? Nothing, it just waved!'
];

const riddles = [
  '🧩 I speak without a mouth and hear without ears. What am I? (Answer: Echo)',
  '🧩 What can travel around the world while staying in a corner? (Answer: Stamp)',
  '🧩 I have cities but no houses. What am I? (Answer: Map)',
  '🧩 What has hands but cannot clap? (Answer: Clock)',
  '🧩 What is seen in the middle of March and April that can\'t be seen at the beginning or end? (Answer: Letter R)'
];

const entertainment = {
  async joke(sock, sender, args) {
    try {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      await sock.sendMessage(sender, { text: randomJoke + '\n\n_MADE IN BY BALLUA FABREGAS ✨_' });
    } catch (error) {
      logger.error('Joke command error:', error);
    }
  },

  async riddle(sock, sender, args) {
    try {
      const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
      await sock.sendMessage(sender, { text: randomRiddle + '\n\n_MADE IN BY BALLUA FABREGAS ✨_' });
    } catch (error) {
      logger.error('Riddle command error:', error);
    }
  },

  async game(sock, sender, args) {
    try {
      const gameList = `
🎮 AVAILABLE GAMES:
1. .tictactoe - Play Tic Tac Toe
2. .guessnum - Guess the number
3. .hangman - Hangman game
4. .trivia - Trivia questions
5. .rock - Rock Paper Scissors

_MADE IN BY BALLUA FABREGAS ✨_
      `;
      await sock.sendMessage(sender, { text: gameList });
    } catch (error) {
      logger.error('Game command error:', error);
    }
  },

  async meme(sock, sender, args) {
    try {
      const memeText = `😂 Meme feature coming soon!\n\n_MADE IN BY BALLUA FABREGAS ✨_`;
      await sock.sendMessage(sender, { text: memeText });
    } catch (error) {
      logger.error('Meme command error:', error);
    }
  }
};

module.exports = entertainment;
