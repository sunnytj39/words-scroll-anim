// アニメーション対象取得
var anim_targets = document.getElementsByClassName("slide-target");
var anim_wrappers = document.getElementsByClassName("slide-wrapper");

[].forEach.call(anim_targets, function(target, i) {

  // 要素の幅を取得
  var target_width = target.offsetWidth;
  var wrapper_width = anim_wrappers[i].offsetWidth;

  // 親要素と文字列の差を計算
  var diff = target_width - wrapper_width;

  // アニメーション時間
  var DURATION = diff / 40;

  // 親要素からはみ出している場合スクロール適用
  if (diff > 0) {
    // 元の位置に戻す
    function resetAnim() {
      return new Promise(resolve => {
        setTimeout(() => {
          target.style.transition = '0s';
          target.style.transform = 'translateX(0)';
          resolve();
        }, DURATION * 1000);
      })
    }
    
    // スクロール開始
    function startAnim() {
      return new Promise(resolve => {
        setTimeout(() => {
          target.style.transition = `${DURATION}s linear`;
          target.style.transform = `translateX(-${diff}px)`;
          resolve();
        }, 1000);
      })
    }

    // 繰り返す
    async function anim() {
      while(true) {
        const start = await startAnim();
        const reset = await resetAnim();
      }
    }

    anim();
  }
})
