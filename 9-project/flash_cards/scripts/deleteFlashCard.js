const delete_flashcard = document.querySelector(".delete");
const modal_delete = document.querySelector(".modal-delete");

const activateDelete = () => {
    const modal_inner_delete = document.querySelector(".modal-inner-delete");
    modal_inner_delete.classList.replace("inactive", "active");
}

delete_flashcard.addEventListener("click", () => {
    modal_delete.style.visibility = "visible";
    add_delete_flashcard();

    setTimeout(activateDelete, 100);
});

const add_delete_flashcard = () => {
    if (cards_in_use.length === 0) {
        return;
    }
    const modal_content_delete = document.querySelector(".modal-content-delete");
    modal_content_delete.innerHTML = "";
    cards_in_use.map((x) => {
        let html = createElement(x.title, x.value);
        modal_content_delete.innerHTML += html;
    }); 
}

const delete_this_card = (elem) => {
    thenum = elem.replace( /^\D+/g, '');

    cardCollection[Number(thenum)] = "";
    const removed = document.querySelector(elem);
    removed.remove();
    check_card_in_use();
}

const check_card_in_use = () => {
    cards_in_use = cardCollection.filter((x) => {
        if (x !== "") {
            return x;
        }
    });
    if (cards_in_use.length === 0) {
        displayEmpty();
    } else {
        generateCard();
    }
}

const createElement = (title, count) => {
    let card = ".card" + count;
    return [
        '<div class="modal-content-section-delete', 
            "card" + count, 
            '">',
            '<p class="title-content">'
            , title, 
            '</p>',
            `<button type="button" class="delete-flashcard" onclick="delete_this_card('${card}')">Remove</button>`,
        '</div>'
    ].join("\n");   
}

