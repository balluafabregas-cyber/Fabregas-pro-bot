// ============================================
// DATABASE HANDLER
// MADE IN BY BALLUA FABREGAS ✨
// ============================================

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const logger = require('../utils/logger');

const DB_PATH = './data/bot.db';

class Database {
  constructor() {
    this.db = null;
  }

  async initialize() {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(DB_PATH, (err) => {
        if (err) {
          logger.error('Database connection error:', err);
          reject(err);
        } else {
          logger.success('Database connected');
          this.createTables();
          resolve();
        }
      });
    });
  }

  createTables() {
    const schema = `
      -- Users Table
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        phone_number TEXT UNIQUE,
        name TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        last_seen DATETIME,
        is_owner BOOLEAN DEFAULT 0,
        is_admin BOOLEAN DEFAULT 0
      );

      -- Commands Log
      CREATE TABLE IF NOT EXISTS command_logs (
        id INTEGER PRIMARY KEY,
        user_phone TEXT,
        command TEXT,
        args TEXT,
        executed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        success BOOLEAN
      );

      -- Settings
      CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY,
        key TEXT UNIQUE,
        value TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- Groups
      CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY,
        group_id TEXT UNIQUE,
        group_name TEXT,
        members_count INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- Messages Archive
      CREATE TABLE IF NOT EXISTS message_archive (
        id INTEGER PRIMARY KEY,
        sender TEXT,
        message TEXT,
        message_type TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `;

    schema.split(';').forEach(query => {
      if (query.trim()) {
        this.db.run(query, (err) => {
          if (err) logger.error('Schema creation error:', err);
        });
      }
    });

    logger.success('Database tables created/verified');
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) reject(err);
        else resolve(this);
      });
    });
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}

module.exports = Database;
