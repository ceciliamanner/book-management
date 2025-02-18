import Ui from "./ui";
import BookManager from "./bookManager.js";

// SELECT DOM ELEMENTS
const openAddModalButton = document.querySelector(".add-books__button");
const closeAddModalButton = document.querySelector(".form__cancel-button");
const formModal = document.querySelector(".form-modal");
const printedBookContainer = document.querySelector(".form__printed-book");
const audioBookContainer = document.querySelector(".form__audio-book");

// SELECTING FORM INPUTS
const form = document.querySelector(".form");
const title = document.querySelector(".form__title-input");
const author = document.querySelector(".form__author-input");
const publisher = document.querySelector(".form__publisher-input");
const date = document.querySelector(".form__publication-input");
const bookTypeDropdown = document.querySelector(".form__book-type");
const filterContainer = document.querySelector(".filter-books");
const formSubmitButton = document.querySelector(".form__add-button");
const validationMessage = document.querySelector(".form__validation-message");

// SELECTING ELEMENTS SPECIFIC TO PRINTED BOOKS
const pages = document.querySelector(".form__pages-input");
const printType = document.querySelector(".form__print-type");

// SELECTING ELEMENTS SPECIFIC TO AUDIO BOOKS
const narrator = document.querySelector(".form__narrator-input");
const duration = document.querySelector(".form__duration-input");

// ALL ELEMENTS IN PRINTED AND AUDIO CATEGORY
const printedFields = [
  document.querySelector(".form__pages-input"),
  document.querySelector(".form__print-type"),
];
const audioFields = [
  document.querySelector(".form__narrator-input"),
  document.querySelector(".form__duration-input"),
];

// ADDING EVENT LISTERNERS
document.addEventListener("DOMContentLoaded", () => {
    Ui.displayAddModal(
        openAddModalButton,
        formModal, 
        printedBookContainer,
        audioBookContainer
    ); 
    Ui.closeAddModal(closeAddModalButton, formModal);
    Ui.renderBooks()
});

bookTypeDropdown.addEventListener("change", () => {
        Ui.toggleBookTypeFields(
            printedBookContainer, 
            audioBookContainer, 
            audioFields, 
            printedFields, 
            bookTypeDropdown.value
        );
    }); 

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        BookManager.addBook(
            title.value.trim(), 
            author.value.trim(), 
            publisher.value.trim(),
            date.value, 
            bookTypeDropdown.value, 
            pages.value.trim(), 
            printType.value,
            narrator.value.trim(), 
            duration.value
        );
        Ui.renderBooks()
    });