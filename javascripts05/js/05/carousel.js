//========================================================================
/**
 *
 * // 関数の作成 //
 *
 * - JavaScriptは関数functionを使い、処理をまとめて形作ります。
 *   ※まとめることにより、煩雑・冗長的になることを防ぐことが出来ます。
 * - 変数にfunction(){} で囲った処理を作成し、代入、変数名に()をつけて実行します。
 *
 * ■ 引数
 * - 処理をまとめて作る際に、差異部分を実行時に指定することができます。
 * - 名前は任意。
 *
 * ■ このファイルの構成 ■
 * var carousel = function() {
 *
 *      // カルーセルの処理を記述する（ここではcarouselで囲んだ部分は実行されない）
 *
 *      // 引数を使っている箇所
 * 		var slide = function(引数として渡される値〇〇〇) {
 *			// アニメーションの+=と-=を引数から使用する
 *		    $items.animate({
 *			    'left': 〇〇〇 + itemWidth + 'px'
 *		    }, 200, 'swing', function() { // アニメーションが終わったら
 *      };
 *
 *      $prevをクリックしたらslide(引数に渡す値);
 *      $nextをクリックしたらslide(引数に渡す値);
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
	/**
	 * 各要素を変数に格納
	 */
	var $items = $('#js-items'),
		$item = $items.find('li'), // カリキュラムではimgを取得しましたが、汎用性を考え、liに変更します
		itemWidth = $item.width(), // liの横幅を取得
		itemLength = $item.length, // liの数を取得
		$prev = $('#js-prev'),
		$next = $('#js-next');

	var slide = function(direction) { // 引数名direction
		// #js-itemsがアニメーション中だったら処理を抜ける(後述した処理をしない)
		if ($items.is(':animated')) {
			return;
		}

		// #js-itemsアニメーション, leftポジションに変数itemWidth分を足す
	 	$items.animate({
			'left': direction + itemWidth + 'px' // 引数directionを使用
		}, 200, 'swing', function() { // アニメーションが終わったら

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

	/**
	 * #js-prevをクリックしたら
	 */
	$prev.on('click', function() {
		slide('+='); //処理slideの引数に'+='を渡す
	});

	/**
	 * #js-nextをクリックしたら
	 */
	$next.on('click', function() {
		slide('-='); //処理slideの引数に'-='を渡す
	});
};


/**
 *
 * HTMLの読み込みが終わったら変数carouselに代入した処理を実行
 *
 */
$(function() {
	carousel();
});
















