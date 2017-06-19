// import required modules
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// our renderer for each result
import ResultRender from './result/ResultRender';

// we'll need our search actions
import * as searchActions from '../redux/actions/search';

// declare our results component
export class ResultsComponent extends React.Component {
    render() {
        const results = this.props.response.data.items || [];
        return (                 
            <ul className="list pl0 mt5 measure center">
                { 
                    results.length > 0                    
                    ? results.map(result => <ResultRender key={result.id} {...result} />) 
                    : <li>{ this.props.searching ? 'Searching...' : 'No results to show' }</li>
                }
            </ul>
        );
    }
}    

// declare the types of each of our state properties
ResultsComponent.propTypes = {
  response: PropTypes.object.isRequired
};

// we'll map the values we need from our redux state
const mapStateToProps = state => ({ 
    response: state.response,
    searching: state.searching
});

// we'll map the actions we'll be dispatching to
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(searchActions, dispatch)
});

// finally, we'll export our component, connecting it to our redux state
export default connect(
  mapStateToProps,
  null
)(ResultsComponent);