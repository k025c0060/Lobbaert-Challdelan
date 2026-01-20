$(function(){
    // 3000ミリ秒（3秒）後に処理を実行
    setTimeout(function(){
      
      // .load をフェードアウト（消す）
      $('.load').fadeOut(500, function(){
        // .loadが消え終わったら .main をフェードイン（表示）
        $(this).remove();
        $('.main').fadeIn(500);
      });

    }, 1000); // ここで待機時間を指定
});