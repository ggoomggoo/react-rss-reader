import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.data.title}</td>
                    <td>{this.props.data.link}</td>
                    <td>{this.props.data.description}</td>
                    <td>{this.props.data.pubDate}</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default TableRow;