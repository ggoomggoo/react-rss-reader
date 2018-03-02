import React, { Component } from 'react';

import TableRow from './TableRow'

import rss from '../json/rss.json'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rss: rss
        };
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>link</th>
                            <th>description</th>
                            <th>pubdate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                        <TableRow></TableRow>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        );
    }
}

export default Table;