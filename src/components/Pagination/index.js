import React, {Component} from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <ul className="pagination">
                        <li className="active-pg"><a href="!#">1</a></li>
                        <li><a href="!#">2</a></li>
                        <li><a href="!#">3</a></li>
                        <li><a href="!#">4</a></li>
                        <li><a href="!#">5</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Pagination;
