import Link from "next/link";
import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import styles from "../styles/Header.module.css";

const UserHeader = ({ handleChangeHeader, handleSearch,setCollectionState }) => {

  return (
    <header>
      <Navbar className="header shadow-sm p-3 mb-5 bg-white rounded">
        <Navbar.Brand className="mr-lg-5" href="/">
          <img src="/logo61.png" className={styles.logo} />
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll" className={styles.userNav}>
          <Nav.Link
            style={{
              padding: "0 8px",
             color: "#6a6668",
              fontSize: "1.2em",
              fontWeight: "600",

            }}
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{
              padding: "0 15px 0 8px",
              color: "#6a6668",
              fontSize: "1.2em",
              fontWeight: "600",
            }}
            href="/profile"
          >
            Profile
          </Nav.Link>
          <form onSubmit={handleSearch}>
            <input
              name="query"
              id="form1"
              className={styles.search}
              placeholder="Search"
            />
            <button type="submit" className="btn searchBtn">
                  {" "}
                  <i className="fas fa-search"></i>
            </button>
          </form>

          <Button
            variant="danger"
            style={{
              borderRadius: "50px",
              fontWeight: "bold",
              margin: "0px 8em",
              background:"#62c6bf"
            }}
            onClick={handleChangeHeader}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Button
        variant="light"
        style={{
          margin: "0 5px",
        }}
        className={styles.setting}
          // onClick={()=>{setCollectionState(false),console.log("search clicked")}}
      >
        <i className="fas fa-sliders-h"></i>
      </Button>
    </header>
  );
};

export default UserHeader;
