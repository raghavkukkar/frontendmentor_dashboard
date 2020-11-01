const body = document.getElementsByTagName("body")[0];
const checkbox = document.getElementById("checkbox");
const nav = document.getElementsByClassName("nav")[0];
const card = document.getElementsByClassName("card");
const navHead = document.getElementById("nav-head");
const numb = document.getElementsByClassName("number");
const lcard = document.getElementsByClassName("lcard");
const value = document.getElementsByClassName("value");
const brk = document.getElementById("break");
const dark = () => {
    body.classList.remove("light");
    nav.classList.remove("light");
    let cards = Array.from(card);
    cards.forEach((e) => {
        e.classList.remove("light");
    });
    navHead.classList.remove("light");
    let numbs = Array.from(numb);
    numbs.forEach((e) => {
        e.classList.remove("light")
    });
    let lcards = Array.from(lcard).forEach((e) => {
        e.classList.remove("light")
    });
    let values = Array.from(value).forEach((e) => {
        e.classList.remove("light")
    });
    brk.classList.remove("light");

}
const light = () => {
    body.classList.add("light");
    nav.classList.add("light");
    let cards = Array.from(card);
    cards.forEach((e) => {
        e.classList.add("light");
    });
    navHead.classList.add("light");
    let numbs = Array.from(numb);
    numbs.forEach((e) => {
        e.classList.add("light")
    });
    let lcards = Array.from(lcard).forEach((e) => {
        e.classList.add("light")
    });
    let values = Array.from(value).forEach((e) => {
        e.classList.add("light")
    });
    brk.classList.add("light");

}
    
const toggle = () => {
    if (checkbox.checked) {
        dark();
    }
    else {
        light();
    }
}
