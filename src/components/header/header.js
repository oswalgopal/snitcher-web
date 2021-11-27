import React from 'react';
import './headerStyle.css';
const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between p-2">
            <a className="navbar-brand">Snitcher</a>
            <form className="form-inline d-flex flex-row">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Header;

// <nav className={'header navbar-dark bg-dark justify-content-between'}>
//     <h3 className="navbar-brand">Snitcher</h3>
//     <form className="form-inline">
//         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
// </nav>
