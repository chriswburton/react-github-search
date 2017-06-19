// import required modules
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// we'll need our search actions
import * as searchActions from '../redux/actions/search';

// declare our search component
class SearchComponent extends React.Component {
    // set our initial component state using property initialisation syntax
    state = {
        username: ''
    }
    

    // we'll need a function to handle changes on our search input
    handleChange = inputEvent => {
        // grab the current value
        const username = inputEvent.target.value;
        // update our local state
        this.setState({username});
        // dispatch our search action - ONLY if we have a valid search string
        if (username.trim().length > 0) {
            this.props.actions.searchUsers(username);
        }
    }

    render() {
        return (
            <form className="pl0 mt5 measure center black-80">
                <h1>Github User Search</h1>
                <div className="measure">
                    <label htmlFor="name" className="f6 b db mb2">Please use the input below to search users on Github <span className="normal black-60"></span></label>
                    <input id="name" 
                        className="input-reset ba b--black-20 pa2 mb2 db w-100" 
                        type="text" 
                        placeholder="Start typing to begin searching..." 
                        value={this.state.username}
                        onChange={this.handleChange}
                        aria-describedby="name-desc" />
                    <small id="name-desc" className="f6 black-60 db mb2">Your search may take a few seconds to complete.</small>
                </div>
            </form>
        )
    }    
}

// declare the types of each of our state properties
SearchComponent.propTypes = {
  query: PropTypes.string
}

// we'll map the values we need from our redux state
const mapStateToProps = state => ({
    query: state.query
});

// we'll map the actions we'll be dispatching to
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(searchActions, dispatch)
})

// finally, we'll export our component, connecting it to our redux state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)