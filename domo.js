function getTime(){
    let time= new Date();
    let hr=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();

    if(hr>12){        
        hr=hr-12;
        document.getElementById("am").innerText="PM"        
    }
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
  
if(((hr==6)||(hr==7)||(hr==8)||(hr==9)||(hr==10)||(hr==11))&&(document.getElementById("am").innerText=="AM")){
    document.getElementById("text").innerText="GRAB SOME HEALTHY BREAKFAST!!!"
    document.getElementById("imag").src="msun img.svg"
    document.getElementById("word").innerText="GOOD MORNING!! WAKE UP !!"
}
if(((hr==12)||(hr==1)||(hr==2)||(hr==3))&&(document.getElementById("am").innerText=="PM")){
    document.getElementById("text").innerText="LET'S HAVE SOME LUNCH !!"
    document.getElementById("imag").src="aft image.svg"
    document.getElementById("word").innerText="GOOD AFTERNOON !! TAKE SOME SLEEP"
}
if(((hr==4)||(hr==5)||(hr==6)||(hr==7))&&(document.getElementById("am").innerText=="PM")){
    document.getElementById("text").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    document.getElementById("imag").src="lunch_image.png"
    document.getElementById("word").innerText="GOOD EVENING !!"
}
if(((hr==8)||(hr==9)||(hr==10)||(hr==11))&&(document.getElementById("am").innerText=="PM")){
    document.getElementById("text").innerText="CLOSE YOUR EYES AND GO TO SLEEP"
    document.getElementById("imag").src= "NIGHT IMG.SVG"
    document.getElementById("word").innerText="GOOD NIGHT !!"
}
document.getElementById("hour").innerText=hr
document.getElementById("minute").innerText=min
document.getElementById("second").innerText=sec

setTimeout(getTime,1000);
}
getTime();

function set(){
    
    let fff = document.getElementById("first").options[document.getElementById("first").selectedIndex].innerText;
    document.getElementById("one").innerText=fff
  
    let ggg = document.getElementById("second2").options[document.getElementById("second2").selectedIndex].innerText;
    document.getElementById("two").innerText=ggg
  
    let hhh = document.getElementById("third3").options[document.getElementById("third3").selectedIndex].innerText;
    document.getElementById("three").innerText=hhh
  
    let iii = document.getElementById("fourth4").options[document.getElementById("fourth4").selectedIndex].innerText;
    document.getElementById("four").innerText=iii
  
  }
  
  