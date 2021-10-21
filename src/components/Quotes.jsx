import React from 'react';
// import myImgQuotes from "../image"
// import quotesBackground from "../image/90b3a4464dd20bb2dd6c4534bb17fdd9.jpg"
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useState, useEffect } from 'react';
const Quotes = () => {
    const [newQuotes, setNewQuotes] = useState("")
    const [quotesList, setQuotesList] = useState([])
    const addQuotes = () => {
        quotesList.unshift(newQuotes)
    }
    const handleDelete=()=>{

    }
    console.log(newQuotes)
    console.log(quotesList)
    useEffect(() => {
        addQuotes();
    }, []);
    return (
        <div>
            <h1>Quotes</h1>
            <strong className="quotes-search" >Add your favorite quotes here</strong>
            {/* <img src={myImgQuotes} alt="book autumn" /> */}
            <input
                className="form-control mt-3"
                placeholder="Add your favorite qoutes"
                type="search"
                aria-label="Search"
                onChange={e => setNewQuotes(e.target.value)}
            />
            <AddCircleIcon fontSize="medium" onClick={addQuotes} />
            {quotesList.map(quote =>
                <div>

                    <div className="col-12 text-center d-flex">
                        {/* <img className="img-fluid of" src={quotesBackground} alt="quotes background" max-width="100%"  /> */}
                        <div className="quotes-search text-dark w-20 position-absolute mt-5">
                            {quote}
                            <button onClick={()=>handleDelete()}>
                                <DeleteIcon />
                            </button>
                            <button> 
                                 <FavoriteBorderIcon />
                            </button>
                           
                        </div>
                    </div>




                </div>
            )

            }
        </div>
    )
}
export default Quotes;