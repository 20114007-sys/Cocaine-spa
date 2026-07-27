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

const compliments=[

"Your brain is genuinely one of the most attractive things about you.",

"You multitask like you're running three processors while I'm still loading one thought.",

"You buying me the MCL39 became one of my favourite memories.",

"You somehow turned Covid into the beginning of my favourite chapter.",

"I've never met someone as hardworking, smart and adorable as you.",

"You're the only person who can make me feel completely at home."

];

function newCompliment(){

document.getElementById("complimentText").innerHTML=
compliments[Math.floor(Math.random()*compliments.length)];

}

newCompliment();

const memories=[

"Kimchi & Co followed by Laban will always be one of my favourite dates.",

"I don't know if Besant Nagar remembers us, but I always will.",

"That tiny Church Street photobooth captured pictures. My heart captured the day.",

"Every time I look at my McLaren, I smile because of you.",

"I still laugh remembering you unwillingly advertising your brand around the mall 😂",

"Our weird FaceTime kisses deserve an Oscar."

];

function showMemory(i){

document.getElementById("memoryText").innerHTML=memories[i];

}

function showSection(id){

document.querySelectorAll(".page").forEach(x=>x.style.display="none");

document.getElementById(id).style.display="block";

}

const massage=document.getElementById("massageBox");

if(massage){

massage.addEventListener("mousemove",()=>{

massage.innerHTML="✨ Scritch Scritch... Hair Flip... Forehead Kiss... ❤️";

clearTimeout(window.massageTimer);

window.massageTimer=setTimeout(()=>{

massage.innerHTML="Move your finger here ❤️";

},1000);

});

}

function redeem(card){

card.style.background="#dff5e1";

card.innerHTML+="<br><br>✅ REDEEMED ❤️";

}

.promise-section{
    padding:100px 20px;
    text-align:center;
}

.promise-card{
    max-width:800px;
    margin:auto;
    background:white;
    padding:50px;
    border-radius:25px;
    box-shadow:0 20px 40px rgba(0,0,0,.08);
}

.promise-text{
    font-family:Caveat,cursive;
    font-size:34px;
    line-height:1.8;
}

.promise-card button{
    margin-top:40px;
    padding:18px 35px;
    border:none;
    border-radius:15px;
    background:#8338ec;
    color:white;
    font-size:18px;
    cursor:pointer;
}
