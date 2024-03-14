// 物件格式教學
// 範例：描述家庭
// let montherName = "Mary";
// let fatherName ="Tom";
// let dogs =3;
 
// let home = {
//     montherName: "Mary",
//     fatherName: "Tom",
//     dogs: 3,
//     isWakeUp: false
// };

// // 讀取物件內容
// console.log(home.montherName);

// // 宣告新變數讀取內容
// let tomDog = home.dogs;
// console.log(tomDog);



// 新增物件屬性
let home ={}; //空值

home.montherName = "Mary";
home.fatherName = "Tom";
home.dogs = 3;
home.isWakeUp = false;

console.log(home);

// 修改值
home.montherName = "Jane"; //直接覆寫字串
home.dogs+=1 //數值加1
console.log(home);

// 刪除物件資料
// delete home.dogs;
// delete home.montherName;

// console.log(home);

// 物件讀取方式2
let a = "montherName";
console.log(home[a]); //用中括號選取位置讀取裡面的值

// 物件讀取資料判斷時間
// 遇到特殊格式無法直接用 . 選取時(如變數開頭為數字)
// 還是會需要用到中括號讀取資料