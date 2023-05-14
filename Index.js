function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM";
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12
        }
    }
    if(hh==0)

    {
        hh=12;
    }
}
function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM"
   
    if(hh>=12)
    {
      am_pm="PM"
    
        if(hh>=13)
        {
            // hh-=12;
            hh=hh-12
          
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm}:${am_pm}`
    document.getElementById("Time").innerHTML=fullTime
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="March"
    }
    else if(mo==3)
    {
        mo="April"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Oep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else if(mo==11)
    {
        mo="Dec"
    }
    var fulldate=`${dd}/${mo}/${yy}`
    document.getElementById("Date").innerHTML=fulldate;
    switch(day)
    {
        case 0:
        day="Sunday"
        document.body.style.backgroundImage="url(../Asset/Images/sun.jpg)"
        break;
        case 1:
        day="Monday"
        document.body.style.backgroundImage="url(../Asset/Images/swan.jpg)"
        break;
        case 2:
        day="Tuesday"
        document.body.style.backgroundImage="url(../Asset/Images/tigers.jpg)"
        break;
        case 3:
        day="wednesday"
        document.body.style.backgroundImage="url(../Asset/Images/flower1.jpg)"
        break;
        case 4:
        day="Thursday"
        document.body.style.backgroundImage="url(../Asset/Images/flower2.jpg)"
        break;
        case 5:
        day="friday"
        document.body.style.backgroundImage="url(../Asset/Images/lions.jpg)"
        break;
        case 6:
        day="Saturday"
        document.body.style.backgroundImage="url(../Asset/Images/swan.jpg)"
       break;
    }
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=`${ss}`;
    var updateTheTime=setTimeout(clock,1000)
}  
function greet()
{
    var date=new Date();
    var hh=date.getHours()
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="Good Morning"
        document.getElementById("bgVid").src="../Asset/Videos/morning.mp4"
        document.getElementById("bgVid").style.width="100%"
    }
    else if (hh>12 && hh<=16)
    {
        document.getElementById("GreetMessage").innerHTML="Good Afternoon"
        document.getElementById("bgVid").src="../Asset/Videos/afternoon.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
        
    }
    else if (hh>16 && hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="Good Evening"
        document.getElementById("bgVid").src="../Asset/Videos/sunset.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
    }
    else{
           
        document.getElementById("GreetMessage").innerHTML="Good Night"
        document.getElementById("GreetMessage").style.color="white"
        document.getElementById("bgVid").src="../Asset/Videos/stars.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
        }
}
    greet()
    function closeWind()
    {
        document.getElementById("greet").style.display="none"
    }
    var a=setTimeout(closeWind,5000)
