/* plan
how I'm gonna do it

1)what I need to do

get each letter to animate 
one by one not as a hole word

2)how to make it happen

1)+
get the element which I want to animate
then I should take the text of this element
2)+
and split it into small parts (letters)
3)
after it I should wrap it all into 
spans and then 
4)
set a function which 
will give this span a class like 'animate'
which will make them animate and set a delay 
on that fuction

*/

const ourWord = document.querySelector('.letter-animation')
const text = ourWord.textContent
const splitedText = text.split("")

ourWord.textContent = "" //how it works ?

/* 
 we save the data into splitedText variable
 and in order to not have the same content 
 we clear a content of ourWord sting 
 and then we add a saved content into 
 an empty string
*/ 

for(let i=0; i<splitedText.length; i++){
    ourWord.innerHTML += "<span>" + splitedText[i] + "</span>"
}

let character = 0

let animation = setInterval(ontimer, 80)

function ontimer(){
    const spanElements = ourWord.querySelectorAll("span")[character]
    spanElements.classList.add("animation")
    character ++
    if (character == splitedText.length){
        stoptimer()
        return
    }
}

function stoptimer() {
    clearInterval(animation)
    animation = null;
}