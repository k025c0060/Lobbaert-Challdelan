// 画像を含むページ全体の読み込みを待つ
window.addEventListener("load", () => {
  
  // プラグイン登録
  gsap.registerPlugin(ScrollTrigger);

  // ロード画面が消える時間を考慮して待機 (前回のtext.jsと同じ秒数に合わせる)
  const LOADING_TIME = 1500; 

  setTimeout(() => {
    // 位置情報の強制再計算
    ScrollTrigger.refresh();

    const items = gsap.utils.toArray(".js-trigger");

    items.forEach((item) => {
      // img要素を取得
      const img = item.querySelector("img");

      gsap.fromTo(
        img,
        {
          yPercent: 0, // 開始位置
          scale: 1.2   // ★重要：少し拡大しておく（後述）
        },
        {
          yPercent: -20, // 上に20%移動
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom", // 画面の下に入ったら開始
            end: "bottom top",   // 画面の上に出たら終了
            scrub: 1,            // スクロールに連動
            // markers: true,    // デバッグ用
          },
        }
      );
    });

  }, LOADING_TIME);
});