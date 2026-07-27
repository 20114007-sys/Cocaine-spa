const PASSWORD="Kimchi";

function unlock(){

let p=document.getElementById("password").value;

if(p===PASSWORD){

document.getElementById("login").style.display="none";

document.getElementById("main").style.display="block";

}

else{

document.getElementById("wrong").innerHTML="Wrong Password ❤️";

}

}

for(let i=0;i<35;i++){

let f=document.createElement("div");

f.className="flower";

f.innerHTML=Math.random()>.5?"🌸":"🤍";

f.style.left=Math.random()*100+"vw";

f.style.animationDuration=8+Math.random()*10+"s";

f.style.fontSize=18+Math.random()*18+"px";

f.style.animationDelay=Math.random()*10+"s";

document.getElementById("flowers").appendChild(f);

}

function beginJourney(){

document.getElementById("letter").style.display="block";

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

typeLetter();

}

const message=

`When we were in Bangalore,

you asked me for just one thing.

Honesty.

Not flowers.

Not gifts.

Not grand gestures.

Just honesty.

And I failed you.

I lied even after you trusted me enough to tell me how much that would hurt you.

I cannot undo that decision.

But I can decide who I become after it.

This little spa isn't meant to erase what happened.

It can't.

It's simply my first step towards earning your trust again.

You deserve someone whose words feel safe.

I promise I'll spend every day becoming that person.

I love you,

more than my ego,

more than my comfort,

and certainly more than my fear of difficult conversations.

Love,

Your Forgetful Gondus ❤️`;

let i=0;

function typeLetter(){

let target=document.getElementById("typing");

target.innerHTML="";

clearInterval(window.writer);

window.writer=setInterval(()=>{

if(i<message.length){

target.innerHTML+=message.charAt(i);

i++;

}

},28);

}
