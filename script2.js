let next= document.getElementById('next');
let previous = document.getElementById('previous');
let thanksText = document.getElementById('thanksText')
const text = [
    "Z okazji Świąt Bożego Narodzenia życzę Ci wszystkiego najlepszego.",
    "Chciałbym Ci serdecznie podziękować za wspólnie spędzony czas w tym roku.",
    "Dziękuję za każdą minutę, którą ze mną spędziłaś. Każda sekunda spędzona z Tobą była najlepiej spożytkowanym czasem w moim życiu. Jesteś dla mnie najważniejszą osobą, i staram się być dla Ciebie jak najlepszy.",
    "Oczywiście zdarzały się podknięcia i błędy, przez co chwilami nie było wesoło, lecz wspólnymi siłami rozwiązaliśmy wszystkie kłopoty.",
    "Dziękuję, że starasz się dla mnie oraz że spędzasz ze mną setki godzin na rozmowach.",
    "Dziękuję, że zawsze, gdy Cię potrzebuję, jesteś przy mnie.",
    "Dziękuję, że wytrzymałaś ze mną tak długo.",
    "Dziękuję za to, że nadal mnie kochasz pomimo dużej ilości błędów, jakie popełniłem.",
    "Dziękuję za ten cudowny rok. Mam nadzieję, że kolejny spędzimy jeszcze bliżej siebie i lepiej.",
    "Kocham Cię najbardziej. Fifi.",
    "Przepraszam, że nie umiem pisać."]
let num = 0;
next.addEventListener("click",function(){
    console.log("next")
    if (num < 10){
        num+=1
    }
    thanksText.innerText=text[num]
})
previous.addEventListener("click",function(){
    console.log("previous")
    if (num > 0){
        num-=1
    }
    thanksText.innerText=text[num]
})

thanksText.innerText=text[0]