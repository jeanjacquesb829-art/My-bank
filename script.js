document.addEventListener("DOMContentLoaded",()=>{

const email="Jeanjacques.B2026@gmail.com"
const password="Nabil2026B"

const loginBtn=document.getElementById("loginBtn")

loginBtn.onclick=function(){

let e=document.getElementById("email").value
let p=document.getElementById("password").value

if(e===email && p===password){

document.getElementById("loginPage").style.display="none"
document.getElementById("app").style.display="flex"

generateTransactions()
createChart()
aiAnalysis()

}else{

document.getElementById("error").innerText="Identifiants incorrects"

}

}

/* NAVIGATION */

document.querySelectorAll(".sidebar li").forEach(item=>{

item.onclick=function(){

let page=this.dataset.page

document.querySelectorAll(".page").forEach(p=>{

p.style.display="none"

})

document.getElementById(page).style.display="block"

}

})

/* SOLDE */

let visible=true

document.getElementById("toggleBalance").onclick=function(){

let el=document.getElementById("balance")

if(visible){

el.innerText="****"

}else{

el.innerText="2804 €"

}

visible=!visible

}

/* CARTE */

document.getElementById("card").onclick=function(){

this.classList.toggle("flip")

}

})

/* TRANSACTIONS */

function generateTransactions(){

let container=document.getElementById("transactions")

let names=[

"Salaire","Amazon","Restaurant","Netflix",

"Transport","Essence","Apple","Supermarché",

"Pharmacie","Cinéma","Internet","Électricité"

]

for(let i=0;i<50;i++){

let amount=(Math.random()*200).toFixed(2)

let div=document.createElement("div")

div.className="transaction"

div.innerHTML=`

<span>${names[Math.floor(Math.random()*names.length)]}</span>

<span>${amount} €</span>

`

container.appendChild(div)

}

}

/* GRAPHIQUE */

function createChart(){

let ctx=document.getElementById("chart")

new Chart(ctx,{

type:"line",

data:{

labels:["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"],

datasets:[{

label:"Dépenses",

data:[40,80,30,90,50,70,60],

borderColor:"#22c55e"

}]

}

})

}

/* IA */

function aiAnalysis(){

document.getElementById("ai").innerText=

"IA : Vos dépenses principales concernent l'alimentation et le transport. Réduire les restaurants pourrait économiser environ 120 € par mois."

}
