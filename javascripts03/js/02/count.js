// ページの読み込みが終わったら
$(function() {
    // 変数numberに0を代入
	var number = 0;

    // ボタンをクリックしたら
	$('#js-btn').on('click', function() {

        //数字の部分を変数numberに1を足して表示
		$('#js-num').text(number++);
	});
});