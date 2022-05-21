import React, {useEffect, useState} from "react";
import {qGet} from "../../utils/HTTPHelpers";
import {useHistory} from "react-router-dom"


import './home.css';

document.title = 'Home';

function HomePage(props) {

    const [listOfBooks, setListOfBooks] = useState([]);
    const history=useHistory();

        useEffect(()=>{
            getBooks()
        },[])

        function getBooks(){
            qGet( '/books/getall').then(parsedRes => {
                setListOfBooks(parsedRes);
            })
                .catch((error) => {
                    console.log(error);
                });
        }




    const addRating = () =>{
       history.push('/rating')
    }
    const handleLogout = () =>{
       localStorage.setItem("username",null);
        history.push('/login');
    }
    function renderHighestRating  (val) {

    qGet( '/ratings/get/{val}').then(parsedRes => {
        return(<p>{parsedRes}</p>);

    })
        .catch((error) => {
            console.log(error);
        });

       return(<p></p>);
    }

        return (
            <div>
               <div className={'header'}>
                   <h2>Welcome to Book Mania !</h2>
                   <button className={'logoutButton'} onClick={handleLogout}>logout</button>
               </div>
                <p>Do you want to rate your own book? <button className={'addARatingButton'} onClick={addRating}>Add a rating</button></p>


                <div className={'booksTable'}>
                    <h1>List of Books</h1>
                    <table>
                        <tr>
                            <th>Book Title</th>
                            <th>Author</th>
                            <th>Rating</th>
                        </tr>
                        {listOfBooks.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.title}</td>
                                    <td>{val.Author}</td>
                                    <td>{renderHighestRating(val._id)}</td>
                                </tr>
                            )
                        })}
                    </table>

                </div>


                </div>

    );
}

export default HomePage
