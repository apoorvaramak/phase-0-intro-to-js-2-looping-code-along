// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts); 

function writeCards(arr, event){
    const newArr = []; 
    for(let i = 0; i < arr.length; i ++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return newArr; 
}

function countDown(number){
    while(number > -1){
        console.log(number); 
        number--; 
    }
}