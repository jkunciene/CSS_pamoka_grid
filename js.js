//Įsijunk konsolę

console.log("Testuoju js console");

//document.getElementById('one').style.backgroundColor = "red";
let newBlock = document.createElement('div');
let lastBlock = document.getElementById('wrapper');
lastBlock.appendChild(newBlock);

newBlock.id = "seven";
document.getElementById('seven').style.backgroundColor = "red";