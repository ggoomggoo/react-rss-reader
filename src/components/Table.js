import React, { Component } from 'react';

class Table extends Component {
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