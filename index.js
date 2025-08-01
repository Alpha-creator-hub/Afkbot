const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'RoyalPixel.aternos.me',
    port: 49406,
    username: 'AFK_Bot',
    version: false
  });

  bot.once('spawn', () => {
    console.log('✅ Bot online!');
    bot.setControlState('jump', true); // AFK simulation
  });

  bot.on('end', () => {
    console.log('❌ Disconnected. Reconnecting in 5s...');
    setTimeout(createBot, 5000); // reconnect if kicked or server restarts
  });

  bot.on('error', err => {
    console.log('⚠️ Error:', err.message);
  });
}

createBot();
