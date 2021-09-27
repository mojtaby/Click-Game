const shopbtn = document.getElementById('Shop-btn');
const CloseShopFormBtn= document.getElementById('close-shop-form-btn');
const pointdisplay = document.getElementById('Point-display');
const moneydisplay = document.getElementById('Money-display');
const PointUpgradeForm = document.getElementById('Point-upgrade-form');
const PointUpgradeFormBtn = document.getElementById('Point-upgrade-form-btn');
const sellUpgradeForm = document.getElementById('sell-upgrade-form');
const sellUpgradeFormBtn = document.getElementById('sell-upgrade-form-btn');

let pointbtn = document.getElementById('point-btn');
let sellbtn  = document.getElementById('sell-btn') ;
let PointUpgradeMultipleBtn = document.getElementById('Point-upgrade-multiple-btn');
let shopform = document.getElementById('shop-form');
let NeedMoneyPointUpgrade = document.getElementById('Need-Money-Point-upgrade');
let PointUpgradeMultiple  = document.getElementById('Point-upgrade-multiple');
let SelltUpgradeMultiple  = document.getElementById('Sell-upgrade-multiple');
let NeedMoneySellUpgrade  = document.getElementById('Need-Money-Sell-upgrade');
let SellUpgradeMultipleBtn= document.getElementById('Sell-upgrade-multiple-btn');

//Variables-------------

let point = 0;
let Money = 0;

let PointMultiple = 1;
let NeedMoneyUpgradePoint = 50;
let NeedPointMultiple = 1;

let sellmultiple  = 1;
let NeedMoneyUpgradeSell = 100;
let NeedsellMultiple = 1;

// Sell and Point System ---------------------------

sellbtn.addEventListener('click',function(){
    if (point >= 1){
    Money += point * sellmultiple;
    moneydisplay.innerHTML=`Money : ${Money} $`;
    point = 0 ;
    pointdisplay.innerHTML=`Point : ${point}`;
    }
});

pointbtn.addEventListener('click',function(){
    point += PointMultiple;
    pointdisplay.innerHTML=`Point : ${point}`;
});


// Open the shop and Close it------------------------

shopbtn.addEventListener('click',function(){
shopform.style.display = 'block';
sellUpgradeForm.style.display  = 'none';
PointUpgradeFormBtn.classList.add("Disabled");
});

CloseShopFormBtn.addEventListener('click',function(){
    shopform.style.display = 'none';
});

// PointUpgrad System ------------------

function SystemPointMultiple(){
     Money -= NeedMoneyUpgradePoint;
moneydisplay.innerHTML=`Money : ${Money} $`;
     NeedMoneyUpgradePoint *= 2;
NeedMoneyPointUpgrade.innerHTML =`You Need ${NeedMoneyUpgradePoint}$ to get more Point Multiple`;
     PointMultiple += 1;
PointUpgradeMultiple.innerHTML=`Your Point Multiple +${PointMultiple}`;
     NeedPointMultiple += 1; 
}


NeedMoneyPointUpgrade.innerHTML =`You Need ${NeedMoneyUpgradePoint}$ to get more Point Multiple`;

PointUpgradeMultipleBtn.addEventListener('click',function(){
      if (Money >=NeedMoneyUpgradePoint & PointMultiple == NeedPointMultiple ){
SystemPointMultiple();
    }
      if (Money >=NeedMoneyUpgradePoint & PointMultiple <= NeedPointMultiple){
SystemPointMultiple();
    } 
});

// SellUpgrad System ------------------

function SystemSellMultiple(){
     Money -= NeedMoneyUpgradeSell;
moneydisplay.innerHTML=`Money : ${Money} $`;
     NeedMoneyUpgradeSell *= 2;
NeedMoneySellUpgrade.innerHTML =`You Need ${NeedMoneyUpgradeSell}$ to get more Sell Multiple`;
     sellmultiple += 1;
SelltUpgradeMultiple.innerHTML=`Your Sell Multiple ${sellmultiple}X`;
     NeedsellMultiple += 1; 
}


NeedMoneySellUpgrade.innerHTML =`You Need ${NeedMoneyUpgradePoint}$ to get more Sell Multiple`;

SellUpgradeMultipleBtn.addEventListener('click',function(){
      if (Money >= NeedMoneyUpgradeSell & sellmultiple == NeedsellMultiple ){
SystemSellMultiple();
    }
      if (Money >= NeedMoneyUpgradeSell & sellmultiple <= NeedsellMultiple){
SystemSellMultiple();
    } 
});


// sellUpgradeForm and PointUpgradeForm ---------------------------------------------------------

sellUpgradeFormBtn.addEventListener('click',function(){
    PointUpgradeForm.style.display = 'none';  
    sellUpgradeForm.style.display  = 'block';
    sellUpgradeFormBtn.classList.add("Disabled");
    PointUpgradeFormBtn.classList.remove("Disabled");
    NeedMoneySellUpgrade.innerHTML =`You Need ${NeedMoneyUpgradeSell}$ to get more Sell Multiple`;
});

PointUpgradeFormBtn.addEventListener('click',function(){
   sellUpgradeForm.style.display  = 'none';
   PointUpgradeForm.style.display = 'block';  
   PointUpgradeFormBtn.classList.add("Disabled");
   sellUpgradeFormBtn.classList.remove("Disabled");
   NeedMoneySellUpgrade.innerHTML =`You Need ${NeedMoneyUpgradePoint}$ to get more Sell Multiple`
});




