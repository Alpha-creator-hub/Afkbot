const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'RoyalPixel.aternos.me', // Server IP
    port: 49406, // Server Port
    username: 'AFK_Bot', // Bot name
    version: false // Auto version
  });

  let jumpInterval; // To clear later
  let disconnectTimeout; // For forced disconnect

  bot.once('spawn', () => {
    console.log('✅ Bot has spawned and is online!');

    // Start continuous jumping
    bot.setControlState('jump', true);

    // Force disconnect after 60 seconds (1 minute)
    disconnectTimeout = setTimeout(() => {
      console.log('🕒 Disconnecting after 1 minute...');
      bot.quit(); // Clean disconnect
    }, 60000); // 60,000 ms = 1 minute
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected, reconnecting in 5 seconds...');

    // Cleanup
    clearInterval(jumpInterval);
    clearTimeout(disconnectTimeout);

    setTimeout(createBot, 5000); // Reconnect after 5 sec
  });

  bot.on('error', err => {
    console.log('⚠️ Error:', err.message);
  });
}

createBot();
