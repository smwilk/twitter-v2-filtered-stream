# Twitter API Filtered Stream JavaScript code sample

This is a code sample to help you get started with Twitter API v2's [Filtered Stream](https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/introduction) endpoint group in JavaScript.

## Steps to start streaming

1. Clone thie repository and move into the root directory.

```bash
git clone https://github.com/smwilk/twitter-v2-filtered-stream.git
cd twitter-v2-filtered-stream
```

2. Run the following command in your terminal to install the required library ([Twitter API v2](https://github.com/plhery/node-twitter-api-v2)).

```bash
npm install
```

3. Open the `filtered-stream.js` file. Locate `"{Your Bearer Token}"` and replace `{Your Bearer Token}` with the bearer token of your app, which can be obtained in the [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard). 

4. This sample code creates a filter with the keyword `Twitter`, which means the stream will only return Tweets including the `Twitter` keyword. If you wish to set a different keyword, change update `value: 'Twitter'` in `addRules`.

5. Run the following command in your terminal to start streaming:

```bash
node filtered_stream.js
```

You should see the filtered stream output in your terminal.
