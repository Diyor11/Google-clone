import React, { useState } from 'react';
import './home.scss';
import google from '../media/g.png'
import { useHistory } from 'react-router';
import { useStateValue } from '../../worker/StateProvider';
import { ActionTypes } from '../../worker/reducer';

const Home = () => {

    const [input, setInput] = useState('')
    const history = useHistory();
    const [{}, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: ActionTypes.SET_SEARCH_TERMS,
            term: input
        })

        if(input){
            history.push('/search');
            setInput('')
        }
    }

    return (
        <header id='header'> 
            <nav>
                <ul>
                    <li>Gmail</li>
                    <li>Images</li>
                </ul>
                <i className="fas fa-th"></i>
                <i className="fas fa-user-alt"></i>
            </nav>
            <div className='box'>
                <div className='image'>
                    <img src={google} alt='google' />
                </div>
                <div className='search-bar'>
                    <form onSubmit={handleSubmit}>
                        <i className='fas fa-search'></i>
                        <input type='text' placeholder='Search Google or type a URL' value={input} onChange={e => setInput(e.target.value)} />
                        <i className="fas fa-microphone"></i>
                    </form>
                </div>
                <div className='icons'>
                    <div className='icon-row'>
                        <span className='icon-wrap'>
                            <i className="fab fa-youtube"></i>
                            <p>You Tube</p>
                        </span>
                        <span className='icon-wrap'>
                            <i className="fab fa-facebook"></i>
                            <p>Facebook</p>
                        </span>
                        <span className='icon-wrap'>
                            <i className="fab fa-twitter"></i>
                            <p>Twitter</p>
                        </span>
                    </div>
                    <div className='icon-row'>
                    <span className='icon-wrap'>
                            <i className="fab fa-instagram"></i>
                            <p>Instagram</p>
                        </span>
                        <span className='icon-wrap'>
                            <i className="fab fa-tiktok"></i>
                            <p>Tik Tok</p>
                        </span>
                        <span className='icon-wrap'>
                            <i className="fas fa-plus"></i>
                            <p>Add Shortcut</p>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home
