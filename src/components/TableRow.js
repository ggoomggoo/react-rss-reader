import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td></td>
                    <td>{this.props.data.title}</td>
                    <td>
                        <a href={this.props.data.link} target="_blank">{this.props.data.link}</a>
                    </td>
                    <td>{this.props.data.description}</td>
                    <td>{this.props.data.pubDate}</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default TableRow;