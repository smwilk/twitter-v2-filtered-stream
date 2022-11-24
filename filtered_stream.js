import { ETwitterStreamEvent, TwitterApi} from 'twitter-api-v2';

const client = new TwitterApi("{Your Bearer Token}"); 

// Add rules
const addRules = await client.v2.updateStreamRules({
  add: [
    // Updte `Twitter` if you want to set a different keyword
    { value: 'Twitter', tag: 'tw' },
  ],
});

// If you want to delete existing rules, use this.
// You can get the rule ids in the response from `addRules` or `getRules`.
const deleteRules = await client.v2.updateStreamRules({
    delete: {
        ids: ['{Rule ID 1}', '{Rule ID 2...}']
    },
});

// Get rules set for the stream
const getRules = await client.v2.streamRules();

// Get streamed data
const stream = await client.v2.searchStream();

// Start streaming
async function startStreaming() {
    console.log("Rule set: ", await addRules)
    stream.on(
        // Emitted when a Twitter payload (a tweet or not, given the endpoint).
        ETwitterStreamEvent.Data,
        eventData => console.log(eventData),
    );
}

startStreaming()