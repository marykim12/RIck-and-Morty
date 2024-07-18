
import React, {useEffect,useState} from "react";

function Characters() {
    
        const [characters, setCharacters] = useState([]);
        const fetchCharacters = async ()=>{
            try{
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json();
            setCharacters(data.results);
            }
            catch(error) {
                console.error('error fetching characters:', error);
            }
    
            };
    
    useEffect (()=>{
        fetchCharacters()
    },[]);
    
    
    return (
    
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul>
                {characters.map((Characters) => (
                    <li key={Characters.id}>
                        <img src={Characters.image} alt={Characters.name} />
                    <div>
                        <strong>{Characters.name}</strong>
                        <p>Status: {Characters.status}</p>
                        <p>Genger: {Characters.gender}</p>
                        <p>Species: {Characters.species}</p>
                        <p>Type: {Characters.type}</p>
                        <p>location:{Characters.location.name}</p>


                    </div>
                    </li>
                ))}
            </ul>
        
        </div>
        );
        
    }

    
export default Characters;