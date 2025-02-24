import PrintedBook from "./printedBook.js";
import AudioBook from "./audioBook.js";
/* import Book from "./book.js";
import Ui from "./ui"; */

class BookManager {
    static booksCollection = JSON.parse(localStorage.getItem("books-collection")) || [];
    static addBook(
        title,
        author, 
        publisher,
        date,
        bookType,
        pages,
        printTypes,
        narrator,
        duration
    ){
        let book;
        if(bookType === "printed-book"){
            book = new PrintedBook(
                title, 
                author, 
                publisher, 
                date, 
                bookType, 
                pages, 
                printTypes
            );
        } else {
            book = new AudioBook(
                title, 
                author, 
                publisher, 
                date, 
                bookType, 
                pages, 
                printTypes,
                narrator,
                duration
            ); 
        }
        BookManager.booksCollection.push(book); 
        this.storeBooks(this.booksCollection);
        console.log(this.booksCollection);
        
    }
    static storeBooks(collection){
        localStorage.setItem("books-collection", JSON.stringify(collection)); 
    }
}

export default BookManager; 