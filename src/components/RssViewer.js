import React, { Component } from 'react';
import axios from 'axios';

import UrlInput from "./UrlInput";
import Table from './Table'

class RssViewer extends Component {
    state = {
        url: ''
    }

    onChangeHandler(event) {
        this.setState({
            url: event.target.value
        });
    }

    onClickHandler(event) {
        const url = this.state.url;

        axios.get(url)
            .then(function(response) {
                debugger;

        });
        debugger;
    }
    
    render() {
        return (
            <div>
                <UrlInput url={this.state.url}
                          onChangeHandler = {this.onChangeHandler.bind(this)}
                          onClickHandler = {this.onClickHandler.bind(this)} />
                <Table />
            </div>
        );
    }
}

export default RssViewer;