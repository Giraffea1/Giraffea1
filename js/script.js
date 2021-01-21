// Aside Bar
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length;

const sectionList = document.querySelectorAll(".section"),
        totalSectionList = sectionList.length;

for(let i=0; i<totalNavList; i++) {
    const a=navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j=0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active");
        showSection(this);
    })
}

function showSection(element){
    for(let i=0; i < totalSectionList; i++){
        sectionList[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
}

const navTogglerBtn= document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () =>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i < totalSectionList; i++){
        sectionList[i].classList.toggle("open");
    }
}

const contact= document.querySelector(".contact-form"),
         sendButton= contact.querySelector(".btn");

sendButton.addEventListener("click", ()=>{
    collectEmail();}
)

function collectEmail(){
    var subject = contact.querySelector("#subject").value,
        name = contact.querySelector("#name").value,
        msg = contact.querySelector("textarea").value,
        details = "?subject=" + subject + " from " + name + "&body=" + msg,
        hrefOriginal = contact.querySelector("a").getAttribute("href"),
        hrefFinal = hrefOriginal + details;
    contact.querySelector("a").setAttribute("href", hrefFinal); 


}