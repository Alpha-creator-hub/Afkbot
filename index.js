const mineflayer = require('mineflayer');
const express = require('express');

// ==== Mineflayer Bot Code ====
function createBot() {
  const bot = mineflayer.createBot({
    host: 'RishabhXSuryansh.aternos.me',
    port: 50445,
    username: 'AFK_Bot',
    version: false
  });

  bot.once('spawn', () => {
    console.log('✅ Bot online!');
    bot.setControlState('jump', true); // Simulate AFK
  });

  bot.on('end', () => {
    console.log('❌ Disconnected. Reconnecting in 5s...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('⚠️ Error:', err.message);
  });
}

createBot();

// ==== Express Web Server (For Render Pinging) ====
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🟢 Bot is alive and running!');
});

app.listen(PORT, () => {
  console.log(`🌐 Web server running at http://localhost:${PORT}`);
});
