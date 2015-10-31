// ページ読み込み完了
$(function() {

    // #js-btnをクリックしたら
    $('#js-btn').on('click', function() {
        // #js-boxのwidthを500までアニメーション
        $('#js-box').animate({
            'width': 500,
            'height': 500
        }, 1000, 'swing');
    });

});