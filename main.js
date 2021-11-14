const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor (field) {
    this._field = field;
  }

  print(){
    for (let i=0; i<this._field.length; i++){
      let string = '';
      string = string + this._field[i].join('');
      console.log(string);
    }
  }

  getUserInput () {
  const instruction = prompt("Which way?  ");
  return instruction;
  }

  move () {
    let h=0;
    let w=0;
    let endgame = false;
    while(endgame==false) {
      let instruction = this.getUserInput();
      if (instruction==='u'){
        h-=1;
        if((h < 0) || (h >= this._field.length) || (w < 0) || (w >= this._field[0].length)){
        console.log('Out of bounds instruction. Try again!');
        endgame=true;} else if(this._field[h][w]==='O'){
        console.log('Sorry, you fell down a hole. Better luck next time!')
        endgame=true;} else if (this._field[h][w]==='^'){
        console.log('Congrats! You found your hat!');
        endgame=true;
      } else {
        this._field[h][w]='*';
        console.clear();
        this.print(); }
      } else if (instruction==='d'){
        h+=1;
        if((h < 0) || (h >= this._field.length) || (w < 0) || (w >= this._field[0].length)){
        console.log('Out of bounds instruction. Try again!');
        endgame=true;} else if(this._field[h][w]==='O'){
        console.log('Sorry, you fell down a hole. Better luck next time!')
        endgame=true;} else if (this._field[h][w]==='^'){
        console.log('Congrats! You found your hat!');
        endgame=true;
      } else {
        this._field[h][w]='*';
        console.clear();
        this.print(); }
      } else if (instruction==='l'){
        w-=1;
        if((h < 0) || (h >= this._field.length) || (w < 0) || (w >= this._field[0].length)){
        console.log('Out of bounds instruction. Try again!');
        endgame=true;} else if(this._field[h][w]==='O'){
        console.log('Sorry, you fell down a hole. Better luck next time!')
        endgame=true;} else if (this._field[h][w]==='^'){
        console.log('Congrats! You found your hat!');
        endgame=true;
      } else {
        this._field[h][w]='*';
        console.clear();
        this.print(); }
      } else if (instruction==='r'){
        w+=1;
        if((h < 0) || (h >= this._field.length) || (w < 0) || (w >= this._field[0].length)){
        console.log('Out of bounds instruction. Try again!');
        endgame=true;} else if(this._field[h][w]==='O'){
        console.log('Sorry, you fell down a hole. Better luck next time!')
        endgame=true;} else if (this._field[h][w]==='^'){
        console.log('Congrats! You found your hat!');
        endgame=true;
      } else {
        this._field[h][w]='*';
        console.clear();
        this.print(); }
      }
    }
  }
}

let generateField = (height, width, percentage) => {
    let randomField = [];
    for (let a=0; a<height; a++){
      randomField.push([]);
      for (let b=0; b<width; b++){
        randomField[a].push('');
        randomField[a][b]='░';
      }
    }
    randomField[0][0] = '*';
    let randhath = Math.floor(Math.random()*(height-1));
    let randhatw = Math.floor(Math.random()*(height-1));
    if (randomField[randhath][randhatw]==='░'){
      randomField[randhath][randhatw] = '^';} else {
        randomField[height-1][width-1] = '^';
      }

    let perc = Math.floor((percentage/100)*(height*width));
    let r=0;
    while(r<perc){
      let randh=Math.floor(Math.random()*height);
      let randw=Math.floor(Math.random()*width);
      if(randomField[randh][randw]==='░'){
      randomField[randh][randw] = 'O';
      r++; } else continue;
    }
    return randomField;
}
let  myField = new Field (generateField(10, 10, 20));
myField.print();
myField.move();