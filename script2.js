let next= document.getElementById('next');
let previous = document.getElementById('previous');
let thanksText = document.getElementById('thanksText')
const text = [
"Wszystkigo najleszego z okazji Świąt Borzego narodzenia. ",
 "Chciałbym tobie podziękować za wspólnie spędzony czas w tym roku.",   
"Dziękuje za każdą minutę którą mi pościeciałaś. Każda sekunda spędzona z tobą była najlepiej sporzytkowanym czasem w moim życiu.Jesteś dla mnie najważniejszą osobą, staram sie byc dla ciebie jak najlespzy.", 
"Oczywiście zadażały się podknięcia i błędy przez co chwilami nie było wesolo lecz wspólnym siłami rozwiązaliśmy wszystie kłopoty.",
"Dziękje że starasz się dla mnie oraz że spędzasz ze mna setki godzin na romowach.",
"Dziekuje że zawsze jak cie potrzebuje to jesteś", 
"Dziękuje że wytrzymałaś razem ze mną tak dlugo", 
"Dziękuje za to że nadal mnie kochasz po duzej ilości błędów jakie popełniłem", 
"Dziekuje za ten cudowny rok, mam nadzieje że kolejny spędzimy jeszcze bliżej siebie i lepiej.",
"Kocham cię najbardziej. Fifi. "]
let num = 0;
next.addEventListener("click",function(){
    console.log("next")
    if (num < 9){
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