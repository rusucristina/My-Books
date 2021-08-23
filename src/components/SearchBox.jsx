import React,{useState,useEffect} from 'react';

const SearchBox = () => {
    const [input, setInput] = useState("")
    const [books, setBooks] = useState([])
    const [apiKey, setApiKey] = useState("AIzaSyD2yN3QpTM4EnZubly1aijzVPgiYPjFkc0")
    const handleSearch = (e) => {
        const input = e.target.value
        setInput(input)
    }
    const searchBooks = async (input) => {
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}+inauthor&orderBy=newest&key=${apiKey}&filter=partial&maxResults=40&orderBy=relevance`)
        let responseJson = await response.json();
        if (responseJson.items) {
            setBooks(responseJson.items)
        }
    }
    useEffect(() => {
        searchBooks(input)
    }, [input])
    console.log(books)
    return (
        <div className="input-group mb-3 align-self-center">
            <input
                className="form-control" placeholder="Type to search" type="search" aria-label="Search"
                onChange={handleSearch} />
            <div className="input-group-append">
                <button onClick={searchBooks} type="submit">Search</button>
            </div>

        </div>
    );
};

export default SearchBox;