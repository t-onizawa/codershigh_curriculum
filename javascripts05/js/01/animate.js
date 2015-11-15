// ページが読み込み完了
$(function() {

    // #js-btnをクリックしたら
    $('#js-btn').on('click', function() {
        // #js-boxのmargin-leftを500までアニメーション
        $('#js-box').animate({
            'margin-left': 500
        }, 1000, 'swing');
    });

});