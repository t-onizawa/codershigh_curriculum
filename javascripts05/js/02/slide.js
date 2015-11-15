// ページの読み込みが終わったら
$(function() {

    // idがjs-slide1の要素をクリックしたら
	$('#js-slide1').on('click', function() {
        // idがjs-slide-target1をスライドアップ
		$('#js-slide-target1').slideUp();
	});

    // idがjs-slide2の要素をクリックしたら
	$('#js-slide2').on('click', function() {
        // this(js-slide2)の次の要素をスライドダウン
		$(this).next().slideDown();
	});

    // idがjs-slide3の要素をクリックしたら
	$('#js-slide3').on('click', function() {
        // this(js-slide3)の次の要素をスライドアップ・ダウン
		$(this).next().slideToggle();
	});

    // classがjs-slideの要素をクリックしたら
	$('.js-slide').on('click', function() {
        // this(js-slide)の次の要素のclassがjs-slide-textの要素をスライドアップ・ダウン
		$(this).next('.js-slide-text').slideToggle();
	});
});













