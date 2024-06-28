let bill=document.getElementById("bill");
let tip=document.getElementById("tip");
let people=document.getElementById("people");
let tipprice=document.getElementById("tipprice");
let totalprice=document.getElementById("totalprice");
let incrtip=document.getElementById("incrtip");
let decrtip=document.getElementById("decrtip");
let incrpeople=document.getElementById("incrpeople");
let decrpeople=document.getElementById("decrpeople");

function ff(){
    let b=Number(bill.value);
    let t=Number(tip.value.split(" ")[0]);
    let p=Number(people.value);
    let calutip=Math.floor(b*(t/100));
    let divideintoperson=Math.floor(calutip/p);
    let total=b+calutip;
    tipprice.innerHTML=`$ ${divideintoperson}`;
    totalprice.innerHTML=`$ ${total}`;
}
tip.addEventListener("input",()=>{
    ff();
})
people.addEventListener("input",()=>{
    ff();
})
incrtip.addEventListener("click",()=>{
    let p=tip.value.split(" ")[0];
    let t=Number(p);
    if(t>=0 && t<100){
        tip.value=`${t+5} %`;
    }
    ff();
})
decrtip.addEventListener("click",()=>{
    let p=tip.value.split(" ")[0];
    let t=Number(p);
    if(t>0 && t<=100){
        tip.value=`${t-5} %`;
    }
    ff();
})
incrpeople.addEventListener("click",()=>{
    let p=Number(people.value);
    
    if(p>=1 && p<20){
        people.value=p+1;
    }
    ff();
})
decrpeople.addEventListener("click",()=>{
    let p=Number(people.value);
    if(p>1 && p<=20){
        people.value=p-1;
    }
    ff();
    
})
bill.addEventListener("input",()=>{
    
    let b=Number(bill.value);
    let t=Number(tip.value.split(" ")[0]);
    let p=Number(people.value);
    let calutip=Math.floor(b*(t/100));
    let divideintoperson=Math.floor(calutip/p);
    let total=b+calutip;
    tipprice.innerHTML=`$ ${divideintoperson}`;
    totalprice.innerHTML=`$ ${total}`;
})