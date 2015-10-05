// ページ読み込み完了
$(function() {
    var $box = $('#js-box');

    // ボタン1をクリック
    $('#js-btn1').on('click', function() {
        // #js-boxのCSSを変更
        $box.css({
           'background-color': '#f00'
        });
    });

    // ボタン2をクリック
    $('#js-btn2').on('click', function() {
        // #js-boxにクラスを付与
        $box.addClass('is-gray');
    });

    // ボタン3をクリック
    $('#js-btn3').on('click', function() {
        // #js-boxからクラスを削除
        $box.removeClass('is-gray');
    });

    // ボタン4をクリック
    $('#js-btn4').on('click', function() {
        // #js-boxに.is-grayがなかったら.is-grayを付与
        // #js-boxに.is-grayがあったら.is-grayを削除
        $box.toggleClass('is-gray');
    });

});