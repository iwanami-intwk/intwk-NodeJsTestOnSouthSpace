/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// このアプリはWEBサーバーに express を利用します。
// くわしくはこちら: http://expressjs.com
var express = require('express');

//
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

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

// 写真のサンプルデータ
var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
    res.json(photoList);
});
