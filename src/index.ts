#! /usr/bin/env node

import { Command } from 'commander'
import { TwitterApi } from 'twitter-api-v2'
import figlet from 'figlet'

console.log(figlet.textSync('Terminal Tweeter'))

const program = new Command()

program
	.version('1.0.0')
	.description('CLI for the Terminal Tweeter')
	.option('-tw, --tweet  <value>', 'Tweet something')
	.parse(process.argv)

const checkTwitterCredentials = () => {
	if (
		!process.env.TWITTER_API_KEY ||
		!process.env.TWITTER_API_SECRET ||
		!process.env.TWITTER_ACCESS_TOKEN ||
		!process.env.TWITTER_ACCESS_SECRET
	) {
		program.error(
			'Missing credentials. Set TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, and TWITTER_ACCESS_SECRET env variables by adding: "export TWITTER_ENV_VARIABLE_NAME=yoursupersecretkey" in your terminal config file.'
		)
	}
}

checkTwitterCredentials()

const twitterConfig = new TwitterApi({
	appKey: String(process.env.TWITTER_API_KEY),
	appSecret: String(process.env.TWITTER_API_SECRET),
	accessToken: String(process.env.TWITTER_ACCESS_TOKEN),
	accessSecret: String(process.env.TWITTER_ACCESS_SECRET)
})

const twitterClient = twitterConfig.readWrite

const options = program.opts()

const tweet = async (tweet: string) => {
	try {
		const { data: publishedTweet } = await twitterClient.v2.tweet(tweet)
		console.log(`Tweeted: ${publishedTweet.text}`)
	} catch (error) {
		console.log("Couldn't tweet", error)
	}
}

if (options.tweet) {
	tweet(options.tweet)
}

if (!process.argv.slice(2).length) {
	program.outputHelp()
}
