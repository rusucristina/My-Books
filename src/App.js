import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Navbar from './components/Navbar';
import ClubMeetings from "./components/ClubMeetings";
import Profile from "./components/Profile";
import Quotes from "./components/Quotes";
import Search from "./components/Search/Search";
import SearchBox from '../src/components/Search/SearchBox';
import Testimonials from './components/Testimonials';
import { bearImg } from "./image/BearImg.png"
const apiKey = "AIzaSyD2yN3QpTM4EnZubly1aijzVPgiYPjFkc0";

function App(setInput) {
  const [books, setBooks] = useState([]);
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

  const addReadLaterBook = (book, id) => {
    readLater.unshift(book)
    let newList = []
    for (let i = 0; i < readLater.length; i++) {
      if (newList.indexOf(readLater[i]) === -1) {
        newList.unshift(readLater[i])
      }
    } setReadLater(newList)
  }


  const deleteFromReadLaterBook = (readLaterBook, id) => {
    // console.log(id)
    // readLater.pop(readLaterBook)
    // let deleteList = []
    // for (let i = 0; i < readLaterBook.length; i++) {
    //   if (deleteList.indexOf(readLaterBook[i]) === -1) {
    //     deleteList.pop(readLaterBook[i])
    //   }
    // } setReadLater(deleteList)
  }

  const addAlreadyFinishedBook = () => {
    alreadyFinished.unshift()
  }

  return (
    <>

      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route exact path="/clubmeetings">
          <ClubMeetings />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>

        <div className="header">
          <div className="search-container-and-img">
            <div className="search-container">
              <div className="title">Find yourself in a great book</div>
              <strong className="quotes-search" >Let`s start by searching books that you are currently reading or want to read later</strong>
              <div className="" >
                <SearchBox
                  searchBooks={searchBooks}
                />
              </div>
            </div>

            <div className="header-img-container">
              <img className="header-img" src="https://cdn.dribbble.com/users/1008875/screenshots/15573447/media/c089019d01df11f7ae21871aae223c59.png?compress=1&resize=1200x900" alt="Bear reading" />
            </div>
            <div className="site-description">
              <hr className="hr-description" />
              <p className="p-description">+1000 Members</p>
              <hr className="hr-description" />
              <p className="p-description">Lifetime access</p>
              <hr className="hr-description" />
              <p className="p-description">A lot of books</p>

            </div>

          </div>

          <div className="all-search-book">
            <section className="section-search" >
              {/* <div className="section-title">What we find</div> */}

              {books?.map((book, id) => (
                <div className="book-card" key={book?.id}>
                  <div className="grid-container">
                    <div className="img-search" >
                      <img className="img-book" src={book?.volumeInfo?.imageLinks?.thumbnail} />
                    </div>
                    <div className="header-three">
                      <div className="title-content">
                        {book?.volumeInfo?.title}
                      </div>
                      <hr />
                      <div className="authors">
                        By {book?.volumeInfo?.authors}
                      </div>
                      <div className="utility-list">
                        <button onClick={() => addReadLaterBook(book, id)} className="external-links" >
                          Read Later
                        </button>
                        <button onClick={addAlreadyFinishedBook} className="external-links" >
                          Already Finished
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}


            </section>

            <div>
              {readLater?.map((readLaterBook, index, id) =>
                <div className="book-card" key={index} id={readLaterBook?.id}>
                  <div className="grid-container">
                    <div className="img-search" >
                      <img className="img-book" src={readLaterBook?.volumeInfo?.imageLinks?.thumbnail} />
                    </div>
                    <div className="header-three">
                      <div className="title-content">
                        {readLaterBook?.volumeInfo?.title}
                      </div>
                      <hr />
                      <div className="authors">
                        By {readLaterBook?.volumeInfo?.authors}
                      </div>
                      <div className="utility-list">
                        <button onClick={() => deleteFromReadLaterBook(readLaterBook, id)} className="external-links" >
                          Delete
                        </button>
                        <button onClick={addAlreadyFinishedBook} className="external-links" >
                          Already Finished
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="second-part">
          <ClubMeetings />
          <Testimonials/>
        </div>


      </Router>
    </>
  )
}

export default App;
