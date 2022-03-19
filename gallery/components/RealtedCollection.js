import React, { useState, useEffect } from "react";
import { Navbar, Button, Nav, Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Header.module.css";
// import Search from "./Search";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Masonry from "react-masonry-css";
import SingleCard from "./SingleCard";

const RelatedCollection = () => {
  const [items, setItems] = useState([]);
  const [cardDetails, setCardDetails] = useState("");
  const [showSingleCard, setShowState] = useState(false);

  const breakpoints = {
    default: 5,
    1100: 4,
    700: 3,
  };

  const handleZoom = (title, img, description) => {
    setShowState(true);
    setCardDetails({ title: title, img: img, description: description });
  };

  const handleCloseTheCard = () => {
    setShowState(!showSingleCard);
  };
  useEffect(() => {
    const intrestList = JSON.parse(localStorage.getItem("intrsetItems"));
    if (intrestList) {
      setItems(intrestList);
      console.log(intrestList);
    }
  }, []);
  return (
    <>
      <div style={{ margin: "90px 50px" }}>
        <>
          {/* {items.length === 0 && (
            <div class="d-flex justify-content-center">
              <div
                style={{ textAlign: "center", margin: "0px auto" }}
                class="spinner-grow text-danger"
                role="status"
              ></div>
            </div>
          )} */}

          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items.map((value,index) => {
              return (
                <Card
                key={index}
                  style={{ width: "17rem", border: "0" }}
                  onClick={() => {
                    handleZoom(
                      value.title,
                      value.preview_photos[0].urls.full,
                      value.user.first_name
                    );
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={value.preview_photos[0].urls.full}
                    style={{
                      borderRadius: "1.2em",
                      boxShadow:
                        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  />

                  <Card.Body style={{ padding: "0.3rem .1rem" }}>
                    <Card.Title
                      style={{
                        width: "15em",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "1.1em",
                        fontWeight: "bold",
                        height: "2.5em",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {value.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              );
            })}
          </Masonry>

          <SingleCard
            show={showSingleCard}
            content={cardDetails}
            handleCloseTheCard={handleCloseTheCard}
          /> 
        </>
      </div>
    </>
  );
};

export default RelatedCollection;
