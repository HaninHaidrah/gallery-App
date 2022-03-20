import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const SignUpForm = ({
  signUpShow,
  setIntrestModel,
  setIsLoggedIn,
  setSignUpShow,
}) => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const reqBody = {
      username: e.target.userName.value,
      password: e.target.password.value,
      Email: e.target.email.value,
    };

    axios
      .post("https://shot-app.herokuapp.com/signup", reqBody)
      .then((foundUser) => {
        if (foundUser.data.err) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: foundUser.data.message,
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signed up successfuly",
            showConfirmButton: false,
            timer: 2500,
          });
          console.log(foundUser.data.user);

          // 1.To Save in local and then use it and save user Data to use them with profile:
          window.localStorage.setItem(
            "Token",
            JSON.stringify(foundUser.data.user.token)
          );
          window.localStorage.setItem(
            "user",
            JSON.stringify(foundUser.data.user)
          );

          // 2.change userState
          setIsLoggedIn(true);

          // 3.Show the intrest Model
          setIntrestModel(true);

          //4.close the Model
          setSignUpShow(false);
        }
      });
  };
  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={signUpShow}
      >
        <Modal.Header
          closeButton
          onClick={() => {
            setSignUpShow(false);
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
            <h2 style={{ fontWeight: "700" ,color:"#62c6bf"}}>
             Create Your Account  
              <img src={"/logo61.png"} style={{ width: "12rem" }} />
            </h2>
          </Modal.Title>
          <Modal.Body>
            <Form className="loginForm" onSubmit={handleSignUp}>
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
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  style={{ height: "3em", marginBottom: "30px" }}
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
                variant="primary"
                style={{
                  width: "15em",
                  borderRadius: "5em",
                  fontSize: "20px",
                }}
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default SignUpForm;
