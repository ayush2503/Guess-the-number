// parentss
const guessfeild = document.querySelector('.guessField');
const submit = document.querySelector('.guessSubmit');
const content = document.querySelector('#content')

// paragrapshs
let prev = document.querySelector('#prev');
const hint = document.querySelector('#hint');
const result = document.querySelector('#result');


// variables
let msg;
const para = document.querySelector('#para')

// for random number
let guessno = Math.floor(Math.random() * 100) + 1;
// console.log(guessno);

let guess_count = 1;

guessfeild.focus();

// epicpen

// *********adding promptt function*******

function cprompt() {
    const bgdiv = document.createElement('div');
    const body = document.querySelector('body');

    body.append(bgdiv);
    bgdiv.setAttribute('id', 'bgpp');


    // creation of prompt bg

    const pdiv = document.createElement('div');
    bgdiv.append(pdiv);
    pdiv.setAttribute('id', 'pdiv');

    // adding elements in the prompt 

    const head = document.createElement('h1');
    pdiv.append(head);
    head.setAttribute('id', 'head');
   
   
    // head.textContent='!!! GAME OVER !!!'
    head.textContent = msg;
    if (msg === 'Congrats!! you Won') {
        head.style.color = 'rgb(121, 202, 121)'
    }


    // creation of button 

    const button = document.createElement('button');
    pdiv.append(button)
    button.textContent = 'PLay Again'
    button.setAttribute('id', 'btn')

    // delete of prompt
    
    const playagain = document.querySelector('#btn')
   
    function initial() {

        bgdiv.remove();
        guess_count = 1
        guessfeild.disabled = false;
        submit.disabled = false;
        hint.textContent = '';
        prev.textContent = '';
        result.textContent = '';
        result.style.backgroundColor = '';
        guessfeild.placeholder='Guess b/w 1-100'

        guessfeild.value = '';
        guessfeild.focus()
        guessno = Math.floor(Math.random() * 100) + 1;
        // console.log(guessno);

    }

    playagain.addEventListener('click', initial)
}

//********** */ end of the prompt function *********


function endgame() {
    guessfeild.disabled = true;
    submit.disabled = true;
    result.style.backgroundColor = '';
    cprompt()
}


let abc = () => {

    // console.log('mc')
   
    const userg = Number(guessfeild.value);
    
    guessfeild.placeholder=''
    // if guess eneterd by user is not within the range and and not a number 
    if (userg >= 1 && userg <= 100) {


        // console.log(userg)
        if (guess_count === 1) {
            prev.textContent = 'previous guesses: '
        }


        prev.textContent += userg + ' '

        if (guess_count === 10) {

            hint.textContent = '';
            prev.textContent = '';
            result.textContent = '';
            msg = '!!! Game Over!!!'
            endgame()

        }
        
        
        else {

            if (userg === guessno) {
                prev.textContent = 'Congrats!! you gueses the right number';
                result.textContent = '';
                hint.textContent = '';
                msg = 'Congrats!! you Won'
                endgame()
            } 
            
            else if (userg < guessno) {
                result.textContent = 'Wrong';
                result.style.backgroundColor = 'rgb(247, 63, 63)';
                result.style.color = 'white';
                hint.textContent = 'Guess Higher';
            }
            
            else {
                result.textContent = 'Wrong';
                result.style.backgroundColor = 'rgb(247, 63, 63)'
                result.style.color = 'white'
                hint.textContent = 'Guess lower';
            }

        }

        guess_count++
        
        guessfeild.value = ''
        guessfeild.focus()

    }

}

guessfeild.addEventListener('keydown', (e) => {

        if (e.key === "Enter") {
            abc()
        }
    }

)
submit.addEventListener('click', abc);