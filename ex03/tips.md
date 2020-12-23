# tips
- fs moduleを使う
	- fs object は var fs = require("fs")で有効化
- fs.readFileSyncは同期処理
- 無効なファイルパスを渡された場合
	- fs.readFileSyncがエラー吐いて終了
	- 終了ステータスは1
		- これはクラッシュでは？
	- try ... catchでエラー吐いても処理を続行できるっぽい
		- 0だけ出力して終わればいいのかな？

#reference
## File system / Node.js v15.5.0 Documentation
https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
## 【Node.js入門】fsモジュールでファイルの読み書き方法まとめ / Samurai Blog
https://www.sejuku.net/blog/71663
## 制御フローとエラー処理 / MDN Web Docs
https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
