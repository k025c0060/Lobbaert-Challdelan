window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. まず全要素を「透明＆下に配置」で隠す（即時実行）
  // これにより、ロード画面が消えた直後も文字は見えません
  gsap.set(".greet span", { 
    autoAlpha: 0, 
    y: 20 
  });

  // 2. ロード画面が消えるのを待ってからアニメーション開始
  // load.jsのアニメーション時間に合わせて調整してください（例: 2500ms = 2.5秒）
  const LOADING_TIME = 1500; 

  setTimeout(() => {
    
    // 念のため位置情報の再計算を行う
    ScrollTrigger.refresh();

    // 3. アニメーション設定
    gsap.utils.toArray(".greet span").forEach((line) => {
      gsap.to(line, {
        autoAlpha: 1, // ふわっと表示
        y: 0,         // 元の位置へ
        duration: 1,  // 1秒かけて
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top bottom", // 画面に入っていれば即発火
          toggleActions: "play none none none"
          // markers: true // 動きを確認したい場合はコメントを外す
        }
      });
    });

  }, LOADING_TIME);
});