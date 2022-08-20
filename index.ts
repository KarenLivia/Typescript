let title: string = 'MyApp';
document.getElementById('app.title').innerHTML=title;

let round: number = 0;
let act: number = 0;
let rest: number = 0;

let intervalId = setInterval(() => {
  if (round < 8){
    let roundDiv = document.getElementById('app.round');
    roundDiv.innerHTML = round.toString();
    
      if (act < 20){
        act = act + 1;
        let actDiv = document.getElementById('app.act');
        actDiv.innerHTML = act.toString();
      }
      if (rest < 10){
        rest = rest + 1;
        let restDiv = document.getElementById('app.rest');
        restDiv.innerHTML = rest.toString();
    }
  }
},1000);




/*
for (let round = 1; round < 5; round ++){
  if (round < 9){
    console.log('Round '+round);
    for (let i = 1; i < 21; i ++){
      if (i % 2){
        console.log('Tabata Activity');
        for (let i = 1; i <= 21; i++){
          if (i < 21){
            console.log(i);
          }
        }
      }
      else{
        console.log('Tabata Rest');
        for (let i = 1; i <= 11; i++){
          if (i < 11){
            console.log(i);} 
        } 
      }
    }
  }
}
*/