// 高知県に関するクイズデータ（30問）
const allQuestions = [
    { q: "高知県の形は何に似ていると言われる？", a: ["扇形", "三日月", "ブーメラン"], correct: 1 },
    { q: "高知県の「県の花」は何？", a: ["トサミズキ", "ヤマザクラ", "カミガヤツリ"], correct: 1 },
    { q: "坂本龍馬の銅像がある海岸はどこ？", a: ["種崎海岸", "桂浜", "大山岬"], correct: 1 },
    { q: "「日本最後の清流」と呼ばれる川は？", a: ["仁淀川", "物部川", "四万十川"], correct: 2 },
    { q: "高知の夏を彩る、鳴子を持って踊る祭りは？", a: ["阿波踊り", "よさこい祭り", "おわら風の盆"], correct: 1 },
    { q: "高知県で有名な、皿に豪華に盛る料理は？", a: ["皿鉢（さわち）料理", "おばんざい", "卓袱料理"], correct: 0 },
    { q: "日本一の森林率を誇る高知県、その割合は約？", a: ["約64%", "約74%", "約84%"], correct: 2 },
    { q: "カツオのタタキに欠かせない、高知特産の柑橘は？", a: ["すだち", "ゆず", "かぼす"], correct: 1 },
    { q: "高知県出身の植物学者で、2023年朝ドラのモデルは？", a: ["牧野富太郎", "南方熊楠", "北里柴三郎"], correct: 0 },
    { q: "日曜日に高知城追手門から約1km続く市は？", a: ["朝市", "日曜市", "土曜市"], correct: 1 },
    { q: "アンパンマンの作者、やなせたかしさんの出身地は？", a: ["香南市", "香美市", "南国市"], correct: 1 },
    { q: "高知城の天守閣は、日本に12しかない何の一つ？", a: ["現存天守", "復元天守", "再建天守"], correct: 0 },
    { q: "仁淀川の美しさを表現する言葉は？", a: ["仁淀クリア", "仁淀ブルー", "仁淀エメラルド"], correct: 1 },
    { q: "高知県の西端にあり、美しいサンゴが見られる場所は？", a: ["室戸岬", "足摺岬", "柏島"], correct: 2 },
    { q: "高知の定番アイス「アイスクリン」の食感は？", a: ["ねっとり", "シャリシャリ", "ふわふわ"], correct: 1 },
    { q: "幕末に活躍した、中岡慎太郎の出身地は？", a: ["安芸郡北川村", "長岡郡本山町", "高知市"], correct: 0 },
    { q: "高知県の名物鶏「土佐ジロー」は何と何の交配種？", a: ["地鶏とコーチン", "地鶏とロードアイランドレッド", "地鶏とレグホン"], correct: 1 },
    { q: "室戸岬で見られる、世界的に貴重な地質遺産は？", a: ["ジオパーク", "エコパーク", "スカイパーク"], correct: 0 },
    { q: "高知県の特産品「ミレービスケット」を製造している会社は？", a: ["野村煎豆加工店", "浜幸", "青柳"], correct: 0 },
    { q: "「帽子パン」の発祥と言われる高知のパン屋は？", a: ["永野製パン", "コミベーカリー", "リンベル"], correct: 2 },
    { q: "高知県にある、世界一の階段がある山は？（諸説あり）", a: ["工石山", "虚空蔵山", "大滝山"], correct: 2 },
    { q: "土佐の「おきゃく」文化で、お酒を回し飲むのは？", a: ["献杯・返杯", "乾杯・三唱", "回し飲み"], correct: 0 },
    { q: "高知の名物お菓子、ニッキの香りがするのは？", a: ["かんざし", "いもけんぴ", "けんぴ"], correct: 2 },
    { q: "高知城の追手門と天守を一枚に収められる撮影スポットは？", a: ["高知公園入口", "高知市役所前", "県立図書館前"], correct: 0 },
    { q: "土佐の闘犬として有名な犬種は？", a: ["柴犬", "土佐犬", "秋田犬"], correct: 1 },
    { q: "四国カルストがある、愛媛県との県境の村は？", a: ["梼原町", "津野町", "日高村"], correct: 1 },
    { q: "高知県の郷土玩具で、クジラの形をしたものは？", a: ["土佐凧", "クジラの車", "フラフ"], correct: 1 },
    { q: "高知の屋台といえば、飲んだ後のシメに食べるのは？", a: ["ラーメン", "餃子", "うどん"], correct: 1 },
    { q: "高知県で最も高い山は？", a: ["三嶺", "筒上山", "石鎚山（愛媛側）"], correct: 0 },
    { q: "カツオの刺身を食べる時、高知でよく使われる薬味は？", a: ["わさび", "にんにくスライス", "しょうが"], correct: 1 }
];

let currentQuiz = [];
let currentIndex = 0;
let score = 0;

// クイズの初期化
function initQuiz() {
    // 全問題からランダムに10問選ぶ
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    currentQuiz = shuffled.slice(0, 10);
    currentIndex = 0;
    score = 0;
    
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

// 問題の表示
function showQuestion() {
    const qData = currentQuiz[currentIndex];
    document.getElementById('current-num').innerText = currentIndex + 1;
    document.getElementById('question').innerText = qData.q;
    
    const container = document.getElementById('choices-container');
    container.innerHTML = '';
    
    qData.a.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(index);
        container.appendChild(btn);
    });
}

// 回答チェック
function checkAnswer(choiceIndex) {
    if (choiceIndex === currentQuiz[currentIndex].correct) {
        score++;
    }
    
    currentIndex++;
    if (currentIndex < 10) {
        showQuestion();
    } else {
        showResult();
    }
}

// 結果表示
function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    
    let msg = "";
    if (score === 10) msg = "完璧やん！あなたは土佐マスターぜよ！";
    else if (score >= 7) msg = "なかなかの高知通やね！";
    else if (score >= 4) msg = "もう少しで高知通！";
    else msg = "高知に遊びにきとうせ！";
    
    document.getElementById('feedback-msg').innerText = msg;
}

// 起動
window.onload = initQuiz;
