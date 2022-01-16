const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mainMenu = document.getElementById('mainMenu');
const viewButton = document.querySelector('.viewButton');


//Menu Hamburger
gsap.set(mainMenu,{ opacity:1});

openMenu.addEventListener('click', menuOpen);
function menuOpen(){
    // gsap.to(mainMenu,{x:'0%', duration:1});
    // mainMenu.style.pointerEvents = 'auto';
    // mainMenu.style.transform ='translateX(0%)';
    mainMenu.classList.add('pp')
    console.log('clickinh')
};

closeMenu.addEventListener('click', menuClose);
function menuClose(){
    // gsap.to(mainMenu,{x:'100%', duration:1})
    // mainMenu.style.transform ='translateX(100%)';
    mainMenu.classList.remove('pp')

    console.log('closed')

};



document.querySelector('.openMenuDiv').addEventListener('click', div);

function div(){
    console.log('na another thing')
}


document.onclick = function(clickEvent){
    if(clickEvent.target.id !== 'mainMenu' && clickEvent.target.id !== 'closeMenu' && clickEvent.target.id !== 'openMenu' ){
        // gsap.to(mainMenu,{x:'100%', duration:1})

        menuClose();
        console.log('omooooo')
  
    }
    
}

// document.onclick = function(clickEvent){
//     if(mainMenu.classList.contains('menuO') && clickEvent.target.id !== 'mainMenu' && clickEvent.target.id !== 'closeMenu'){
//         linkClose()
    
// }





// const viewButtonTl = gsap.timeline({
//     defaults: { duration: 0.35, ease: Power2.easeOut }
// });
// gsap.set(viewButton,{opacity:0});
// viewButtonTl.fromTo(viewButton,{
//     x:200, opacity:0, scale: 0   
// },{
//     x:0, opacity: 1, scale: 1, delay: 6,duration: 2
// });

