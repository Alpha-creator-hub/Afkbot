const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'RoyalPixel.aternos.me', // IP
    port: 49406, // Port
    username: 'AFK_Bot', // Minecraft username
    version: false, // Auto version
  });

  bot.once('spawn', () => {
    console.log('✅ Bot has spawned and is online!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 10000); // jump every 10 sec
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected, reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log('Error:', err));
}

createBot();
