import React, { Component } from 'react';

class UrlInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.url}
                       onChange={this.props.onChangeHandler} />
                <button type="button"
                        onClick={this.props.onClickHandler}>Get</button>
            </div>
        );
    }
}

export default UrlInput;