// locomotive js smo0th
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap animation 
gsap.from(".nlink",{
    stagger: .2,  
    y:10,
    duration: 1,
    ease: Power3,
    opacity:0
})

Shery.textAnimate("#heading h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2",{
    y:50,
    stagger:.3,
    opacity:0,
    ease:Expo,
    duration:1
  })

// hero div img effect
  Shery.imageEffect("#susimg img",{
    style:4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.32,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.49,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6874872915866783},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true
})

Shery.imageEffect("#imgtext img",{
    style:3,
    config:{"uFrequencyX":{"value":5.34,"range":[0,100]},"uFrequencyY":{"value":5.34,"range":[0,100]},"uFrequencyZ":{"value":41.22,"range":[0,100]},"geoVertex":{"range":[1,64],"value":7.73},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500064075970855},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true
})

Shery.imageEffect("#visit_img img",{
    style:4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.24,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.51,"range":[0,10]},"geoVertex":{"range":[1,64],"value":8.69},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6818333148374209},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.61,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    //  debug:true
})

// sea img and clowd img effect
Shery.imageEffect("#onepic_img", {
    style: 6,
    config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.36,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6399739742279053},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.7,"y":0.78}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.93,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
    // debug: true,
    gooey: true,
  });
  Shery.imageEffect("#twopic_img img",{
    style:4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.24,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.51,"range":[0,10]},"geoVertex":{"range":[1,64],"value":8.69},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6818333148374209},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.61,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    //  debug:true
})


// banner img effect 
Shery.imageEffect("#bimg ",{
     style:5,    
     config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.013656162709497},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.14,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
    //  debug:true,
     gooey:true,
})
//futter effect video
document.querySelector("#ftext button")
.addEventListener("mouseover",function(){
    // alert();
    gsap.to("#futter video",{
      opacity:1,
      duration:1,
      ease:Power4
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
    // alert();
    gsap.to("#futter video",{
      opacity:0,
      duration:1,
      ease:Power4
    })
})