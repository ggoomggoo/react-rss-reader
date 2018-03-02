import React, { Component } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';

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
                const data = response.data
                debugger;
                xml2js.parseString(data, function(error, result) {
                    debugger;
                }.bind(this));
        }.bind(this));
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