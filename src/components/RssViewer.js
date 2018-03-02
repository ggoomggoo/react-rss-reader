import React, { Component } from 'react';

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
    
    render() {
        return (
            <div>
                <UrlInput url={this.state.url}
                          onChangeHandler = {this.onChangeHandler.bind(this)} />
                <Table />
            </div>
        );
    }
}

export default RssViewer;