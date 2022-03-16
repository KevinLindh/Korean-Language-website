////////////////////////////
/* Add points if matching */
////////////////////////////

const ListOfFruits = [{ english: "apple", korean: "사과", url: "https://www.svgrepo.com/show/40929/apple.svg" }, { english: "pear", korean: "배", url: "none" }, { english: "hawthorn", korean: "산사", url: "none" },
    { english: "quince", korean: "모과", url: "https://www.svgrepo.com/show/218307/quince.svg" }, { english: "loquat", korean: "비파(열매)", url: "none" }, { english: "strawberry", korean: "딸기", url: "https://www.svgrepo.com/show/108460/strawberry.svg" },
    { english: "blueberry", korean: "블루베리", url: "https://www.svgrepo.com/show/404856/blueberries.svg" }, { english: "raspberry", korean: "라즈베리", url: "none" }, { english: "blackberry", korean: "블랙베리", url: "none" },
    { english: "cranberry", korean: "크랜베리", url: "none" }, { english: "aronia", korean: "아로니아", url: "none" }, { english: "gojiberry", korean: "구기자", url: "none" },
    { english: "mulberry", korean: "오디", url: "none" }, { english: "orange", korean: "오렌지", url: "https://www.svgrepo.com/show/148625/orange.svg" }, { english: "lemon", korean: "레몬", url: "https://www.svgrepo.com/show/406060/lemon.svg" },
    { english: "lime", korean: "라임", url: "https://www.svgrepo.com/show/82164/lime.svg" }, { english: "grapefruit", korean: "자몽", url: "none" }, { english: "tangerine", korean: "감귤", url: "https://www.svgrepo.com/show/402775/tangerine.svg" },
    { english: "yuzu", korean: "유자", url: "none" }, { english: "kumquat", korean: "금귤", url: "none" }, { english: "peach", korean: "복숭아", url: "none" },
    { english: "nectarine", korean: "천도", url: "none" }, { english: "plum", korean: "자두", url: "none" }, { english: "apricot", korean: "살구", url: "none" },
    { english: "cherry", korean: "체리", url: "https://www.svgrepo.com/show/9772/cherry.svg" }, { english: "watermelon", korean: "수박", url: "https://www.svgrepo.com/show/100954/watermelon.svg" }, { english: "muskmelon", korean: "멜론", url: "none" },
    { english: "orientalmelon", korean: "참외", url: "none" }, { english: "banana", korean: "바나나", url: "none" }, { english: "pineapple", korean: "파인애플", url: "https://www.svgrepo.com/show/122557/pineapple.svg" },
    { english: "mango", korean: "망고", url: "none" }, { english: "papaya", korean: "파파야", url: "none" }, { english: "passionfruit", korean: "패션프루트", url: "none" },
    { english: "guava", korean: "구아바", url: "https://www.svgrepo.com/show/125659/guava.svg" }, { english: "durian", korean: "두리안", url: "none" }, { english: "jackfruit", korean: "잭프루트", url: "none" },
    { english: "rambutan", korean: "람부탄", url: "none" }, { english: "lychee", korean: "리치", url: "none" }, { english: "date", korean: "데이츠", url: "none" },
    { english: "dragonfruit", korean: "용과", url: "none" }, { english: "avocado", korean: "아보카도", url: "none" }, { english: "kiwi", korean: "키위", url: "none" },
    { english: "grape", korean: "포도", url: "https://www.svgrepo.com/show/276201/grapes-grape.svg" }, { english: "pomegranate", korean: "석류", url: "none" }, { english: "jujube", korean: "대추", url: "none" },
    { english: "fig", korean: "람부탄", url: "none" }, { english: "persimmon", korean: "감", url: "none" }, { english: "tomato", korean: "토마토", url: "none" }];

// score count
let score = 0;
//display current score count
document.querySelector(".score").innerText = `Current score: ${score}`;
//starting the game
document.getElementById("startStop").onclick = newMatch;
const theImg = document.querySelector(".fruitImg");
//define random number used for generating image
let randomNum = 0;
let number = 0
const selector = document.querySelectorAll(".selector")

//function where options and images are toggled to visible
function newMatch() {
    theImg.classList = "fruitImg hidden"
    document.querySelector("#startStop").classList.add("hidden");
    number = Math.floor(Math.random() * 10);
    let selectors = document.querySelector(".selector").classList;

    //loop through 10 matching buttons and assign the correct classes and ids to selectors
    for(let i = 0; i< 10; i++){
        randomNum = Math.floor(Math.random()*ListOfFruits.length);
        //Make so that there aren't any repeats
        //loop through selectors and make sure that there are no repeats
        //define all selectors and loop through and if repeat i--???
        document.querySelector(`.selector${i}`).className = `selector selector${i}`;
        document.querySelector(`.selector${i}`).id = "";
        document.querySelector(`.selector${i}`).classList.add(ListOfFruits[randomNum].english);
        document.querySelector(`.selector${i}`).innerText = `${ListOfFruits[randomNum].korean}`
        document.querySelector(`.selector${i}`).classList.remove("hidden");
        document.querySelector(`.selector${i}`).id = `${ListOfFruits[randomNum].english}`;
    };  
    // console.log(ListOfFruits[randomNum].url)
    randomNum = Math.floor(Math.random()*ListOfFruits.length);
     theImg.classList.remove("hidden");
     theImg.classList.add(ListOfFruits[randomNum].english)
    let classImgArr = theImg.classList.value.split(" ")
    if (ListOfFruits[randomNum].url === "none"){
        theImg.src = ListOfFruits[randomNum].url
        document.querySelector("#noImage").classList.remove("hidden")
        document.querySelector("#noImage").innerText = `${ListOfFruits[randomNum].english}`
    } else {
    theImg.src = ListOfFruits[randomNum].url;
    if(document.querySelector("#noImage").classList.contains("hidden")){
        document.querySelector("#noImage").innerText = ""
    } else {document.querySelector("#noImage").classList.add("hidden")
    document.querySelector("#noImage").innerText = ""}
    }
    
    //fix so that the last button doesn't always give the correct answer
    let koreanWord = ListOfFruits.map(e => e.english).indexOf(`${classImgArr[1]}`);
    //create new random number for putting selector at random place below
    let randomNumforSelector = Math.floor(Math.random() * 10);
    document.querySelector(`.selector${randomNumforSelector}`).classList = (`selector selector${randomNumforSelector} ${classImgArr[1]}`)
    document.querySelector(`.selector${randomNumforSelector}`).innerText = `${ListOfFruits[koreanWord].korean}`;
    document.querySelector(`.selector${randomNumforSelector}`).id = `${classImgArr[1]}`;
}

// checking if right or wrong answer 
function checkIfMatching(){
    if(theImg.classList.contains(this.id)){
     score += 10
 	 document.querySelector(".score").innerText = `Correct - Current score: ${score}`;
     document.querySelector("#guessImg").classList = "";
     theImg.classList.add("hidden");
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

     
