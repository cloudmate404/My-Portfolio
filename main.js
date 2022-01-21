const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mainMenu = document.getElementById('mainMenu');
const viewButton = document.getElementById('viewButton');
const home = document.getElementById('logo');

home.addEventListener('click', () => {
    window.scrollTo(0,0)});

//LOAD SCREEN STATE
const screenHead = document.getElementById('screenHead');
const screenLogo = document.getElementById('screenLogo');
const loadScreenState = document.querySelector('.loadScreenState');
const body = document.body

window.onload =(e)=>{
    // window.scrollTo({top:0, behavior:'smooth'})
    loadAnimation()
    window.scrollTo(0,0)

    

}

function loadAnimation(){
    const tl2 = gsap.timeline({defaults: {duration:1, ease: Power1.easeOut}});
    loadScreenState.style.display = 'block';
    body.style.overflowY = 'hidden'

    tl2.fromTo(screenHead,{
        y:-200
    },{
        y: 0
    });

    tl2.to(loadScreenState,{ opacity:0, delay:3, duration:0.4});
}

setTimeout(overF, 4000);
function overF (){
    body.style.overflowY = 'visible'

}


// CONTACT SECTION

const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');

const tl = gsap.timeline({defaults:{duration: 1}});


//Line

const start = "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";

const end = "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";


//Elastic Effect

containers.forEach(container =>{
    const input = container.querySelector('.input');
    const line = container.querySelector('.elastic-line');
    const placeholder = container.querySelector('.placeholder');

    input.addEventListener('focus', ()=>{
        //Check to see if there's any text in the input
        if(!input.value){
            tl.fromTo(line,{
                attr: {d: start}
            },{
                attr: {d: end}, ease: 'Power2.easeOut', duration: 0.75
            });

            tl.to(line,{attr: {d:start}, ease: Elastic.easeOut.config(3,0.5)},'<50%');

            //Placeholder Shift
            tl.to(placeholder,{
                y:-15, left:0, scale: 0.7, duration:0.5, ease: Power2.easeOut
            },'<15%');
        };
    });
});


//Revert Back if not focused

form.addEventListener('click', ()=>{
   
    containers.forEach(container =>{
        const input = container.querySelector('.input');
        const line = container.querySelector('.elastic-line');
        const placeholder = container.querySelector('.placeholder');

        if(document.activeElement !== input && !input.value){
            gsap.to(placeholder, {y:0, x:0, scale:1, duration:0.5, ease: Power2.easeOut})
        };

        //VALIDATION

        //Name Validation
        input.addEventListener('input', e=>{
            if(e.target.type === 'text'){
                let inputText = e.target.value;
                if(inputText.length > 2){
                    //COLORIZE
                    colorize('#05FDD8', line, placeholder);
                }else{
                    colorize('#FE2156', line, placeholder)
                }
            }
        
            // Email validation
            if(e.target.type === 'email'){
                let validEmail = validateEmail(e.target.value);
                if(validEmail){
                    //COLORIZE
                    colorize('#05FDD8', line, placeholder);
                }else{
                    colorize('#FE2156', line, placeholder)
                }
            }

            // Phone validation

            if(e.target.type === 'tel'){
                let validPhone = validatePhone(e.target.value);
                if(validPhone){
                    //COLORIZE
                    colorize('#05FDD8', line, placeholder);
                }else{
                    colorize('#FE2156', line, placeholder)
                }
            }

        });

        
    });
});





// checking email validation

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function validatePhone(phone) {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
  }

// COLORIZE FUNCTION
function colorize(color, line, placeholder){
    gsap.to(line, {stroke: color, duration: 0.75});
    gsap.to(placeholder,{color: color, duration:0.75});
}






//Send Button
const contactBtn = document.querySelector('.contactBtn');
const tl3 = gsap.timeline({defaults:{duration:0.75, ease:Power2.easeOut}})

contactBtn.addEventListener('click', e=>{
    e.preventDefault();
    tl3.to('.contactHead, .contactBody', {y:30, opacity:0, pointerEvents: 'none'});
    tl3.to('form',{scale:0.8},'<');
    tl3.fromTo('.submitted', {opacity:0, y:30}, {opacity:1, y:0});
    //Hand Wave

    gsap.set('#hand', {transformOrigin: 'left'})
    gsap.fromTo('#hand',{
        rotation: 0, y:0
    },{
        rotation:-10, y:2, ease:Elastic.easeOut.config(3,0.3), duration:4, delay:1
    })
})


//Menu Hamburger
// gsap.set(mainMenu,{ opacity:1});

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



// document.querySelector('.openMenuDiv').addEventListener('click', div);

// function div(){
//     console.log('na another thing')
// }


document.onclick = function(clickEvent){
        if(  clickEvent.target.id !== 'mainMenu' && clickEvent.target.id !== 'closeMenu' && clickEvent.target.id !== 'openMenu' && clickEvent.target.id !== 'viewButton' ){
            // gsap.to(mainMenu,{x:'100%', duration:1})
    
            menuClose();
            console.log('omooooo')
      
        }
    
    
};

// document.mainMenu.onclick = function(clickEvent){
//     if(  clickEvent.target.id !== 'mainMenu' && clickEvent.target.id !== 'closeMenu' && clickEvent.target.id !== 'openMenu' ){
//         // gsap.to(mainMenu,{x:'100%', duration:1})

//         menuClose();
//         console.log('omooooo')
  
//     }


// };

// document.onclick = function(clickEvent){
//     if(clickEvent.target.tagName = 'a'){
//         menuClose();
//         console.log('lets run')


//     }
// };

viewButton.addEventListener('click', test)

function test(){
    console.log('viewBtn')
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




