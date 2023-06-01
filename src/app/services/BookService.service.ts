import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class BookService{
    bookList = [
        {
            title: 'Harry Potter',
            author: 'JK Rowlings'
        }
    ]

    addBook(title: string, author: string){
        const newBook = {title, author}
        this.bookList.push(newBook)
    }
}