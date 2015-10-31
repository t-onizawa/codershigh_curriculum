// HTMLの読み込みが終わったら
$(function() {

	// 変数「num」に数値「0」を代入
	var num = 0;

	// idがjs-btnの要素をクリックしたら
	$('#js-btn').on('click', function() {

		// 変数「num」に1を足す
		num++;

		// if文（条件分岐）の例
		//
		// if (num >= 10) {
		// 	$('#js-num').text('Yeah!');
		// } else if (num === 3) {
		// 	$('#js-num').text('さん！');
		// } else {
		// 	$('#js-num').text(num);
		// }

		// 変数「num」が10以上になったら
		if (num >= 10) {

			// idがjs-popupの要素をフェードイン
			$('#js-popup').fadeIn();

		// それ以外
		} else {

			// idがjs-numのテキストを変数「num」にする
			$('#js-num').text(num);
		}


	});
});















