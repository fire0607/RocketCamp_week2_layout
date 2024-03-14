//物件if練習
let tomStatus = {
  name:"Tom",
  age:"30",
  status:"" //空值
}

tomStatus.degree = 36.8;

if(tomStatus.degree>=37.5){
  console.log("您不得進入");
  tomStatus.status = "不得進入";
}else{
  console.log("您可以進入");
  tomStatus.status = "可以進入";
}

console.log(tomStatus)

// 陣列物件搭配IF流程判斷練習

let peopleStatus = [
  {
    name:"Steven",
    age:"30",
    status:""
  },
]

peopleStatus[0].degree = 39.5

console.log(peopleStatus[0]);

if (peopleStatus[0].degree >=37.5){
  peopleStatus[0].status = "不得進入";
  console.log("您不得進入")
}else{
  peopleStatus[0].status = "可以進入";
  console.log("您可以進入")
}