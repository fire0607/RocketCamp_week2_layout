// 「阿貓與阿狗玩棒球，要記錄比分」
let catScore = 0;
let dogScore = 0;
let roundNum = 0;
// 流程一：第一回合，阿貓得 3 分，阿狗得 2 分
// 流程二：第二回合，阿貓得 20 分，阿狗得 3 分
// 流程三：中間有插曲，就是阿貓作弊，第二回合才得 2 分卻謊報 20 分，所以必須扣掉 18 分
// 流程四：第三回合，阿貓得 1 分，阿狗得 7 分

// 程式碼開始填寫處
roundNum ++;
catScore += 3;
dogScore += 2;
roundNum ++;
catScore += 20;
dogScore += 3;
catScore -=18;
roundNum ++;
catScore +=1;
dogScore +=7;
// 程式碼結束處

// 顯示雙方總得分，console 應印出阿貓 6 分、阿狗 12 分
console.log(`總得分：阿貓 ${catScore} 分、阿狗 ${dogScore} 分`);
// 顯示比了幾回合
console.log(`總共比了 ${roundNum} 回合`);
