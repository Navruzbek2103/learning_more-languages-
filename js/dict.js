const elWord = document.querySelector(".hero-word")
// console.log(elWord);
const getData = JSON.parse(localStorage.getItem("filteredCategoryName"));
const getTypeTest = localStorage.getItem("typeTest")
const getLevel = JSON.parse(localStorage.getItem("choiceData"))
const elSemicolon = document.querySelector(".hero-timer-semicolon")
const elTime = document.querySelector(".hero-timer-time")
const elCoin = document.querySelector(".hero-coinText-span")
const foundWord = document.querySelector(".hero-word-found")
const elError = document.querySelector(".hero-errorText-span")
const trueAnswer = document.querySelector(".hero-trueAnswer")


let allWords = 0;
let coin = 0;
let error = 0;
let gameTime = 0;

window.addEventListener("load", () => {
    localStorage.removeItem("wordOnWindow")
})



if(localStorage.getItem("durationGame") === "1 min"){
    gameTime = 16;
}
else if(localStorage.getItem("durationGame") === "3 min"){
    gameTime = 180;
}
else if(localStorage.getItem("durationGame") === "5 min"){
    gameTime = 300;
}
else if(localStorage.getItem("durationGame") === "10 min"){
    gameTime = 600;
}
else if(localStorage.getItem("durationGame") === "30 min"){
    gameTime = 1800;
}
else if(localStorage.getItem("durationGame") === "1 soat"){
    gameTime = 3600;
}


document.addEventListener("DOMContentLoaded", () => {
    foundWord.addEventListener("click", (r) => {
    console.log(JSON.parse(localStorage.getItem("wordOnWindow")).arabic)
    coin += 1
    elCoin.textContent = coin
    foundWord.style.display = "none"
    trueAnswer.style.display = "block"
    trueAnswer.textContent = JSON.parse(localStorage.getItem("wordOnWindow")).arabic
})
})

// console.log(gameTime);

setInterval(() => {
    gameTime = gameTime - 1
    
}, 1000);
// console.log(gameTime);

const animationSemicolon1 = setInterval(() => {
    elSemicolon.style.opacity = 0
    if(gameTime == 0){
        clearInterval(animationSemicolon1)
        foundWord.style.display = "none"    
    }

}, 500);

const animationSemicolon2 = setInterval(() => {
    elSemicolon.style.opacity = 1
    if(gameTime == 0){
        clearInterval(animationSemicolon2)
    }
}, 1000);

// console.log(getTypeTest);


let changeTime = ""

function changingGameTimeFunc(){
    if (getLevel.level === "Oson"){
    
        changeTime = 10;
        elTime.textContent = changeTime
    
    }
    else if (getLevel.level === "O'rtacha"){
        changeTime = 7;
        elTime.textContent = changeTime
    }
    else if (getLevel.level === "Qiyin"){
        changeTime = 5;
        elTime.textContent = changeTime
    }
    else if (getLevel.level === "Ekspert"){
        changeTime = 3;
        elTime.textContent = changeTime
    }
}
changingGameTimeFunc()


function changeTimerAndCountGradeFunc(){

    const changingTimer = setInterval(() => {
        // console.log(typeof(elTime.textContent));
        if(gameTime == 0){
            clearInterval(changingTimer)
            foundWord.style.display = "none"    
        }

        if(elTime.textContent == 1){
            elTime.textContent = changeTime
            if(foundWord.style.display === "block"){
                error += 1
                elError.textContent = error
            }
            
        }
        else{
            elTime.textContent = elTime.textContent - 1
        }
        
    }, 1000);
}

changeTimerAndCountGradeFunc()

function changeWordFunc(){
    
    if(gameTime > 0){
        const changingTypeGame = setInterval(() => {
            foundWord.style.display = "block"
            let randomWord = getData[Math.trunc(Math.random() * getData.length-1)]

            localStorage.setItem("wordOnWindow", JSON.stringify(randomWord))
            
            if(gameTime == 0 || gameTime < 0){
                clearInterval(changingTypeGame)
                foundWord.style.display = "none"
                alert("O'yin tugadi|  Endi shu joyiga modalka yasashlik kerak, unda yakuniy natijalar e'lon qilinishi zarur. Masalan, o'yin davomiyligi qancha bo'ldi? Jami savollar soni, to'g'ri va noto'g'ri javoblar miqdori ko'rsatilishi zarur | Keyin to'g'ri javobni ko'rsatish variyantini ham ko'rib chiqishlik kerak")

            }

            // console.log(gameTime);

            if(getTypeTest === "O'zbekcha"){
                if(randomWord.uz !== ""){
                    elWord.textContent = randomWord.uz
                    allWords = allWords + 1;
                    elWord.style.color = "black"
                    console.log(allWords);
                    // trueAnswer.textContent = randomWord.
                    trueAnswer.textContent = randomWord.arabic
                        
                }
                else{
                    elWord.textContent = "Ushbu lug'at bazaga hali kiritilmadi!"
                    elWord.style.color = "red"    
                }
            }


            else if(getTypeTest === "Arabcha"){
                // console.log(true);
                if(randomWord.arabic !== ""){
                    elWord.textContent = randomWord.arabic
                    elWord.style.color = "black"
                }
                else{
                    elWord.textContent = "Ushbu lug'at bazaga hali kiritilmadi!"
                    elWord.style.color = "red"    
                }
            }


            else if(getTypeTest === "Inglizcha"){
                console.log(true);
                
                if(randomWord.en !== ""){
                    elWord.textContent = randomWord.en
                    elWord.style.color = "black"
                }
                else{
                    elWord.textContent = "Ushbu lug'at bazaga hali kiritilmadi!"
                    elWord.style.color = "red"    
                }
            }


            else if(getTypeTest === "Ruscha"){
                if(randomWord.ru !== ""){
                    elWord.textContent = randomWord.ru
                    elWord.style.color = "black"
                }
                else{
                    elWord.textContent = "Ushbu lug'at bazaga hali kiritilmadi!"
                    elWord.style.color = "red"    
                }
            }

            trueAnswer.style.display = "none"

        }, changeTime * 1000);
    }
    else{
        clearInterval(changingTypeGame)
    }
}

changeWordFunc()


