////////////////////////////
/* Add points if matching */
////////////////////////////

const ListofFruits = [{ english: "apple", korean: "사과" }, { english: "pear", korean: "배" }, { english: "hawthorn", korean: "산사" },
    { english: "quince", korean: "모과" }, { english: "loquat", korean: "비파(열매)" }, { english: "strawberry", korean: "딸기" },
    { english: "blueberry", korean: "블루베리" }, { english: "raspberry", korean: "라즈베리" }, { english: "blackberry", korean: "블랙베리" },
    { english: "cranberry", korean: "크랜베리" }, { english: "aronia", korean: "아로니아" }, { english: "gojiberry", korean: "구기자" },
    { english: "mulberry", korean: "오디" }, { english: "orange", korean: "오렌지" }, { english: "lemon", korean: "레몬" },
    { english: "lime", korean: "라임" }, { english: "grapefruit", korean: "자몽" }, { english: "tangerine", korean: "감귤" },
    { english: "yuzu", korean: "유자" }, { english: "kumquat", korean: "금귤" }, { english: "peach", korean: "복숭아" },
    { english: "nectarine", korean: "천도" }, { english: "plum", korean: "자두" }, { english: "apricot", korean: "살구" },
    { english: "cherry", korean: "체리" }, { english: "watermelon", korean: "수박" }, { english: "muskmelon", korean: "멜론" },
    { english: "orientalmelon", korean: "참외" }, { english: "banana", korean: "바나나" }, { english: "pineapple", korean: "파인애플" },
    { english: "mango", korean: "망고" }, { english: "papaya", korean: "파파야" }, { english: "passionfruit", korean: "패션프루트" },
    { english: "guava", korean: "구아바" }, { english: "durian", korean: "두리안" }, { english: "jackfruit", korean: "잭프루트" },
    { english: "rambutan", korean: "람부탄" }, { english: "lychee", korean: "리치" }, { english: "date", korean: "데이츠" },
    { english: "dragonfruit", korean: "용과" }, { english: "avocado", korean: "아보카도" }, { english: "kiwi", korean: "키위" },
    { english: "grape", korean: "포도" }, { english: "pomegranate", korean: "석류" }, { english: "jujube", korean: "대추" },
    { english: "fig", korean: "람부탄" }, { english: "persimmon", korean: "감" }, { english: "tomato", korean: "토마토" }];

// score count
let score = 0;
//display current score count
document.querySelector(".score").innerText = `Current score: ${score}`;
//starting the game
document.getElementById("startStop").onclick = newMatch;
const theImg = document.getElementsByClassName("fruitImg");
//define random number used for generating image
let randomNum = 0;
let number = 0
const selector = document.querySelectorAll(".selector")

//function where options and images are toggled to visible
function newMatch() {
    document.querySelector("#startStop").classList.add("hidden");
    number = Math.floor(Math.random() * 10);
    //loop through 10 matching buttons and assign the correct classes and ids
    for(let i = 0; i<10; i++){
        randomNum = Math.floor(Math.random()*48);
        //Make so that there aren't any repeats
        //console.log(document.querySelectorAll("selector").className.contains(`ListofFruits[randomNum].english`));
        document.querySelector(`.selector${i}`).className = `selector selector${i}`;
        document.querySelector(`.selector${i}`).id = "";
        document.querySelector(`.selector${i}`).classList.add(ListofFruits[randomNum].english);
        document.querySelector(`.selector${i}`).innerText = `${ListofFruits[randomNum].korean}`
        document.querySelector(`.selector${i}`).classList.remove("hidden");
        document.querySelector(`.selector${i}`).id = `${ListofFruits[randomNum].english}`;
    };  
    Array.from(theImg).forEach(element => element.classList.add("hidden"));
    theImg[number].classList.remove("hidden");
    let classImgArr = theImg[number].classList.value.split(" ")
    let koreanWord = ListofFruits.map(e => e.english).indexOf(`${classImgArr[1]}`);
    //create new random number for putting selector at random place below
    let randomNumforSelector = Math.floor(Math.random() * 10);
    document.querySelector(`.selector${randomNumforSelector}`).classList = (`selector selector${randomNumforSelector} ${classImgArr[1]}`)
    document.querySelector(`.selector${randomNumforSelector}`).innerText = `${ListofFruits[koreanWord].korean}`;
    document.querySelector(`.selector${randomNumforSelector}`).id = `${classImgArr[1]}`;
}

// checking if right or wrong answer 
function checkIfMatching(){
    if(theImg[number].classList.contains(this.id)){
     score += 10
 	 document.querySelector(".score").innerText = `Correct - Current score: ${score}`;
     document.querySelector("#guessImg").classList = "";
     theImg[number].classList.add("hidden");
     Array.from(selector).forEach(element => element.classList.remove("hidden"));
     newMatch();
    } else {
        score -= 2
        document.querySelector(".score").innerText = `Wrong Answer - Current score: ${score}`;
        document.querySelector(`#${this.id}`).classList.add("hidden");
    }
 }

 Array.from(selector).forEach(element => element.addEventListener('click', checkIfMatching))

 /* removing selector in order to set id to value
    this.classList.remove("selector");
     this.id = this.classList.value;
     console.log(this.id);
     this.classList.add("selector");
 */

     
