const status = "rustjavi";
const botName = "PE MUSI";
const version = "beta 1.0"; 
const startTime = Date.now();

function printWatermark() {
  const uptimeInSeconds = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\x1b[1m\x1b[36m╔════════════════════════════════════════════╗');
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log(`\x1b[1m\x1b[36m            ${botName}     `);
  console.log(`\x1b[1m\x1b[36m            👑 Owner : ${status}    `);
  console.log(`\x1b[1m\x1b[36m            💡 Version: ${version}`);
  console.log(`\x1b[1m\x1b[36m            📅 Uptime: ${uptimeInSeconds}s`);
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log('\x1b[1m\x1b[36m╚════════════════════════════════════════════╝\x1b[0m');
}

module.exports = {
  printWatermark,
};
