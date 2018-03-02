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

    renderTableRows() {
        return this.state.rss.rss.channel.item.map(function(row) {
            return <TableRow data={row} />
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>link</th>
                            <th>description</th>
                            <th>pubDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        );
    }
}

export default Table;