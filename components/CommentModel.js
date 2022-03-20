"use strict";
import React, { useState } from "react";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import axios from "axios";

const Editcommentmodal = ({ obj, showCommentEdit, closemodal }) => {
  const [newUpdeate, setNewUpdate] = useState({});


  const editComment = async (e) => {
    e.preventDefault();

    const reqBody = {
      title: obj.title,
      image: obj.img,
      description: obj.description,
      comment: e.target.newComment.value,
    };

    let respone = await axios.put(
      `https://shot-app.herokuapp.com/api/v2/liked/${obj.id}`,
      reqBody
    );

    console.log(reqBody, respone.data);
    localStorage.setItem("userFavPhotos", JSON.stringify(respone.data));
    setNewUpdate(respone.data);
    closemodal();
  };

  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showCommentEdit}
    >
      <Modal.Header
        closeButton
        onClick={closemodal}
        style={{
          border: "0px",
        }}
      ></Modal.Header>

      <Row className="row-grid align-items">
        <Col md="6">
          <img
            width="100%"
            src={newUpdeate.image}
            style={{ padding: "10px 20px 30px", height: "600px" }}
          />
        </Col>
        <Col md="6" padding="20px">
          <div className="postCard">
            <h2>{obj.title}</h2>
            <Modal.Body>
              <p
                style={{
                  height: "310px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  marginBottom: "0",
                }}
              >
                {" "}
                {obj.description}
              </p>
              <br />

              <h5
                style={{
                  padding: "20px",
                  backgroundColor: "#eae9e9",
                  marginBottom: "20px",
                  borderRadius: "2em",
                }}
              >
                {newUpdeate.comment}
              </h5>

              <Form onSubmit={editComment}>
                <Form.Control
                  type="text"
                  name="newComment"
                  defaultValue="Edit Your Note!"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "4em",
                  }}
                />

                <button type="submit" className="button">
                  <i className="fas fa-pen" style={{ fontSize: ".7em" }}></i>
                </button>
              </Form>
            </Modal.Body>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};
export default Editcommentmodal;
