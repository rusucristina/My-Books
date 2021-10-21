import React from "react"
import SearchBox from "./SearchBox";
import "./SearchBox.css"
const Search = (setInput, {books, addReadLaterBook, readLater, searchBooks, addAlreadyFinishedBook}) => {
    // const [categories, setCategories] = useState()
    // const [selectedCategory, setSelectedCategory] = useState("")
  
    // const [selectedReadLaterBook, setSelectedReadLaterBook] = useState([])
    
 // console.log("books")
    // console.log(books);
    
    // let newCategories = []
    // for (let i = 0; i < books?.length; i++) {
    //     if (newCategories.indexOf(books[i]?.volumeInfo?.categories?.[0]) === -1) {
    //         newCategories.push(books[i]?.volumeInfo?.categories?.[0])
    //     }
    // }
    // console.log("new Categories")
    // console.log(newCategories.sort())
  
    //Filtrul nu functioneaza
    // const handleCategoryFilter = (e) => {
    //     const selectedCategory = e.target.value
    //     setSelectedCategory(selectedCategory)
        // let booksFilteredByCategory= [...books]
        // booksFilteredByCategory=booksFilteredByCategory.filter(item=>
        //     item.category===categories)
        //     setBooks(booksFilteredByCategory)
    // }
    // console.log("selectedCategory")
    // console.log(selectedCategory)
return(
    <div>
      
         {/* <select onSelect={handleCategoryFilter}  >
                  {newCategories?.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                  ))}
              </select> */}
    </div>
)
}
    
export default Search;

