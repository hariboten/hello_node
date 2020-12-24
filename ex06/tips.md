# tips
- bl (Buffer List)
	- install
		- npm install bl
		- npm install bl -gするときはpathを通す
			- export NODE_PATH=`node root -g`
	- usage
		- { BufferList } = require("bl");
		- const bl = new BufferList();
		- bl.append(arg) - argを追加
		- bl.toString() - 文字列として取得
	- BufferListって何？
		- BufferのList
		- まずBufferが何かを参照するといいかも
- http-clientとそんな変わらない
	- chunkごとにconsole.logしないので余計な改行がない
	- bl使わんでもStringとして結合してっても良さそうな気はする

# references
## bl / npm
https://www.npmjs.com/package/bl
## Buffer / Node.js v15.5.0 Documentation
https://nodejs.org/api/buffer.html
## Http / Node.js v15.5.0 Documentation
https://nodejs.org/api/http.html#http_http_get_url_options_callback
## 分割代入 / MDN Web Docs
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
## オブジェクト志向JavaScript入門 / MDN Web Docs
https://developer.mozilla.org/ja/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
## Node.js グローバルインストールでハマった / Qiita
https://qiita.com/shintarogit-on-qiita/items/70f193829f4360dca771
