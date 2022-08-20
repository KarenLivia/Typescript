let title: string = 'MyApp';
document.getElementById('app.title').innerHTML=title;

let counter: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  let counterDiv = document.getElementById('app.counter');
  counterDiv.innerHTML = counter.toString();
},1000);


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
