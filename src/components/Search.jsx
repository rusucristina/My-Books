import React, { useState } from 'react';
import AddFavorite from './AddFavorite';
import SearchBox from './SearchBox';
const apiKey = "AIzaSyD2yN3QpTM4EnZubly1aijzVPgiYPjFkc0";
const Search = () => {
    const [books, setBooks] = useState([]);
  
    console.log(books);
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState("")
    const [readLater, setReadLater] = useState([])
    const [alreadyFinished, setAlreaadyFinished] = useState([])

    const searchBooks = async (input) => {
        let response = await fetch (
            `https://www.googleapis.com/books/v1/volumes?q=${input}+inauthor&orderBy=newest&key=${apiKey}&filter=partial&maxResults=40&orderBy=relevance`
        );
        let responseJson = await response.json();
        if (responseJson.items) {
            setBooks(responseJson.items);
        }
    };
    console.log(books);
    console.log(books)
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

                <section className="container-fluid row books-app" >
                    <div className="row d-flex align-items-center mt-4 mv-4">
                        {books?.map((item, id) => (
                            <div key={item?.id} className='image-container d-flex justify-content-center m-3'>
                                <img
                                    alt={item?.volumeInfo?.title}
                                    src={item?.volumeInfo?.imageLinks?.thumbnail} />
                                {/* <a target="_blank" href={item?.volumeInfo?.canonicalVolumeLink}><h6>{item?.volumeInfo?.title}</h6></a>
                                <div >
                                    <ul >
                                        <li>by {item?.volumeInfo?.authors}</li>
                                        <li>Page Count: {item?.volumeInfo?.pageCount}</li>
                                        <li>Category: {item?.volumeInfo?.categories}</li>
                                    </ul>
                                </div> */}
                                <div className="overlay d-flex align-items-center justify-content-center">
                                    <AddFavorite />
                                    <button onClick={() => addReadLaterBook(id)}
                                    >Read Later</button>
                                    <button
                                        onClick={addAlreadyFinishedBook}
                                    >Already Finished</button>
                                </div>

                            </div>
                        ))
                        }
                    </div>

                </section>
            </form>
        </>
    )
}
export default Search;

