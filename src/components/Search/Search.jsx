import React, { useState } from 'react';
import AddFavorite from '../AddFavorite';
import SearchBox from './SearchBox';
import './Search.css';
const apiKey = "AIzaSyD2yN3QpTM4EnZubly1aijzVPgiYPjFkc0";

const Search = (setInput) => {
    const [books, setBooks] = useState([]);
  
    console.log("books")
    console.log(books);
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState("")
    const [readLater, setReadLater] = useState([])
    const [alreadyFinished, setAlreaadyFinished] = useState([])

    const searchBooks = async (input) => {
        let response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${input}+inauthor&orderBy=newest&key=${apiKey}&filter=partial&maxResults=40&orderBy=relevance`
        );
        let responseJson = await response.json();
        if (responseJson.items) {
            setBooks(responseJson.items);
        }
    };
    let newCategories = []
    for (let i = 0; i < books?.length; i++) {
        if (newCategories.indexOf(books[i]?.volumeInfo?.categories?.[0]) === -1) {
            newCategories.push(books[i]?.volumeInfo?.categories?.[0])
        }
    }
    console.log("new Categories")
    console.log(newCategories.sort())
    //Filtrul nu functioneaza
    const handleCategoryFilter = (e) => {
        const selectedCategory = e.target.value
        setSelectedCategory(selectedCategory)
        // let booksFilteredByCategory= [...books]
        // booksFilteredByCategory=booksFilteredByCategory.filter(item=>
        //     item.category===categories)
        //     setBooks(booksFilteredByCategory)
    }
    console.log("selectedCategory")
    console.log(selectedCategory)

    const addReadLaterBook = (event, id) => {
        let readLater = []
        for (let i = 0; i < books?.length; i++) {
            if (readLater.indexOf(books[i]?.id) === -1) {
                readLater.unshift(books[i]?.volumeInfo?.title)
            }
        }
        setReadLater(readLater)

    }
    console.log("readLater")
    console.log(readLater)

    const addAlreadyFinishedBook = () => {
        alreadyFinished.unshift()
    }
    return (
        <>
            <h1>Search</h1>
            <strong className="quotes-search" >Let`s start by searching books that you are currently reading or want to read later</strong>
            <form className="col col-sm-4" >
                <SearchBox
                    searchBooks={searchBooks}
                />
                <select onSelect={handleCategoryFilter}  >
                    {newCategories?.map(category => (
                        <option value={category}>{category}</option>
                    ))}
                </select>
                <div className="all-search-book">
                    <section classname="section-search" nopadding>
                    <div className="hr"  style={{width: setInput?"30vw": "0px"}} />
                        <div className="section-title" main>What we find</div>
                        <div className="grid-container">
                            {books?.map(({ id, volumeInfo }) => (
                                <div className="book-card" key={id}>
                                    <img className="img-search" src={volumeInfo?.imageLinks?.thumbnail} />
                                    <div className="title-content">
                                        <div className="header-three" title>
                                            {volumeInfo?.title}
                                        </div>
                                        <div className="hr" />
                                        <div className="card-info">
                                            descriere
                                        </div>
                                        <div>
                                            <div className="tag-list">
                                                taguri
                                                categorii
                                            </div>
                                        </div>
                                        <div className="utility-list">
                                            <button onClick={() => addReadLaterBook()} className="external-links" >
                                                Read Later
                                            </button>
                                            <button onClick={addAlreadyFinishedBook} className="external-links" >
                                                Already Finished
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}
export default Search;

