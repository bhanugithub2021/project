import { NavLink } from "react-router-dom";
import Time from "../pages/Time";


const Navbar = () => {
    return (
        <div className="fix">

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a className="navbar-brand" href="/">Crud Operation</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="About/">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="Contact/">Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                    <Time />

                    <NavLink className="btn btn-outline-light" to="/users/add">Add User</NavLink>
                </div>
            </nav>

        </div>

    );
};

export default Navbar;