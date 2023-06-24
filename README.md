
# Terminal Tweeter
A simple command line tool to tweet from your terminal.

## Installation

Installation Requires Node
```npm install -g @nfn8hax/terminal-tweeter```

## Add your Twitter API keys

- Set env variables for the Twitter client in your terminal by adding the following lines in your terminal config file. (e.g. ~/.bashrc, ~/.zshrc, etc.):
  -  `export TWITTER_API_KEY=yourapikey`
  -  `export TWITTER_API_SECRET=yourapisecret`
  - `export TWITTER_ACCESS_TOKEN=youraccesstoken`
  - `export TWITTER_ACCESS_SECRET=youraccesssecret`

## Usage

Send a tweet with the CLI ```tt --tweet Hello World!```
OR
```tt -tw Hello World!```
Quotes are not required.

## Options

```--tweet, -tw``` - The tweet you want to post.

```--help, -h``` - Show help.

```--version, -v``` - Show version number.

## Planned Features
- Rapid fire tweet mode. A REPL that allows you to send multiple tweets until you exit.
- Threaded tweets. Send a tweet that is part of a thread.
