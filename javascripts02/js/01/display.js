// ページ読み込み完了
$(function() {
    var $box = $('#js-box');

    // #js-btn1をクリックしたら
    $('#js-btn1').on('click', function() {
        // #js-boxを表示
        $box.show();
    });

    // #js-btn2をクリックしたら
    $('#js-btn2').on('click', function() {
        // #js-boxを非表示
        $box.hide();
    });

    // #js-btn3をクリックしたら
    $('#js-btn3').on('click', function() {
        // #js-boxをフェードイン
        $box.fadeIn();
    });

    // #js-btn4をクリックしたら
    $('#js-btn4').on('click', function() {
        // #js-boxをフェードアウト
        $box.fadeOut();
    });

});