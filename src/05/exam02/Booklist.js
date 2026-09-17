import React from "react";
import Book from "./Book.jsx"
import "./Booklist.css"

const books = [

    {
        title:"데이터베이스실습",
        author:"박우창",
        coverImage:"https://image.yes24.com/goods/124326403/L"
    },
    {
        title:"정보처리산업기사 실기 기본서",
        author:"길벗알앤디",
        coverImage:"https://image.yes24.com/goods/177078744/L"
    },
    {
        title:"길가메시 서사시",
        author:"앤드류 조지",
        coverImage:"https://image.yes24.com/goods/104103740/L"
    }
]

function Booklist() {
    return(
        <div className={"bookListWrapper"}>
            {books.map((book) => {
                return (
                    <Book
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}
                    />
                );
            })};
        </div>
    );
}




export default Booklist;