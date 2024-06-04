import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import "../../styles/HeaderStyles.css"

import { Nav, NavDropdown } from 'react-bootstrap';
import { Badge } from "antd";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();

    const categories = useCategory();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">
                            🛒 Ecommerce App
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <SearchInput />
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link ">
                                    Home
                                </NavLink>
                            </li>
                            <Nav className="categoryDrop ml-auto">
                                <NavDropdown title="Categories" id="categories-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/categories">
                                        All Categories
                                    </NavDropdown.Item>
                                    {categories?.map((c) => (
                                        <NavDropdown.Item key={c.slug} as={Link} to={`/category/${c.slug}`}>
                                            {c.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </Nav>
                            {!auth?.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <Nav className="userDrop ml-auto">
                                        <NavDropdown title={auth?.user?.name} id="basic-nav-dropdown">
                                            <NavDropdown.Item as={NavLink} to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>
                                                Dashboard
                                            </NavDropdown.Item>
                                            <NavDropdown.Item as={NavLink} to="/login" onClick={handleLogout}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </>
                            )}
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link">
                                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                                        Cart
                                    </Badge>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;


