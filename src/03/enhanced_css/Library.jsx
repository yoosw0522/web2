import React from "react";
import Book from "./Book";


function Library() {
    return(
        <div className="library-container">
            <Book name="처음 만난 파이썬" numOfPage={300} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSot1GuCYqK62daMhT-Op_P5Ozo1teCCcK_91RlbEogTA&s=10"/>
            <Book name="처음 만난 AWS" numOfPage={400} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiSLLxecjcdZPjhhyZeo_k0P90o-_u4SVdy7swx9UtSg&s=10"/>
            <Book name="처음 만난 리액트" numOfPage={500} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8GieFzlG7PRPOyNyiJ_UBFamfwH4ItLPi-yFN58M0w&s=10"/>
            {/* 테스트를 위해 몇 개 더 추가해보세요 */}
            <Book name="처음 만난 PHP" numOfPage={250} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3EzXxtbQ_3gK9I-c8-21Kn1Yp-TSVBcXDsnueaxYJw&s"/>
            <Book name="처음 만난 HTML/CSS" numOfPage={180} imgUrl="https://image.yes24.com/goods/57500683/xl"/>
        </div>
    );
}

export default Library;