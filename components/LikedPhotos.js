import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
// import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Editcommentmodal from "./CommentModel";
// import logo from "../assets/logo.png";

// import Editcommentmodal from "./Editcommentmodal";
const LikedPhotos = () => {
  const [likedPhotos, setLiked] = useState([]);
  const [commentState, setShowComment] = useState(false); // to show the comment Model
  const [obj, setItemObject] = useState({});

  useEffect(() => {
    setLiked([JSON.parse(window.localStorage.getItem("userFavPhotos"))]);
  }, []);
  const breakpoints = {
    default: 5,
    1100: 4,
    700: 3,
  };

  // function to Edit the comment or Note
  const editComment = (item) => {
    // 1. change the state to ba active:
    setShowComment(true);
    // 2. send the item to comment model:
    setItemObject(item);
  };

  const closemodal = () => {
    setShowComment(false);
  };

  const deleteFavorite = async (item) => {
    console.log(item);
    //   const reqBody = { title: item.title };
    let res = await axios.delete(
      `https://shot-app.herokuapp.com/api/v2/liked/${item.id}`
    );
    console.log(res, "deleted");
    localStorage.setItem("userFavPhotos", JSON.stringify(res.data));
    setLiked([JSON.parse(window.localStorage.getItem("userFavPhotos"))]);
  };

  return (
    <div
      style={{
        margin: "0 100px 50px",
        textAlign: "center",
        position: "relative",
        bottom: "2em",
      }}
    >
      <Row xs={1} md={5} className="g-4">
        {likedPhotos.map((item, idx) => {
          return (
            <div key={idx}>
              <Col>
                <Card style={{ width: "12rem", border: "0" }}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{
                      borderRadius: "1.2em",
                      boxShadow:
                        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      height: "17em",
                    }}
                    onClick={() => {
                      editComment(item);
                    }}
                  />

                  <Card.Body style={{ padding: "0.3rem .1rem" }}>
                    <button
                      variant="light"
                      type="submit"
                      onClick={() => {
                        editComment(item);
                      }}
                      style={{
                        backgroundColor: "#ffffff00",
                        border: "0",
                        color: "gray",
                        marginLeft: "7em",
                        position: "absolute",
                        left: "5%",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      variant="light"
                      type="submit"
                      onClick={() => {
                        deleteFavorite(item);
                      }}
                      style={{
                        backgroundColor: "#ffffff00",
                        border: "0",
                        color: "#dc3545",
                        position: "absolute",
                        left: "8%"
                      }}
                    >
                      Delete
                    </button>
                    <Card.Title
                      style={{
                        width: "15em",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "1.1em",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      <br></br>
                      <br></br>
                      {item.comment}
                    </Card.Title>
                    <Card.Text>
                      <p>Your Note: {item.comment}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          );
        })}
      </Row>

      {commentState && (
        <Editcommentmodal
          showCommentEdit={commentState}
          closemodal={closemodal}
          obj={obj}
          updatecomment={editComment}
        />
      )}
    </div>
  );
};

export default LikedPhotos;
