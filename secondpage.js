const hover1=document.getElementById('hover1')
const hover2=document.getElementById('hover2')

const time2 =document.querySelector("#time2")
const number=document.querySelector("#number")

time2.addEventListener("mouseover",()=>{
hover1.innerHTML="You can play accoding the time.Your Final score will be number that you click in last"
})
time2.addEventListener("mouseout",()=>{
    hover1.innerHTML="";
})
number.addEventListener("mouseover",()=>{
    hover2.innerHTML="Game will over when you click all number. Your score will be time that you finist."
    })
    number.addEventListener("mouseout",()=>{
        hover2.innerHTML="";
    })  