const fs = require("fs");
const prompts = require("prompts");
const log = require("log-utils");
const utils = require("./utils.js");

module.exports =
async function main() {

  const response = await prompts({
    type: "multiselect",
    name: "choice",
    message: "Pick what artifacts that may be left, you'd like to uninstall",
    choices: [
      {
        title: "Remove `~.pulsar` directory",
        description: utils.softWrap(
          "This directory contains all Pulsar configuration files. Including all settings, all packages installed, as well as cached package data."
        ),
        value: "dot-pulsar-dir"
      },
      {
        title: "Remove `AppData\Local\pulsar-updater` directory",
        description: utils.softWrap(
          "This directory contains an automatically created `electron-build` executable used to aide in automatic updates."
        ),
        value: "pulsar-updater-dir"
      },
      {
        title: "Remove `AppData\Local\Programs\Pulsar` directory",
        description: utils.softWrap(
          "This directory contains all source code files of Pulsar itself. This should be removed during uninstallation of Pulsar automatically."
        ),
        value: "pulsar-dir"
      },
      {
        title: "Remove `AppData\Roaming\Pulsar` directory",
        description: utils.softWrap(
          "This directory contains Electron specific files. These are used by the `electron` process and not Pulsar itself."
        ),
        value: "electron-dir"
      }
    ]
  });

  for (let i = 0; i < response.choice.length; i++) {
    switch(response.choice[i]) {
      case "dot-pulsar-dir":
        await removeDirectory(`${process.env.USERPROFILE}\\.pulsar`);
        break;
      case "pulsar-updater-dir":
        await removeDirectory(`${process.env.LOCALAPPDATA}\\pulsar-updater`);
        break;
      case "pulsar-dir":
        await removeDirectory(`${process.env.LOCALAPPDATA}\\Programs\\Pulsar`);
        break;
      case "electron-dir":
        await removeDirectory(`${process.env.APPDATA}\\Pulsar`);
        break;
    }
  }
  return;
}

async function removeDirectory(dir) {
  const res = await prompts({
    type: "confirm",
    name: "value",
    message: `Are you sure you want to delete '${dir}'?`,
    initial: false
  });

  if (!res.value) {
    console.log(`SKipping deletion of '${dir}' due to user denail.`);
    return;
  } else {
    console.log(`Deleting '${dir}' permanently...`);
    //fs.rmSync(dir, { recursive: true, force: true });
    console.log(log.ok(`Successfully deleted '${dir}'`));
  }
}
