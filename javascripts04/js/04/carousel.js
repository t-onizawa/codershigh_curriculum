// HTMLの読み込みが終わったら
$(function() {

	/**
	 * 各要素を変数に格納
	 */
	var $items = $('#js-items'),
		$item = $items.find('li'), // カリキュラムではimgを取得しましたが、汎用性を考え、liに変更します
		itemWidth = $item.width(), // liの横幅を取得
		itemLength = $item.length, // liの数を取得
		$prev = $('#js-prev'),
		$next = $('#js-next');

	/**
	 * #js-prevをクリックしたら
	 */
	$prev.on('click', function() {

		// #js-itemsがアニメーション中だったら処理を抜ける(後述した処理をしない)
		if ($items.is(':animated')) {
			return;
		}

		// #js-itemsアニメーション, leftポジションに変数itemWidth分を足す
	 	$items.animate({
			'left': '+=' + itemWidth + 'px'
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
	});

	/**
	 * #js-nextをクリックしたら
	 */
	$next.on('click', function() {

		// #js-itemsがアニメーション中だったら処理を抜ける(後述した処理をしない)
		if ($items.is(':animated')) {
			return;
		}

		// #js-itemsアニメーション, leftポジションに変数itemWidth分を引く
		$items.animate({
			'left': '-=' + itemWidth + 'px'
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
	});
});
















