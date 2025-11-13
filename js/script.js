const elBody = document.querySelector("body");
const elCategory = document.querySelector(".hero-list");
const elModal = document.querySelector(".modalLang");
const elDuration = document.querySelector(".modalLang-durationList")

elDuration.addEventListener("click", (e) => {
    if(e.target.className === "modalLang-durationItem-btn"){
        localStorage.setItem("durationGame", e.target.textContent)
        elDuration.classList.add("modalLang-durationList-active")    
        elDuration.previousElementSibling.classList.add("modalLang-box-thanksMessage-active")
    }
    
})


//         const getDurationGame = localStorage.getItem("durationGame")
// console.log(getDurationGame);


elModal.addEventListener("click", (e) => {
    // console.log(e.target);
    
    if(e.target.className === "modalLang modalLang-active" || e.target.className === "modalLang-box-closeIcon"){
        elModal.classList.remove("modalLang-active")
    }

    if(e.target.className === "modalLang-box-item-btn"){
      
        localStorage.setItem("typeTest", e.target.textContent)
        const getDurationGame = localStorage.getItem("durationGame")

        if(getDurationGame === null){
            alert("O'yin davomiyligini tanlang")
        }
        else{
            if (JSON.parse(localStorage.getItem("choiceData")).category === "Ismlar"){
                window.location.href = "dictionary.html"   
                window.scrollTo({
                    top: 0,
                })    

                let filteredCategory = allData.filter(data => data.category === "ismlar")
                localStorage.setItem("filteredCategoryName", JSON.stringify(filteredCategory))
            }



            else if (JSON.parse(localStorage.getItem("choiceData")).category === "Fe'llar"){
                window.location.href = "verbs.html"   
                window.scrollTo({
                    top: 0,
                })        
                let filteredCategory = allData.filter(data => data.category === "fe'llar")
                localStorage.setItem("filteredCategoryName", JSON.stringify(filteredCategory))
            }
            
            

            
            else if (JSON.parse(localStorage.getItem("choiceData")).category === "Gaplar"){
                window.location.href = "sentences.html"   
                window.scrollTo({
                    top: 0,
                })        

                let filteredCategory = allData.filter(data => data.category === "gaplar")
                localStorage.setItem("filteredCategoryName", JSON.stringify(filteredCategory))
            }





            else if (JSON.parse(localStorage.getItem("choiceData")).category === "Aralash"){
                window.location.href = "mixed.html"   
                window.scrollTo({
                    top: 0,
                })        
                localStorage.setItem("filteredCategoryName", JSON.stringify(allData))
            }
        }
        
        
    }
    
})

elCategory.addEventListener("click", (e) => {
    if(e.target.className === "hero-btnLevelItem-link"){
        localStorage.removeItem("durationGame")
        elDuration.classList.remove("modalLang-durationList-active")
        elDuration.previousElementSibling.classList.remove("modalLang-box-thanksMessage-active")

        const categoryLevel = {
            category: e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent,
            level: e.target.textContent
        }
        localStorage.setItem("choiceData", JSON.stringify(categoryLevel))
        elModal.classList.add("modalLang-active")
        elBody.style.overflow = "hidden"
    }
})
