import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = ({ setSignUpShow, setSignInShow }) => {
  return (
    <header>
      <Navbar className="header shadow-sm p-3 mb-5  rounded">
        <Navbar.Brand className="mr-lg-5" href="/">
          <Image
            src="/logo6.png"
            className={styles.logo}
            width={200}
            height={100}
          />
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll" className={styles.navBar}>
          <Nav.Link style={{ padding: "0 8px", color: "#6a6668" }} href="/">
            Home
          </Nav.Link>
          <Button
            variant="danger"
            style={{
              borderRadius: "50px",
              fontWeight: "bold",
              margin: "0 5px",
              background: "#E60965",
            }}
            onClick={() => {
              setSignInShow(true);
              console.log("clicked");
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
              color: "#6a6668"
            }}
            onClick={() => {
              setSignUpShow(true);
              console.log("clicked");
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
