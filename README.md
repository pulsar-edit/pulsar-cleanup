# Pulsar Cleanup

This CLI tool aims to help cleanup any artifacts leftover by a Pulsar installation.

Since the process of uninstalling Pulsar is largely controlled by `electron-builder`, after an uninstall there may be some items leftover that the user doesn't want.

This tool then can step in to be run as a simple executable and allow the user to choose what they'd like to remove permanently.

## Warning

Use of this tool, may irreversibly delete your Pulsar configuration and all packages that have been installed.

The tool attempts to make it obvious when this may occur, but use of `pulsar-cleanup` is not recommended as any troubleshooting step. It should only be used when complete removal of elements from Pulsar for a system is desired.

## Usage

To use `pulsar-cleanup` head over to it's [releases page]() and download the latest version for your platform.

Once downloaded simply run it from the CLI:

> Windows

```bash
.\pulsar-cleanup-win.exe
```

> Linux

```bash
chmod +x pulsar-cleanup-linux
./pulsar-cleanup-linux
```

> macOS

```bash
./pulsar-cleanup-macos
```

Once `pulsar-cleanup` is run, it'll walk you through all the artifacts that may remain on a system, the artifacts shown are not guaranteed to still be on your system.

Simply select which ones you'd like to remove following the instructions shown on screen, then hit enter.

You'll have a final chance to confirm each action you've selected, prior to it being executed.

Once the programs completes, feel free to delete the `pulsar-cleanup` executable.
