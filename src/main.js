const log = require("log-utils");

const win32Cleanup = require("./win32-cleanup.js");
const linuxCleanup = require("./linux-cleanup.js");
const darwinCleanup = require("./darwin-cleanup.js");

module.exports =
async function main() {
  logWelcome();

  switch(process.platform) {
    case "win32":
      await win32Cleanup();
      break;
    case "darwin":
      await darwinCleanup();
      break;
    case "linux":
      await linuxCleanup();
      break;
  }

  logGoodbye();
  process.exit(0);
}

function logWelcome() {
  console.log(log.heading("Welcome to Pulsar-Cleanup"));
  console.log(`
    This CLI program will help preform cleanup steps of anything a Pulsar installation
    may have left behind. Ensuring your system has no pointless files caused by Pulsar.
  `);
}

function logGoodbye() {
  console.log("Hope you've found 'pulsar-cleanup' useful.");
  console.log("If you've encountered any issues, please let us know: https://github.com/pulsar-edit/pulsar-cleanup/issues");
}
