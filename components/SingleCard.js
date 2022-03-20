import React, { Component, useEffect, useState } from "react";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const SingleCard = ({ show, content, handleCloseTheCard }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser([JSON.parse(window.localStorage.getItem("user"))]);
  }, []);
  // function to add to fav
  const addToFavorite = async (e) => {
    e.preventDefault();
    const reqBody = {
      title: content.title,
      image: content.img,
      description: content.description,
      comment: e.target.comment.value,
    };
    // console.log(e.target.comment.value);
    let respone = await axios.post(
      `https://galleria-1.herokuapp.com/api/v2/liked`,
      reqBody
    );

    // console.log(reqBody, respone.data);
    // let respone2 = await axios.get(
    //   `https://galleria-1.herokuapp.com/api/v2/liked`
    // );

    localStorage.setItem("userFavPhotos", JSON.stringify(respone.data));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "The Photo added succefully check your profile",
      showConfirmButton: false,
      timer: 2500,
    });

    handleCloseTheCard();
  };

  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <Modal.Header
        closeButton
        onClick={handleCloseTheCard}
        style={{
          border: "0px",
        }}
      ></Modal.Header>

      <div>
        <Row className="row-grid align-items">
          <Col md="6">
            <img
              width="100%"
              src={content.img}
              style={{ padding: "10px 20px 30px", height: "600px" }}
            />
          </Col>

          <Col md="6" padding="10px">
            <div className="postCard">
              <h2>{content.title}</h2>
              <Modal.Body>
                <p> {content.description} </p>
                <br />
                {/* <Form> */}
                <Form onSubmit={addToFavorite}>
                  <Form.Control
                    type="text"
                    name="comment"
                    placeholder="Add Your Note !!"
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "4em",
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      background: "transparent",
                      border: "transparent",
                      width: "200px",
                      height: "200px",
                    }}
                  >
                    <svg
                      width="500"
                      height="500"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      style={{
                        position: "absolute",
                        width: "100%",
                        top: "-21%",
                        left: "-98%",
                      }}
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                    </svg>{" "}
                  </button>
                  <h6
                    style={{
                      position: "absolute",
                      top: "-21%",
                      left: "-89%",
                      color: "darkred",
                    }}
                  >
                    {" "}
                    Add To Favourite
                  </h6>
                </Form>
              </Modal.Body>
            </div>
          </Col>
        </Row>
      </div>
    </Modal>
  );
  //   }
};
export default SingleCard;
