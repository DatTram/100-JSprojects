// the hub

const modal_exit_add = document.querySelectorAll(".modal-exit")[0];
const modal_exit_delete = document.querySelectorAll(".modal-exit")[1];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let page = 0;

const flip_card = document.querySelector(".flip-card");
const flip_card_content = document.querySelectorAll(".flip-card-content");
let content = "";
let title = "";
let flip_mode = 0; // 0: title 1: content

modal_exit_add.addEventListener("click", () => {
    const modal_inner_add = document.querySelector(".modal-inner-add");
    warning.style.visibility = "hidden";
    modal_add.style.visibility = "hidden";
    modal_inner_add.classList.replace("active", "inactive");
});

modal_exit_delete.addEventListener("click", () => {
    const modal_inner_delete = document.querySelector(".modal-inner-delete");
    modal_delete.style.visibility = "hidden";
    modal_inner_delete.classList.replace("active", "inactive");
});

// rule: first title, second content 

flip_card.addEventListener("click", () => {
    flip_mode ? flip_mode = 0 : flip_mode = 1;
    flip_card.classList.toggle("hover");
});

const displayEmpty = () => {
    flip_card_content[0].textContent = ""; 
    flip_card_content[1].textContent = "";
}

const generateCard = (page = 0) => {
    card = cards_in_use[page];

    flip_card_content[0].textContent = card.title;
    flip_card_content[1].textContent = card.getContent;
    title = card.title;
    content = card.content;
    checkFlip();
    checkPrev();
    checkNext();
}

const checkFlip = () => {
    if (flip_mode === 1) {
        flip_card_content[0].textContent = content;
        flip_card_content[1].textContent = title;
    }
}

prev.addEventListener("click", () => {
    if (page - 1 < 0) {
        return; 
    } else {
        page -= 1;
        generateCard(page);
    }
});

next.addEventListener("click", () => {
    if (page + 1 > cards_in_use.length - 1) {
        return; 
    } else {
        page += 1;
        generateCard(page); 
    }
});

const checkPrev = () => {
    if (page === 0) {
        prev.style.backgroundColor = "rgba(26,29,40,0.1)";
    } else {
        prev.style.backgroundColor = "white"
    }
}

const checkNext = () => {
    if (page === cards_in_use.length-1 || page === cards_in_use.length) {
        next.style.backgroundColor = "rgba(26,29,40,0.1)";
    } else {
        next.style.backgroundColor = "white";  
    }
}

checkPrev();
checkNext();
