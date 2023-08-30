import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigationbar.css";
import { Link, NavLink } from "react-router-dom";
import { search } from "../../Functions/functions";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../Logo/Main.png"


const Navigationbar = () => {
  const [input,setInput] = useState("");
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => {
    return state.all
  })
  return (
      <Navbar sticky="top" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href={Main}>
            <img id="main_logo" src={Main} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
              <NavLink to="/home">
                Home
              </NavLink>
                </Nav.Link>
                <Nav.Link href="#">

                <NavLink to="/trending">
                Trending
                </NavLink>
                
                </Nav.Link>

              <Nav.Link>
              <NavLink to="/popular">
                Popular
              </NavLink>
                </Nav.Link>

              <Nav.Link href="#">
                <NavLink to="/upcoming">
                Upcoming
                </NavLink>
                </Nav.Link>
              <Nav.Link href="#">
                <NavLink to="/top-rated">
                Top-Rated
                </NavLink>
                </Nav.Link>
              <Nav.Link href="#">
                <NavLink to="/comedy">
                Comedy
                </NavLink>
                </Nav.Link>
              <Nav.Link href="#">
                <NavLink to="/action">
                Action
                </NavLink>
                </Nav.Link>
              <Nav.Link href="#">
                <NavLink to="/horror">
                Horror
                </NavLink>
                </Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
              onChange={(e) => {
                setInput(e.target.value)
              }}
                value={input}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Link to="/search">
              <Button onClick={() => {
                search(dispatch,input,allMovies)
              }} variant="outline-success">Search</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navigationbar;
