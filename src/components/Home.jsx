import React from 'react';
import myImg from "../image/Library_Book_Lamp_569455_1366x768.jpg"
const Home = (books) => {
    return (
        <div>

            <h1>My Books</h1>
            <section className="row no-gutters align-items-center">
                <div class="col-12 text-center d-flex">
                    <img className="img-fluid of" src={myImg} max-width="100%" alt="book with flower" />
                    <div className="quotes-search text-white w-20 position-absolute mt-5">
                        “Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.”</div>
                </div>
            </section>
        </div>

    )
}
export default Home