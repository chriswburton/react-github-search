// import required modules
import React from 'react';

import Search from './components/Search';
import Results from './components/Results';

// export our app component
export default class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Results />
            </div>
        )
    }
}