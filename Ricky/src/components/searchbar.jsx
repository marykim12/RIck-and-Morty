import React, {useState} from 'react';


function SearchBar(){
const [search,setSearch] = useState('');

const handleSearch =(event) => {setSearch(event.target.value)}
 

const handleSubmit=(event) => {
    event.preventDefault();
    
};
    return(
        <div>
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400 flex-grow"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none">
                    Search
                </button>
            </form>
        </div>
    
    );

}
export default SearchBar;