var text = document.getElementById("txt");
var gnrtBtn = document.getElementById("gnrt");
var de = document.getElementById("demo");
var show = document.getElementById("show");
var num;

function getRandNumber(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
localStorage.setItem("click", JSON.stringify([]));
localStorage.setItem("onload", JSON.stringify([]));
event = function(type, target, time){
    this.type = type;
    this.target = target; 
    this.time = time;
}
evList = [];
window.onload = function(e) {
    evLoad = new event(e.type,e.window,e.target, window.timeStamp);   
    evList = localStorage.getItem("onload");
    evList = JSON.parse(evList);
    //console.log(window);
    evList.push(evLoad); localStorage.setItem("onload",JSON.stringify(evList));
}

var ltrlist=["images/ant.png","images/bear.jpg","images/cat.jpg","images/dog.jpg","images/elephant.jpg","images/fish.jpg","images/Girraffe.jpg","images/Horse.jpg","images/Iguana.jpg","images/Jellyfish.jpg","images/Kangaro.png","images/Lion.jpg","images/Monkey.jpg","images/Nightingale.jpg","images/Owl.jpg","images/Panda.jpg","images/quail.jpg","images/rabbit.png","images/snake.png","images/Tiger.jpg","images/urial.jpg","images/vulture.png","images/whale.jpg","images/xiphias.png","images/yak.jpg","images/zebra.jpg"];

//console.log(ltrlist[0]);
var button;
gnrtBtn.addEventListener("click",function(ev){
    evGnrt = new event(ev.type, ev.target, ev.timeStamp);
    
    evList = localStorage.getItem("click");
    evList = JSON.parse(evList);
    //console.log(e);
    evList.push(evGnrt);
    localStorage.setItem("click",JSON.stringify(evList));
    de.innerHTML="";
    var getText = text.value;
    num = parseInt(getText);
    //console.log(num);
    if(num<=26){
        var ch=[];
        for(var i = 0 ; i<num ; i++){
            var index=getRandNumber(65,90);
        
            if(ch.includes(index)==false){
                ch.push(index);
                var res = String.fromCharCode(index);
                button = document.createElement("button");
                de.appendChild(button);
                button.innerHTML=res;
            }
            else{i--;}

            button.style.fontSize="20px";
            button.style.marginRight="20px";
            button.style.marginTop="10px";
            button.style.width="50px";
            button.style.borderRadius="15px";
            button.style.background="linear-gradient(to bottom, #79bbff 5%, #378de5 100%);";
            button.style.backgroundColor="#79bbff";
            button.style.border="#border:1px solid #337bc4;";
            button.style.display="inline-block";
            button.style.cursor="pointer";
            button.style.color="#ffffff";
            button.style.fontFamily="Arial";
            button.style.fontWeight="bold";
            button.style.textDecoration="bold";
            button.style.textShadow="0px 1px 0px #528ecc";
            button.addEventListener("mouseover",function(){
               button.setAttribute("background","linear-gradient(to bottom, #378de5 5%, #79bbff 100%)");
                button.setAttribute("background-color","#378de5");
            });
            
            button.addEventListener("click",function(e){
                
                evCh = new event(e.type, e.target, e.timeStamp);
                //click = [];
                evList = localStorage.getItem("click");
                evList = JSON.parse(evList);
                console.log(e);
                evList.push(evCh);
                localStorage.setItem("click", JSON.stringify(evList));
//                setTimeout(function(){
//                    localStorage.clear();
//                },10000);
                show.innerHTML="";
                var img = document.createElement("img");
                show.appendChild(img);
                img.setAttribute("width","500px");
                img.setAttribute("height","500px");
                img.style.border="10px outset darkorange";
                img.style.borderRadius="20px";

                for(var k=65 ; k <= 90 ; k++){
                    var te = String.fromCharCode(k);
                    if(this.innerHTML == te){
                        var imgIndex =k-65;
                        var ret = ltrlist[imgIndex];
                        img.setAttribute("src",ret);
                    }
                }
            });
        }
    }
    else{
        alert("Alphabet just 26 character")
    }
});
//console.log(localStorage);
var loc=[];
//JSON.stringify(localStorage);
console.log(localStorage.getItem("click"));
console.log(localStorage);
for(var i=0 ; i<localStorage.length ; i++){
    //var t = JSON.parse(localStorage);
    console.log(localStorage[2]);
    //t.type;
    console.log(t.type);
}
//console.log(loc);

$.ajax({
    "type": "POST",
    "url": "myphp.php",
    "data": {"letter":t},
    "beforeSend": function(){
    	console.log("Sending to Server...");
    },
    "success": function(response){
    	console.log("Server Replied!");
    	//$("p").text(response);
    }
});