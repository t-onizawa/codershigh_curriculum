// HTMLの読み込みが終わったら
$(function() {

	// 変数にjQueryで使うidがjs-menu-targetとjs-logout-targetをそれぞれ代入
	var $menuTarget = $('#js-menu-target'),
		$logoutTarget = $('#js-logout-target');

	// idがjs-menu-triggerの要素をクリックしたら
	$('#js-menu-trigger').on('click', function() {

		// もし「$menuTarget」が見えていたら
		if ($menuTarget.is(':visible')) {

			// 「$menuTarget」を非表示
			$menuTarget.hide();

		// それ以外
		} else {

			// 「$menuTarget」を表示
			$menuTarget.show();
		}
	});

	// idがjs-logout-triggerの要素をクリックしたら
	$('#js-logout-trigger').on('click', function() {

		// 「$logoutTarget」をフェードイン
		$logoutTarget.fadeIn();
	});

	// classがjs-logout-closeの要素をクリックしたら
	$('.js-logout-close').on('click', function() {

		// 「$logoutTarget」をフェードアウト
		$logoutTarget.fadeOut();
	});
});










