// 前情提要：我們在市場裡
// 第一個水果攤，老闆Tom，香蕉6個，蘋果5個，還沒關店
// 第二個水果攤，老闆John，香蕉9個，蘋果8個，還沒關店

// 陣列放細項資料(老闆名字、水果等)，物件放整筆資料(水果攤1、水果攤2)

let market = [
    {
        bossName: "Tom",
        bananaNum:6,
        appleNum:5,
        isClose:false
    },
    {
        bossName: "John",
        bananaNum:9,
        appleNum:8,
        isClose:false
    }
]
console.log(market); //讀取全部物件
console.log(market[0]); //讀取第一筆物件
console.log(market[0].bossName); // 讀取第一筆物件內的資料(找屬用.)
性
console.log(market[1].appleNum);
console.log(market[0].isClose);


// 物件還能包物件
// 可用在需要分類文件時

let home = {
    motherStatus:{
        age:30,
        name:"Mary"
    },
    fatherStatus:{
        age:38,
        name:"Mark"
    },
    dogs:3
}
    
    console.log(home.motherStatus.name) //讀取物件內物資料
    console.log(home.fatherStatus.age)