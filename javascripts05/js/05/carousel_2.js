//========================================================================
/**
 *
 * // 画面の幅に合わせたカルーセルの作成 //
 * - 画像をcssでwidth:100%にしておきます。
 * - windowの幅に合わせて画像を囲むliの幅などを可変にします。
 *
 *
 * ■ このファイルの構成 ■
 * var carousel = function() {
 * 		// カルーセルの処理を記述（ここではcarouselで囲んだ部分は実行されない）
 *
 *     var init = function() {
 *         // イベントなどの処理を記述
 *
 *         windowがload, またはresizeしたらsetSizeを実行
 *         prevをクリックしたらslideを実行
 *         nextをクリックしたらslideを実行
 *     };
 *
 *     var setSize = function() {
 *         // 画像をwindowの幅に合わせるためのサイズ指定の処理
 *     };
 *
 *     var slide = function() {
 *         // ボタンをクリックした時の処理
 *     };
 *
 *     init(); // initを実行
 * };
 *
 * $(function() {
 * 		carousel(); HTMLの読み込みが終わったところで実行
 * });
 *
 */
//========================================================================


/**
 *
 * 変数carouselにfunction(){}内に処理を記述し、処理を作成
 *
 */
var carousel = function() {

	// carousel内で使用する変数を作成
	var $items = $('#js-items'),
		$item = $items.find('li'),
		itemWidth,
		itemLength = $item.length, // liの数を取得
		$prev = $('#js-prev'),
		$next = $('#js-next');

	// イベントなどの処理をまとめる
	var init = function() {

		// windowがload, resizeしたら
		$(window).on('load resize', function() {
			setSize();
		});

		// $prevをクリックしたら
		$prev.on('click', function() {
			slide('+=');
		});

		// $nextをクリックしたら
		$next.on('click', function() {
			slide('-=');
		});
	};

	// 画像を画面一杯に指定する記述
	var setSize = function() {
		itemWidth = $(window).width();          // 変数itemWidthにwindowの幅を取得し、保存
		$item.width(itemWidth);                 // liの幅をitemWidthに指定
		$items.width(itemWidth * itemLength);   // ul#js-itemsの幅ををitemWidth×liの数で計算し、指定
		$items.parent().width(itemWidth);       // ul#js-itemsの親divの幅をitemWidthに指定
		$items.parent().height($item.height()); // ul#js-itemsの親divの高さをliの高さを取得し、指定
	};

	// スライドする動作を記述
	var slide = function(direction) {
		// #js-itemsがアニメーション中だったら処理を抜ける(後述した処理をしない)
		if ($items.is(':animated')) {
			return;
		}

		// #js-itemsアニメーション, leftポジションに変数itemWidth分を足す
	 	$items.animate({
			'left': direction + itemWidth + 'px'
		}, 400, 'swing', function() { // アニメーションが終わったら

			// #js-itemsの左位置を取得して変数に格納
			var leftPosition = parseInt($items.css('left'));

			// #js-itemsの左位置が0以上だったら
			if (leftPosition >= 0) {
				$prev.hide(); // #js-prevを非表示
			} else {
				$prev.show(); // #js-prevを表示
			}

			// #js-itemsの左位置が liの幅× (liの数 - 1) 以下の小さい値だったら
			if (leftPosition <= -itemWidth * (itemLength - 1)) {
				$next.hide(); // #js-nextを非表示
			} else {
				$next.show(); // #js-nextを表示
			}
		});
	};

	// initを実行
	init();
};


/**
 *
 * HTMLの読み込みが終わったら変数carouselに代入した処理を実行
 *
 */
$(function() {
	carousel();
});