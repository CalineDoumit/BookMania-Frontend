import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"
import {qPost} from "../../utils/HTTPHelpers";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import './rating.css';

document.title = 'Rate';

function LoginForm(props) {

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [genre, setGenre] = useState();
    const [rating, setRating] = useState();
    const [username, setUsername] = useState();

    const history=useHistory();



    useEffect(() => {
        setUsername(localStorage.getItem("username"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function validateTitle(e) {
        e.preventDefault();
        setTitle(e.target.value);
    }
    function validateAuthor(e) {
        e.preventDefault();
        setAuthor(e.target.value);
    }
    function validateGenre(e) {
        e.preventDefault();
        setGenre(e.target.value);
    }
    function validateRating(e) {
        e.preventDefault();
        setRating(e.target.value);
    }

    function ratingChanged(e){
        setRating(e);
    }

    function addRating(e){
        e.preventDefault();
        let data = {
            "title": title,
            "author": author,
            "genre": genre,
            "rating": rating,
            "username":username
        };
        qPost( "/ratings/create", data).then((res) => {
                history.push('/homepage');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className={'ratingCompletePage'}>
            <div className='container ratingPage'>
                <div className='ratingHeader'>
                    <h2 style={{color:"#C02D1A"}}>
                        Rate a book !
                    </h2>
                    <h5>
                       Please fill in this form
                    </h5>
                </div>
                <div className={'row'} >
                    <form className=' form '>
                        <div className={'form-group'}>
                            <label className={'d-block text-left'}>
                                Title
                            </label>
                            <input type="text"
                                   onBlur={validateTitle}
                            />
                        </div>
                        <div className={'form-group'}>
                            <label className={'d-block text-left'}>
                                Author
                            </label>
                            <input type="text"
                                   onBlur={validateAuthor}
                            />
                        </div>
                        <div className={'form-group'}>
                            <label className={'d-block text-left'}>
                                Genre
                            </label>
                            <input type="text"
                                   onBlur={validateGenre}
                            />
                        </div>
                        <div className={'form-group'}>
                            <label className={'d-block text-left'}>
                                Rating
                            </label>
                            <ReactStars
                                count={5}
                                value={0}
                                size={16}
                                onChange={ratingChanged}
                                activeColor="#ffd700"
                                style={{textAlign:'center'}}
                            />
                        </div>
                        <input type="submit" value="Add Rating"
                               onClick={addRating}
                        />

                    </form>
                </div>
            </div>

        </div>
    );
}

export default LoginForm
