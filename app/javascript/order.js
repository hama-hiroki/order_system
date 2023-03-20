const orderButtons = document.querySelectorAll(".menu-item-button");

// ボタンに注文イベントを追加する
orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 確認ダイアログを表示する
    const confirmed = confirm('注文しますか？');
    
    // OKがクリックされた場合は注文完了ダイアログを表示する
    if (confirmed) {
      alert('注文が完了しました！');
    }
  });

document.addEventListener("DOMContentLoaded", function() {
  var itemCount = 10; // 商品数
  var customerPageUrl = "http://example.com/mypage"; // カスタマーマイページのURL

  // 注文ボタンをクリックしたときの処理
  document.querySelectorAll(".menu-item-button").forEach(function(button) {
    button.addEventListener("click", function() {
      // 確認ダイアログを表示する
      document.getElementById("confirm-dialog").style.display = "block";
    });
  });

  // OKボタンをクリックしたときの処理（注文が完了し、カスタマーマイページに追加される）
  document.getElementById("confirm-ok").addEventListener("click", function() {
    // 商品数を1減らす
    itemCount -= 1;

    // カスタマーマイページに注文内容を追加する（例えばAjaxを使用）
    // ...

    // 完了ダイアログを表示する
    document.getElementById("confirm-dialog").style.display = "none";
    document.getElementById("complete-dialog").style.display = "block";
  });

  // キャンセルボタンをクリックしたときの処理（確認ダイアログを閉じる）
  document.getElementById("confirm-cancel").addEventListener("click", function() {
    document.getElementById("confirm-dialog").style.display = "none";
  });

  // 完了ダイアログのOKボタンをクリックしたときの処理（ダイアログを閉じる）
  document.getElementById("complete-ok").addEventListener("click", function() {
    document.getElementById("complete-dialog").style.display = "none";
    // カスタマーマイページに遷移する
    location.href = customerPageUrl;
  });
});
});