import {useState, useEffect} from "react";
import axios from 'axios';
const API_KEY = "AIzaSyAFjOM6FuYQElINKCSITwvWmj0Mw5oA0ik";

const CONTEXT_KEY = "344518b235096fb90";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            });
        };

        fetchData();
    }, [term])
    
    return { data };

};

export default useGoogleSearch;
