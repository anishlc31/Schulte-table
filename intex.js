const firstpage=document.getElementById('firstpage')
const secondpage=document.getElementById('secondpage')
const thridpage=document.getElementById('thridpage')
const forthpage=document.getElementById('forthpage')
const fifthpage=document.getElementById('fifthpage')
const lastpage=document.getElementById('lastpage')
const newgame=document.querySelector('#newgame').onclick = function(){
    secondpage.style.display="inline"
    firstpage.style.display="none";
}

const back =document.querySelector('#back2').onclick= ()=>{
    secondpage.style.display="none"
    firstpage.style.display="inline";
}

time2.addEventListener('click',  ()=>{
    secondpage.style.display="none"
    thridpage.style.display="block"



    document.querySelector("#each3").onclick=function for3 (){
                
            
        //for table
        
        muntiplyNum=9;
        document.getElementById("mainpart").style.gridTemplateColumns='100px 100px 100px'
        document.getElementById("mainpart").style.gridTemplateRows='100px 100px 100px'
        formTable2();
    }
    document.querySelector("#each4").onclick=function for4 (){
    
    
        //for table
        muntiplyNum=16;
        document.getElementById("mainpart").style.gridTemplateColumns='100px 100px 100px 100px '
        document.getElementById("mainpart").style.gridTemplateRows='100px 100px 100px 100px '
        formTable2();
    }
    document.querySelector("#each5").onclick=function for5 (){
    
    
        //for table
        muntiplyNum=25;
        document.getElementById("mainpart").style.gridTemplateColumns='70px 70px 70px 70px 70px '
        document.getElementById("mainpart").style.gridTemplateRows='70px 70px 70px 70px 70px '
        formTable2();
    }
    document.querySelector("#each2").onclick=function for2 (){
        //for table
        muntiplyNum=4;
        document.getElementById("mainpart").style.gridTemplateColumns='100px 100px '
        document.getElementById("mainpart").style.gridTemplateRows='100px 100px '
       formTable2();

    }
   
})



    const restart = document.querySelectorAll("#restart").forEach(element =>{
        element.addEventListener('click', ()=>{
            
        
        secondpage.style.display="inline"
        thridpage.style.display="none"
        forthpage.style.display="none"
        fifthpage.style.display="none"
        lastpage.style.display="none"
    })
    })


number.addEventListener("click", ()=>{
    secondpage.style.display="none"
    forthpage.style.display="block"


    function formTable(){
        forthpage.style.display="none"
        fifthpage.style.display="inline"
        //for time
        var timeleft=0;
        var time= setInterval(function() {
        if(timeleft>=0)
        {
            document.getElementById('fortime').innerHTML=timeleft;
        }
        timeleft+=1;
    },1000);
        
    
    
    var numbers = [];
    for(x=0;x<muntiplyNum;x++){
          
        let nums=Math.floor(Math.random() * muntiplyNum)+1;
        
        if(numbers.includes(nums)){
            x--;
            
          }else{
            var maintable=document.createElement('button')
            maintable.className = "maintable3";
                document.getElementById('mainpart').appendChild(maintable);
            maintable.innerHTML=nums;
            numbers.push(nums)
        }
      
        
    }
        //For score value
        var num=numbers.sort(function(a, b){return a-b});
        
        
        const forscore= document.getElementById('forscore');
        var turn=document.getElementById('forturn')
        forscore.innerHTML="0"
        var valu=01;
        var mainTable =document.querySelectorAll(".maintable3").forEach(element =>{
          element.addEventListener('focus', ()=>{
            if(valu == element.innerText){
                
                forscore.innerHTML=valu;
              
              valu++;
              forturn.innerHTML=valu;
              //element.innerText=numbers.length+(valu-1);
              if(muntiplyNum==element.innerText){
                fifthpage.style.display='none';
                lastpage.style.display='inline';
                document.getElementById('finalScore').innerHTML= timeleft+'sec';

            }
            }
        })
    })
        
        
        }
       


            document.querySelector("#each3").onclick=function for3 (){
                
            
                //for table
                muntiplyNum=9;
                document.getElementById("mainpart").style.gridTemplateColumns='100px 100px 100px'
                document.getElementById("mainpart").style.gridTemplateRows='100px 100px 100px'
                formTable();
            }
            document.querySelector("#each4").onclick=function for4 (){
            
            
                //for table
                muntiplyNum=16;
                document.getElementById("mainpart").style.gridTemplateColumns='100px 100px 100px 100px '
                document.getElementById("mainpart").style.gridTemplateRows='100px 100px 100px 100px '
                formTable();
            }
            document.querySelector("#each5").onclick=function for5 (){
            
            
                //for table
                muntiplyNum=25;
                document.getElementById("mainpart").style.gridTemplateColumns='70px 70px 70px 70px 70px '
                document.getElementById("mainpart").style.gridTemplateRows='70px 70px 70px 70px 70px '
                formTable();
            }
            document.querySelector("#each2").onclick=function for2 (){
                //for table
                muntiplyNum=4;
                document.getElementById("mainpart").style.gridTemplateColumns='100px 100px '
                document.getElementById("mainpart").style.gridTemplateRows='100px 100px '
               formTable();
            }
            document.getElementsByClassName("restart").onclick= ()=>{
             mainTable.clear();
            }

          
})



