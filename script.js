
setInterval(()=>{
    const millisecs=document.querySelector('.millisecs');
    const hour=document.querySelector('.hr');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');
const date=new Date();
hour.textContent=date.getHours();
minute.textContent=date.getMinutes();
second.textContent=date.getSeconds();
millisecs.textContent=date.getMilliseconds();
});