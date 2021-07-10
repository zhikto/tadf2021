var f3 = document.getElementById('f3')
var f2 = document.getElementById('f2')
var f1 = document.getElementById('f1')
var level = document.getElementById('level')
let flag = 2;

f3.addEventListener('click',function(){
    frag = 3;
    anime({
        targets: level,
        translateY: 128, 
        easing: 'easeInOutExpo',
    })
    anime({
        targets: f3,
        color: '#FFFFFF',
        background: '#0000FF'
    })
    anime({
        targets: f2,
        color: '#000000',
        background: '#FFFFFF'
    })
    anime({
        targets: f1,
        color: '#000000',
        background: '#FFFFFF'
    })
});

f2.addEventListener('click',function(){
    frag = 2;
    anime({
        targets: level,
        translateY: 0,
        easing: 'easeInOutExpo',
    })
    anime({
        targets: f3,
        color: '#000000',
        background: '#FFFFFF'
    })
    anime({
        targets: f2,
        color: '#FFFFFF',
        background: '#00FF00'
    })
    anime({
        targets: f1,
        color: '#000000',
        background: '#FFFFFF'
    })
});

f1.addEventListener('click',function(){
    frag = 1;
    anime({
        targets: level,
        translateY: -128,
        easing: 'easeInOutExpo',
    })
    anime({
        targets: f3,
        color: '#000000',
        background: '#FFFFFF'
    })
    anime({
        targets: f2,
        color: '#000000',
        background: '#FFFFFF'
    })
    anime({
        targets: f1,
        color: '#FFFFFF',
        background: '#FF0000'
    })
});