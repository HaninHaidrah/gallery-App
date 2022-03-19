import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = ({ setSignUpShow, setSignInShow }) => {
  return (
    <header>
      <Navbar className="header shadow-sm p-3 mb-5 bg-white rounded">
        <Navbar.Brand className="mr-lg-5" href="/">
          <Image
            src="/logo6.png"
            className={styles.logo}
            width={100}
            height={50}
          />
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll" className={styles.navBar}>
          <Nav.Link style={{ padding: "0 8px", color: "black" }} href="/">
            Home
          </Nav.Link>
          <Nav.Link
            style={{ padding: "0 15px 0 8px", color: "black" }}
            href="/about"
          >
            About
          </Nav.Link>
          <Button
            variant="danger"
            style={{
              borderRadius: "50px",
              fontWeight: "bold",
              margin: "0 5px",
            }}
            onClick={() => {
              setSignInShow(true);
              console.log("clicked")
            }}
          >
            Log In
          </Button>
          <Button
            variant="light"
            style={{
              borderRadius: "50px",
              fontWeight: "bold",
              margin: "0 5px",
            }}
            onClick={() => {
              setSignUpShow(true);
              console.log("clicked")
            }}
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
