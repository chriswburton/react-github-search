// import react for JSX scope
import React from 'react';

// we'll use a stateless functional component to render each result 
export default props => (
    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img className="w2 h2 w3-ns h3-ns br-100" src={props.avatar_url} />
        <div className="pl3 flex-auto">
            <span className="f6 db black-70">{props.login}</span>
            <span className="f6 db black-70">{props.login}'s score on Github is ~{Math.floor(props.score)}</span>
        </div>
        <div>
            <a href={props.html_url} className="f6 link blue hover-dark-gray" target="_blank">Visit Profile</a>
        </div>
    </li>
);