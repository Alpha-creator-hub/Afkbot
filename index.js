const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'RoyalPixel.aternos.me', // Aapka server IP
    port: 49406,                   // Aapka server port
    username: 'AFK_Bot',          // Bot ka username
    version: false                // Auto Minecraft version
  });

  bot.once('spawn', () => {
    console.log('✅ Bot has spawned and is online!');

    // Enable continuous jumping
    bot.setControlState('jump', true);
  });

  // Auto reconnect on disconnect
  bot.on('end', () => {
    console.log('❌ Bot disconnected, reconnecting in 5s...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('⚠️ Bot error:', err);
  });
}

createBot();
