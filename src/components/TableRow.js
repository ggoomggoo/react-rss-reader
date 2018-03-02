import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>title</td>
                    <td>link</td>
                    <td>description</td>
                    <td>pubdate</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default TableRow;