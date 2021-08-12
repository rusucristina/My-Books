import React, { useState } from 'react';
const Search = () => {
    const [books, setBooks] = useState([])
    const [input, setInput] = useState("")
    const [apiKey, setApiKey] = useState("AIzaSyD2yN3QpTM4EnZubly1aijzVPgiYPjFkc0")
    const searchBooks = async () => {
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${apiKey}&maxResults=40`)
        let books = await response.json();
        setBooks(books)
    }
    console.log(books)
    const handleSearch = (e) => {
        setInput(e.target.value)
    }
    const addBook=()=>{

    }
    return (
        <>
            <h1>Search</h1>
            <strong className="quotes-search">Let`s start by searching books that you are currently reading or want to read later</strong>
            <form className="form-inline my-2 my-lg-0">
                <input
                    onChange={handleSearch}
                    className="d-flex justify-content-center form-control mr-sm-2"
                    type="search"
                    aria-label="Search"
                />
                <button
                    className="btn btn-dark mt-2 mb-2 container d-flex justify-content-center"
                    onClick={searchBooks}
                    type="submit"
                >Search</button>
                <section className="container">
                    {books?.items?.map((item) => (
                        <div className="card" key={item?.id}>
                            <img
                                alt="Card image cap"
                                src={item?.volumeInfo?.imageLinks.smallThumbnail} />
                            <h5 className="card-title">{item?.volumeInfo?.title}</h5>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">by {item?.volumeInfo?.authors}</li>
                                    <li className="list-group-item">Page Count: {item?.volumeInfo?.pageCount}</li>
                                </ul>
                                    <a href={item?.volumeInfo?.canonicalVolumeLink} 
                                    className="card-link">Book link</a>
                                <button 
                                className="btn btn-secondary mt-2"
                                onClick={addBook}
                                >Read Later</button>
                                 <button 
                                className="btn btn-secondary mt-2"
                                onClick={addBook}
                                >Already Finished</button>
                            </div>
                        </div>
                    ))
                    }
                </section>
            </form>
        </>
    )
}
export default Search;

