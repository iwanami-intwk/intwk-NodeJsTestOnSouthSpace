/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

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
