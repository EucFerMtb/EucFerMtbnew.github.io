/*ローディングから画面遷移*/
// ===============================================================================
const loadingAreaGrey = document.querySelector('#loading');             //ローディング画面の定数
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中（グレースクリーン）
  loadingAreaGrey.animate(
    // 動かす内容
    {
      opacity: [1, 0],            //不透明→透明に遷移させてローディング画面を消す
      visibility: 'hidden',       //アニメーション終了時に要素を非表示にしてクリックできないようにする
    },
    // 動きの詳細
    {
      duration: 2000,
      delay: 1200,                //薄緑のスクリーンのアニメーションが終わってから動かすようにわざと遅らせる
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中（薄緑スクリーン）
  loadingAreaGreen.animate(
    {
      // 横方向は基準値のまま、縦方向を上側に100ずらしていく
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );  

  // ローディング中テキスト
  loadingText.animate(
    [
      // 動かす内容(タイミング毎の動きで配列で記載)
      {
        opacity: 1,
        offset: .8  //80%まではLoadingを不透明で表示
      },
      {
        opacity: 0,
        offset: 1  //100%
      },
    ], 
    {
      // 動きの詳細
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});


/* スライドメニュー(右側から) */
// ================================================================== 
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});



