/* variables */
let quote= document.querySelector('.quote');
let person= document.querySelector('.person');
let btn= document.querySelector('#new-quote');

const quotes = [{
    quote: "Eda Mwone",
    person: 'Rangan'
},{
    quote: "Eda Podaaaaa",
    person: 'Kochu'
},{
    quote: "Ningal okke Ingane nadano",
    person: 'Anand'
},{
    quote: "Crazyyyyy",
    person: 'Saby'
},{
    quote: "Eda ivdethe lighting sheri aakkanm",
    person: 'Athulettan'
},{
    quote: "Kiran Superaaa",
    person: 'Mahatma Gandhi'
},{
    quote: "Kiran Adipwoliyaa",
    person: 'Jawahar Lal Nehru'
},{
    quote: "Kiran polle oru aal swapnangalil maathram",
    person: 'Narendra Modi'
},{
    quote: "Ee autistic myrane kond thott",
    person: 'Chckochan'
},{
    quote: "Vinay Superaaa",
    person: 'Abhimon'
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText=`"${quotes[random].quote}"`;
    person.innerText=quotes[random].person;
})

function hello(callback){
    callback();
    console.log("hello");
    setTimeout(()=>{console.log("good")},3000);
    callback();
}
function goodbye(){
    console.log("Goodbye");
}
hello(goodbye);


