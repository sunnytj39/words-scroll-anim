var anim_targets = document.getElementsByClassName("slide-target");
var anim_wrappers = document.getElementsByClassName("slide-wrapper");

console.log(anim_targets);

[].forEach.call(anim_targets, function(target, i) {
console.log(target, i);

  var target_width = target.offsetWidth;
  var wrapper_width = anim_wrappers[i].offsetWidth;
  var diff = target_width - wrapper_width;
  
  console.log(diff);

  function resetAnim() {
    return new Promise(resolve => {
      setTimeout(() => {
        target.style.transition = '0s';
        target.style.transform = 'translateX(0)';
        resolve();
      }, 6000);
    })
  }
  
  function startAnim() {
    return new Promise(resolve => {
      setTimeout(() => {
        target.style.transition = '5s linear';
        target.style.transform = `translateX(-${diff}px)`;
        resolve();
      }, 1000);
    })
  }
  
  async function anim() {
    while(true) {
      const start = await startAnim();
      const reset = await resetAnim();
    }
  }
  
  anim();
})
