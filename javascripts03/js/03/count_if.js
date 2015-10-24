$(function() {
	var num = 0;

	$('#js-btn').on('click', function() {
		num++;

		// if (num >= 10) {
		// 	$('#js-num').text('Yeah!');
		// } else if (num === 3) {
		// 	$('#js-num').text('さん！');
		// } else {
		// 	$('#js-num').text(num);
		// }

		if (num >= 10) {
			$('#js-popup').fadeIn();
		} else {
			$('#js-num').text(num);
		}


	});
});















