let controller = new ScrollMagic.Controller();

let blockTween = new TweenMax.to('#container', 1.5, {
  backgroundColor: 'red'
});

let containerScene = new ScrollMagic.Scene({
  triggerElement: '#container'
})
.setTween(blockTween)
.addIndicators()
.addTo(controller);