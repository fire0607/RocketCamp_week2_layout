// 成績區間if elseif 和物件練習

// let peopleScore =
//   {
//     name:"小明",
//     score:"",
//     feel:""
//   }


// peopleScore.score = 77 ;

// if(peopleScore.score>=80){
//   console.log("優秀!")
//   peopleScore.feel = "開心"
// }else if(peopleScore.score>=60){
//   console.log("普通!")
//   peopleScore.feel = "普通"
// }else{
//   console.log("不及格!")
//   peopleScore.feel = "傷心"
// }

// console.log(`小明看到自己的成績，覺得很${peopleScore.feel}`);


// 陣列物件+ifelse練習

let peopleScore = [
  {
    name:"小明",
    score:"",
    feel:""
  }
]

peopleScore[0].score = 77 ;

if(peopleScore[0].score>=80){
  console.log("優秀!")
  peopleScore.feel = "開心"
}else if(peopleScore[0].score>=60){
  console.log("普通!")
  peopleScore.feel = "普通"
}else{
  console.log("不及格!")
  peopleScore.feel = "傷心"
}

console.log(peopleScore);
console.log(`小明看到自己的成績，覺得很${peopleScore.feel}`);