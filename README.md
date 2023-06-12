
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

Send a tweet with the CLI ```terminaltweeter --tweet "Hello World!"```
OR
```terminaltweeter -tw "Hello World!"```

## Options

```--tweet, -tw``` - The tweet you want to post.

```--help, -h``` - Show help.

```--version, -v``` - Show version number.
