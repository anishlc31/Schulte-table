

    function formTable2(){
        forthpage.style.display="none"
        fifthpage.style.display="inline"
        //for time
        var time= setInterval(function() {
        if(timeleft>=0)
        {
            document.getElementById('fortime').innerHTML=timeleft;
        }
        timeleft-=1;

        if(timeleft<=0){
            
            fifthpage.style.display='none';
            lastpage.style.display='inline';
            document.getElementById('finalScore').innerHTML= valu-1;
           }
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
              element.innerText=numbers.length+(valu-1);
              
            }
        })
    })

 
        
        
        }
       


          
        document.getElementById('sec15').onclick=function (){
            timeleft=15;
            thridpage.style.display="none"
            forthpage.style.display="inline"
        }

        document.getElementById('sec30').onclick=function (){
            timeleft=30;
            thridpage.style.display="none"
            forthpage.style.display="inline"
        }
        document.getElementById('sec60').onclick=function (){
            timeleft=60;
            thridpage.style.display="none"
            forthpage.style.display="inline"
        }
        document.getElementById('sec120').onclick=function (){
            timeleft=120;
            thridpage.style.display="none"
            forthpage.style.display="inline"
        }