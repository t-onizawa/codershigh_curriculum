// ページの読み込みが終わったら
$(function() {

    // ページトップのaタグをクリックしたら
	$('#js-pagetop a').on('click', function() {

        // scrollが0の場所へ0.4秒かけイージングをswingでアニメーション
		$('html, body').animate({
			'scrollTop': 0
		}, 400, 'swing');
	});
});