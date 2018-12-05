let controller = new ScrollMagic.Controller();

let containerScene = new ScrollMagic.Scene({
  triggerElement: '#container',
  duration: 300
});

let blockTween = new TweenMax.to('#dark-layer', 1.5, {
  opacity: '0'
});

containerScene.setTween(blockTween)
containerScene.setPin('#block')
.addIndicators()
.addTo(controller);

