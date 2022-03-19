import React, { Component } from "react";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import axios from "axios";

const SingleCard = ({ show, content, handleCloseTheCard }) => {
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

    console.log(reqBody, respone.data);

    localStorage.setItem("userFavPhotos", JSON.stringify(respone.data));
    // this.props.closemodal();
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

                  <button type="submit" className="button">
                    fav +
                  </button>
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
