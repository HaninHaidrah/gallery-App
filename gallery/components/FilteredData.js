import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Masonry from "react-masonry-css";
import SingleCard from "./SingleCard";

const FilteredData = ({ searchResult }) => {
  const [cardDetails, setCardDetails] = useState("");
  const [showSingleCard, setShowState] = useState(false);

  const handleZoom = (title, img, description) => {
    setShowState(true);
    setCardDetails({ title: title, img: img, description: description });
  };

  const handleCloseTheCard = () => {
    setShowState(!showSingleCard);
  };
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 3,
  };
  return (
    <div style={{ margin: "90px 50px" }}>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {searchResult.map((value,index) => {
          return (
            <Card
              key={index}
              style={{ width: "20.5em", border: "0" }}
              onClick={() => {
                handleZoom(
                  value.tags.title,
                  value.links.download,
                  value.alt_description
                );
              }}
            >
              <Card.Img
                variant="top"
                src={value.links.download}
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
                  }}
                >
                  {value.tags.title}
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
    </div>
  );
  //   }
};

export default FilteredData;
