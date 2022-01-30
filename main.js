const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mainMenu = document.getElementById('mainMenu');
const viewButton = document.getElementById('viewButton');
const home = document.getElementById('logo');
const thebody = document.querySelector('.theRest');

home.addEventListener('click', () => {
    window.scrollTo(0,0)});

//LOAD SCREEN STATE
const screenHead = document.getElementById('screenHead');
const loadScreenState = document.querySelector('.loadScreenState');

window.addEventListener('load', function(){
    loadScreenState.parentElement.removeChild(loadScreenState);

});

loadAnimation()
function loadAnimation(){
    const tl2 = gsap.timeline({defaults: {duration:1, ease: Power1.easeOut}});
    loadScreenState.style.display = 'block';

    tl2.fromTo(screenHead,{
        y:-200
    },{
        y: 0
    });

}


// READ MORE FUNCTION
function readMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// CONTACT SECTION

const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');
const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const subjectInput = document.querySelector('.input-subject');

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
                    colorize('#FE2156', line, placeholder);

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




const submitted = document.querySelector('.submitted')

//Send Button
const contactBtn = document.querySelector('.contactBtn');
const tl3 = gsap.timeline({defaults:{duration:0.75, ease:Power2.easeOut}})

form.addEventListener('submit', e=>{
   
    if(nameInput.value.length < 3){
        nameInput.focus();
        document.querySelector('.validName').style.display='block';
        e.preventDefault();
    }else{
        document.querySelector('.validName').style.display='none';

    }

    if(emailInput.value == ''){
        emailInput.focus();
        document.querySelector('.validEmail').style.display='block';
        e.preventDefault();
    }else{
        document.querySelector('.validEmail').style.display='none';

    }

    if(subjectInput.value.length < 3){
        subjectInput.focus();
        document.querySelector('.validSubject').style.display='block';
        e.preventDefault();

    }else{
        document.querySelector('.validSubject').style.display='none';

    }


   
   
})


//Menu Hamburger

openMenu.addEventListener('click', menuOpen);
function menuOpen(){
    mainMenu.classList.add('pp')
    console.log('clickinh')
};

closeMenu.addEventListener('click', menuClose);
function menuClose(){
    mainMenu.classList.remove('pp')

    console.log('closed')

};





document.onclick = function(clickEvent){
        if(  clickEvent.target.id !== 'mainMenu' && clickEvent.target.id !== 'closeMenu' && clickEvent.target.id !== 'openMenu' && clickEvent.target.id !== 'viewButton' ){
            // gsap.to(mainMenu,{x:'100%', duration:1})
    
            menuClose();
            console.log('omooooo')
      
        }
    
    
};



viewButton.addEventListener('click', test)

function test(){
    console.log('viewBtn')
}






