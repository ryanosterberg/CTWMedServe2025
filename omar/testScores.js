let firstScore = parseFloat(prompt("First Test Score?"))
let secondScore = parseFloat(prompt("Second Test Score?"))
let thirdScore = parseFloat(prompt("Third Test Score?"))
let average = (firstScore+secondScore+thirdScore)/3
console.log("Your average is: " +average)
if(average>=92.5){
    console.log("Average: A")
} else if(average>=84.5){
    console.log("Average: B")
} else if(average>=77.5){
    console.log("Average: C")
} else if(average>=69.5){
    console.log("Average: D")
} else console.log("Average : F")