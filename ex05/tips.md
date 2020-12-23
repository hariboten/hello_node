# tips
- httpリクエストって何 !
- http = require("http");
- httpsじゃないと拒否されるページが多い
- subject通りgoogleをGETするとあってるか間違ってるのかわかんない
- パッケージ追加しなくてもできる
- .on("event", (arg) => {});
	- "event"が発生したときに実行する関数を登録
- data Eventは複数回発生する
	- データひとかたまり(chunk)ごとに発生

# refereces
## Node.jsの標準モジュール(https)でAPIを叩く(GETのみ) / Qiita
https://qiita.com/r-yanyo/items/3ef153dac12e69a2c46c
## Http / Node.js v15.5.0 Documentation
https://nodejs.org/api/http.html#http_agent_requests
