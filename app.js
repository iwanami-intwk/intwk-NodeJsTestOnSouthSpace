// Example 1: sets up service wrapper, sends initial message, and
// receives response.

var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: 'd860e3d0-d82a-4ca5-865b-aae26944f601', // replace with username from service key
  password: '0ioEDkcFj1oS', // replace with password from service key
  path: { workspace_id: 'Conversation-firstService' }, // replace with workspace ID
  url: 'https://gateway.watsonplatform.net/conversation/api',
  version_date: '2016-07-11'
});

// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }
  
  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }
}
