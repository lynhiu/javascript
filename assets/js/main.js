let count;

// set default value
count = 0;

document.querySelector(".count-number").textContent = count;

const countNumberElement = document.querySelector(".count-number");

function addcount(){
    count = count + 1;
    countNumberElement.textContent = count
}

function mincount(){
    count = count - 1;
    countNumberElement.textContent = count
}

function resetcount(){
    count = 0;
    countNumberElement.textContent = count
}

//color
const parentElement = document.querySelector(".change-color-parents")
const childElement = document.querySelector(".change-color-child")

childElement.addEventListener("click", ()=> {
    if (childElement.style.backgroundColor == "green"){
    childElement.style.backgroundColor = "gray";
    }else{
    childElement.style.backgroundColor = "green";
}
});