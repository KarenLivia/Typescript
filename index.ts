let title: string = 'MyApp';
document.getElementById('app.title').innerHTML=title;

let counter: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  let counterDiv = document.getElementById('app.counter');
  counterDiv.innerHTML = counter.toString();
},1000);

