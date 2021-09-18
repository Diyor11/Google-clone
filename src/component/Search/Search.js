import React, { useState } from 'react';
import google from '../media/g.png';
import './search.scss';
import { useStateValue } from '../../worker/StateProvider';
import { ActionTypes } from '../../worker/reducer';
import useGoogleSearch from './useGoogleSearch';

const Search = () => {
    const [{term}, dispatch] = useStateValue();

    const [times, setTimes] = useState(false);
    const [input, setInput] = useState(term);

    const { data } = useGoogleSearch(term);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: ActionTypes.SET_SEARCH_TERMS,
            term: input
        })
    }

    return (
        <div id='search-page'>
            <nav>
                <div className='left-side'>
                    <div className='img-wrap'>
                        <img src={google} alt='google'/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={input} 
                            value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                            if(input === ''){
                                setTimes(false)
                            }
                            else{setTimes(true)}
                        }}/>
                        <i className={times ? 'fas fa-times':''}
                        onClick={() => {
                            setInput('');
                            setTimes(false)
                        }} ></i>
                        <i className="fas fa-keyboard dl"></i>
                        <i className='fas fa-search dl'></i>
                        <i className="fas fa-microphone dl"></i>
                    </form>
                </div>
                <div className='settings'>
                    <i className='fas fa-th'></i>
                    <i className="fas fa-cog"></i>
                    <i className='fas fa-user-alt'></i>
                </div>
            </nav>
            <div className='filter'>
                <div className='box-wrapper'>
                    <div className='box'>
                        <i className='fas fa-search'></i>
                        <p>All</p>
                    </div>
                    <div className='box'>
                        <i className='fas fa-chart-pie'></i>
                        <p>Finance</p>
                    </div>
                    <div className='box'>
                        <i className='far fa-image'></i>
                        <p>Images</p>
                    </div>
                    <div className='box'>
                        <i className='fas fa-film'></i>
                        <p>Videos</p>
                    </div>
                    <div className='box'>
                        <i className='far fa-newspaper'></i>
                        <p>News</p>
                    </div>
                    <div className='box'>
                        <i className="fas fa-ellipsis-v"></i>
                        <p>More</p>
                    </div>
                </div>
            </div>
            <section className='result'>
                <div className='statistic'>
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results (
                        {data?.searchInformation.formattedSearchTime} seconds) for{" "}
                        <strong>{term}</strong>
                    </p>
                </div>
                    {data?.items.map((item) => (
                        <div className="searchPage__result">
                            <a className="searchPage__resultLink" href={item.link} >
                                {item.pagemap?.cse_image?.length > 0 &&
                                item.pagemap?.cse_image[0]?.src && (
                                    <img
                                    className="searchPage__resultImage"
                                    src={
                                        item.pagemap?.cse_image?.length > 0 &&
                                        item.pagemap?.cse_image[0]?.src
                                    }
                                    alt=""
                                    />
                                )}
                                {item.displayLink} ▾
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>

                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                {data && <div className='pagination'>
                    <div className='top-row'>
                        <img src={google} alt='icon' /> 
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className='down-row'>
                        <div className='numbers'>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                            <p>10</p>
                        </div>
                        <span>Next</span>
                    </div>
                </div>}
            </section>
        </div>
    )
}

export default Search;
