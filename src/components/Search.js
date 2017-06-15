// import required modules
import React from 'react';

// declare our stateless functional search component
export const SearchComponent = () => {
    return (
        <div>
            <h1>Github User Search</h1>
            <input type="text" placeholder="Start typing to begin searching..." />
        </div>
    )    
}

// export our component by default
export default SearchComponent;