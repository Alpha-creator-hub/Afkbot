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
    
    // Safe jump every 60 seconds
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 300); // Shorter jump time
    }, 60000); // Jump every 60 seconds
  });

  // Make sure these are outside spawn
  bot.on('end', () => {
    console.log('❌ Bot disconnected, reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('⚠️ Error:', err);
  });
}

createBot();
