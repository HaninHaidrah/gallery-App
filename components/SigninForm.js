import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import base64 from "base-64";
import jwt from "jsonwebtoken";
import superagent from "superagent";

const SignInForm = ({ signInShow, setSignInShow, setIsLoggedIn }) => {
  // functions for signin :

  const handlelogIn = (e) => {
    e.preventDefault();
    const reqBody = {
      username: e.target.userName.value,
      password: e.target.password.value,
    };
    superagent
      .post("https://shot-app.herokuapp.com/signin")
      .set(
        "authorization",
        `Basic ${base64.encode(`${reqBody.username}:${reqBody.password}`)}`
      )
      .then((userInfo) => {
        if (userInfo) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "you logged in ",
            showConfirmButton: false,
            timer: 2500,
          });
        }
        // 1.To Save in local and then use it
        window.localStorage.setItem(
          "Token",
          JSON.stringify(userInfo.body.token)
        );
        console.log(userInfo.body.token);
      });

    // 2.change userState
    setIsLoggedIn(true);

    //3.close the Model
    setSignInShow(false);
  };
 
  //   // To Show the model when the user scroll:

  //   useEffect(() => {
  //     window.addEventListener("scroll", (event) => {
  //       const scrollable =
  //         document.documentElement.scrollHeight - window.innerHeight;
  //       const scrolled = window.scrollY;
  //       if (Math.floor(scrolled) === scrollable) {
  //         handleShowModel();
  //       }
  //     });
  //   }, []);
  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={signInShow}
      >
        <Modal.Header
          closeButton
          onClick={() => {
            setSignInShow(false);
          }}
          style={{
            border: "0px",
          }}
        ></Modal.Header>
        <div
          style={{
            padding: "0px 70px 60px",
          }}
        >
          <Modal.Title
            style={{
              textAlign: "center",
              padding: "0 0 20px",
            }}
          >
            <img src="/logo61.png" style={{ width: "4em" }} />
            <br />
            <h2 style={{ fontWeight: "700" }}>Welcome To Explorest</h2>
          </Modal.Title>
          <Modal.Body>
            {/* <Form className="loginForm"> */}
            <Form className="loginForm" onSubmit={handlelogIn}>
              <Form.Group className="mb-3" controlId="formBasicuserName">
                <Form.Control
                  type="text"
                  name="userName"
                  placeholder="Enter your User Name"
                  style={{ height: "3em" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  style={{ height: "3em", marginBottom: "30px" }}
                />
              </Form.Group>
              <Button
                variant="danger"
                type="submit"
                style={{
                  width: "15em",
                  borderRadius: "5em",
                  fontSize: "20px",
                }}
              >
                Log in
              </Button>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default SignInForm;
