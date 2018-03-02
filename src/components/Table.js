import React, { Component } from 'react';

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
                        <tr>
                            <td>title</td>
                            <td>link</td>
                            <td>description</td>
                            <td>pubdate</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>link</td>
                            <td>description</td>
                            <td>pubdate</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        );
    }
}

export default Table;