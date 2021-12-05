import React from "react";

const Navigation = () => {
    return(
        <nav className="container my-3 navbar navbar-light bg-secondary">
  
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="!#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <b> ALL TYPES </b>
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="!#">Iphone X</a></li>
                        <li><a className="dropdown-item" href="!#">Iphone 11</a></li>
                        <li><a className="dropdown-item" href="!#">Iphone 12</a></li>
                    </ul>
                </div>

                <div>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="!#">Popular Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="!#">Low Price</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="!#">High Price</a>
                        </li>
                    </ul>
                </div>

                <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="!#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <b> PRICE </b>
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="!#">Rp300.000</a></li>
                            <li><a className="dropdown-item" href="!#">Rp600.000</a></li>
                            <li><a className="dropdown-item" href="!#">Rp900.000</a></li>
                        </ul>
                </div>
        </nav>
    );
}

export default Navigation;