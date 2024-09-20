var topnumber;
var bottomnumber;
var pointsDiv=document.getElementById('pointsD');
var points=0;
var rightAnswer;
var inputvalue;
var mainInput= document.getElementById('mainId');
var topnumberDiv= document.getElementById('topNum');
var bottomnumberDiv= document.getElementById('bottomNum');

// function pointCounter(){
//      if (topNumber > bottomNumber){ 
//          points ++;
    
//      }else if (bottomNumber > topNumber){ 
//          points ++;
        

//      }else if (topNumber < bottomNumber){
//          points --;
       
//      }else if (bottomNumber < topNumber){
//          points --;
//      }
//      pointsDiv.innerHTML = points;


function updateNum(){
    topnumber = Math.floor(Math.random() * 10 +1);
    bottomnumber = Math.floor(Math.random() * 10 +1);
    topnumberDiv.innerHTML = topnumber;
    bottomnumberDiv.innerHTML = bottomnumber;
    setrightAnswer();
    
}

function pointCounter(){
    if (inputvalue == rightAnswer){
        points += 1;
    }else{
        points -= 1;
    }
        pointsDiv.innerHTML = points;
        updateNum();    
}

function setrightAnswer(){
    if (topnumber > bottomnumber){
        rightAnswer = '>';
       
    }else if(topnumber < bottomnumber){
        rightAnswer = '<';
       
    }else{
        rightAnswer = '=';
    }
}

function submitAnswer(){
    pointCounter();
    setrightAnswer();
    pointsDiv.innerHTML = `Points: ${points}`;
}


