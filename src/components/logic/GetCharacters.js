import { useState, useEffect } from 'react'
import axios from "axios";
// TODO: Refactor the api request using the Airtable library

const GetCharacters = () => {
    const [characters, setCharacters] = useState([]);

    // function to call within useEffect
    const getCharacters = async () => {
        const results = await axios.get(
            "https://api.airtable.com/v0/appHDFZKYV8Q2b0Cc/Characters",
            {
            headers: { Authorization: `Bearer keyVQSivvC1Iz6S1u` },
            }
        );

        if (results.status === 200) {
            console.log(results.data.records)
            setCharacters(results.data.records);
        } else {
            console.log(results.status);
        }
    };
    
    // triggers when component renders
    useEffect(() => {
        getCharacters();
    }, []);

    return { characters }
}

export default GetCharacters
