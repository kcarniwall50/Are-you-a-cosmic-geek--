// CLI APP
 
// --- Are you a Cosmic Geek ? ---  //
 
 let readlinesync=require('readline-sync')
 let score=0

 

 let user = readlinesync.question('Hi there, What is your good name ?\n')

 console.log("Welcome ",user)

 
  console.log("Let's play a fun quiz game called..\n")
  console.log("--- Are you a Cosmic Geek ? ---\n")

 console.log("here we go!")
 console.log("\n -------")
 let QaA1={
  question: "What is our planet name ? \n (a)  Venus       (b)  Mercury \n (c)  Mars        (d)  Earth",
  answer: "d"
 }
 
 let QaA2={
   question: "How old is our planet ? \n (a)  8 billion years       (b)  3.7 billion years \n (c)  4.5 billion years     (d)  7.5 billion years",
   answer: "c"
  }
 
  let QaA3={
   question: "What is name of star of our solar system ?\n (a)  Sirius              (b)  Vega \n (c)  Alpha Centuri A      (d)  Sun",
   answer: "d"
  }
  let QaA4={
   question: "How old is our Sun ?\n (a)  8 billion years       (b)  3.7 billion years \n (c)  4.6 billion years     (d)  7.5 billion years",
   answer: "c"
  }
 
  let QaA5={
   question: "What is name of of galaxy ?\n (a)  Andromeda             (b)  Milky Way or Mandakini \n (c)  Black Eye Galaxy      (d)  Comet Galaxy",
   answer: "b"
  }
 
  let QaA6={
   question: "How many stars are there in our galaxy approximately ?\n (a)  100 billion       (b)  50 billion  \n (c)  170 billion       (d)  240 billion ",
   answer: "a"
  }
  let QaA7={
   question: "How many galaxies are there in universe approximately?\n (a)  100-200 billion       (b)  50-70 billion  \n (c)  400-500 billion       (d)  800-900 billion",
   answer: "a"
  }
  let QaA8={
   question: "Do you think there might be intelligent life in rest of universe ?\n (a)  yes       (b)  no      (c)  can't say",
   answer: "a"
  }
  let QaA9={
   question: "Do you think there might be another habitable planet like Earth in rest of universe ?\n (a)  yes       (b)  no      (c)  can't say",
   answer: "c"
  }
 
  let QaA10={
   question: "Do you think there exists multiverse ?\n (a)  yes       (b)  no      (c)  can't say",
   answer: "c"
  }
 
 
  let arrOfObject=[QaA1,QaA2,QaA3,QaA4,QaA5,QaA6,QaA7,QaA8,QaA9,QaA10]
  let n=arrOfObject.length
 
 for(let i=0;i<n;i++)
 {
   
 
   let ans=readlinesync.question(arrOfObject[i].question+"\n Your Answer:  ")
   
 
 if(ans===arrOfObject[i].answer)
 {
    console.log("good job!")
    score++
    console.log("Your score now became ",score)
 }
 else
 {
    console.log("Nice try!")
    console.log("Your score is ",score)
 
 }
   console.log("-----------")
   console.log("\n")
 
 }

 // finish
 
 if(score===10)
 {
 console.log("Congrachulations! you rock !")
 console.log("All your responses were correct")
 console.log("You are truley cosmic geek")
 }
 else if(score>5 && score<10)
 {
   console.log("You're awesome buddy")
   console.log("You performed well man")
 
 }
 else if(score<=5)
 {
   console.log("Thank you for participating ")
   console.log("You have gut to learn dude . keep it up!")
 
 }