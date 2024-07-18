import React, { useEffect, useState } from 'react';

function CharactersList() {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Rick and Morty Characters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {characters.map((character) => (
                    <div key={character.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={character.image} alt={character.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{character.name}</h2>
                            <p className="text-gray-700"><span className="font-bold">Status:</span> {character.status}</p>
                            <p className="text-gray-700"><span className="font-bold">Species:</span> {character.species}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CharactersList;
