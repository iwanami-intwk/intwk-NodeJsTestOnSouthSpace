/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

/*
// このアプリはWEBサーバーに express を利用します。
// くわしくはこちら: http://expressjs.com
var express = require('express');

// cfenv は Cloud Foundry 環境へのアクセスを提供します。
// くわしくはこちら: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// 新しい express サーバーを作成します。
var app = express();

// ./public からメインファイルを提供するようにします。
app.use(express.static(__dirname + '/public'));

//  Cloud Foundry からアプリ環境を取得します。
var appEnv = cfenv.getAppEnv();

// 指定されたポートとホストでアプリを起動。start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
*/




// Example 1: sets up service wrapper, sends initial message, and
// receives response.

var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: 'd860e3d0-d82a-4ca5-865b-aae26944f601', // replace with username from service key
  password: '0ioEDkcFj1oS', // replace with password from service key
  path: { workspace_id: 'Conversation-firstService' }, // replace with workspace ID
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
