// Code your solutions in this file
const cardArray=[];

function writeCards(array,name){
  for (let i = 0; i < array.length; i++) {
      cardArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
  }
  return cardArray;
}


function countDown(num){
   let i=num;
   while (i>=0){
     console.log(i); 
     --i;
   }

}
countDown(10);