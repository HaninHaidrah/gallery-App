import React, { useEffect, useState } from "react";
import { Form, Button, Modal, Carousel } from "react-bootstrap";
import axios from "axios";
import foodImg from "../components/assets/foodimg.json";
import artImg from "../components/assets/artimg.json";
import animalImg from "../components/assets/animal.json";
import Masonry from "react-masonry-css";
import Swal from "sweetalert2";
import SignInForm from "./SigninForm";
import Header from "./Header";
import SignUpForm from "./SignUpForm";
import RelatedCollection from "./RealtedCollection";
import IntrestForm from "./IntrestForm";
import UserHeader from "./UserHeader";
import FilteredData from "./FilteredData";

const HomePage = () => {
  const [signUpShow, setSignUpShow] = useState(false); // to show Model for sign Up
  const [signInShow, setSignInShow] = useState(false); // to show Model for signIn Up
  const [isLogged, setIsLoggedIn] = useState(false); //to Change the header to userHeader
  const [isListChosed, setListChosed] = useState(false); //
  const [intrestModel, setIntrestModel] = useState(false); // to show the intrest Model when SignUp
  const [searchResult, setResult] = useState([]); //to store search result, pass it- filteredData
  const [relatedCollectionState, setCollectionState] = useState(true); //to hide collections when search

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    const ListChosed = JSON.parse(localStorage.getItem("intrsetItems"));

    if (token) {
      setIsLoggedIn(true);
    }
    if (ListChosed) {
      setListChosed(true);
    }
  }, []);

  const breakpoints = {
    default: 7,
    1100: 4,
    700: 3,
  };

  // function to change the Header (logOut=>singup):
  const handleChangeHeader = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem("Token");
    // window.localStorage.removeItem("intrsetItems");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let query = e.target.query.value;
    let response = await axios.get(
      `https://api.unsplash.com/search/photos?&query=${query}&client_id=8EgaFISttmW0yVj6J575P1by4zWGTAbN-a2AYo6mXdI`
    );
    setResult(response.data.results);
    console.log(response.data.results);
    setCollectionState(false);
    console.log("search clicked");
  };
  return (
    <>
      {!isLogged ? (
        <>
          <Header setSignUpShow={setSignUpShow} setSignInShow={setSignInShow} />
          <Carousel
            variant="dark"
            controls="false"
            indicators="false"
            fade
            pause="false"
          >
            <Carousel.Item>
              <div className="carsForm">
                <br />
                <br />
                <h1>It is Time to SHOT</h1>
                <h2 style={{ color: "#FFC069" }}>New recipes</h2>

                <Masonry
                  breakpointCols={breakpoints}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {foodImg.map((img, i) => {
                    return (
                      <img
                        key={i}
                        className={`foodImg foodImg-${i}`}
                        style={{ width: "13rem", marginBottom: "20px" }}
                        src={img}
                        onClick={() => {
                          Swal.fire({
                            position: "center",
                            icon: "warning",
                            title: "sign up to discover More",
                            showConfirmButton: false,
                            timer: 2500,
                          });
                        }}
                      />
                    );
                  })}
                </Masonry>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carsForm">
                <br />
                <br />
                <h1>It is Time to SHOT</h1>
                <h2 style={{ color: "#57CC99" }}>Wild, Nature & Plants</h2>

                <Masonry
                  breakpointCols={breakpoints}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {animalImg.map((img, i) => {
                    return (
                      <img
                      key={i}
                        className={`foodImg foodImg-${i}`}
                        style={{ width: "13rem", marginBottom: "20px" }}
                        src={img}
                        onClick={() => {
                          Swal.fire({
                            position: "center",
                            icon: "warning",
                            title: "sign up to discover More",
                            showConfirmButton: false,
                            timer: 2500,
                          });
                        }}
                      />
                    );
                  })}
                </Masonry>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carsForm">
                <br />
                <br />
                <h1>It is Time to SHOT</h1>
                <h2 style={{ color: "#548CA8" }}>Books, News & Sport</h2>

                <Masonry
                  breakpointCols={breakpoints}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {artImg.map((img, i) => {
                    return (
                      <img
                      key={i}
                        className={`foodImg foodImg-${i}`}
                        style={{ width: "13rem", marginBottom: "20px" }}
                        src={img}
                        onClick={() => {
                          Swal.fire({
                            position: "center",
                            icon: "warning",
                            title: "sign up to discover More",
                            showConfirmButton: false,
                            timer: 2500,
                          });
                        }}
                      />
                    );
                  })}
                </Masonry>
              </div>
            </Carousel.Item>
          </Carousel>
        </>
      ) : (
        <>
          <UserHeader
            handleChangeHeader={handleChangeHeader}
            handleSearch={handleSearch}
            setCollectionState={setCollectionState}
          />
        </>
      )}

      {signUpShow && (
        <>
          <SignUpForm
            signUpShow={signUpShow}
            setSignUpShow={setSignUpShow}
            setIsLoggedIn={setIsLoggedIn}
            setIntrestModel={setIntrestModel}
          />
        </>
      )}

      {signInShow && (
        <>
          <SignInForm
            setSignInShow={setSignInShow}
            signInShow={signInShow}
            setIsLoggedIn={setIsLoggedIn}
          />
        </>
      )}

      {intrestModel && (
        <>
          <IntrestForm setIntrestModel={setIntrestModel} />
        </>
      )}

      {relatedCollectionState ? (
        <RelatedCollection />
      ) : (
        <FilteredData searchResult={searchResult} />
      )}
    </>
  );
};
export default HomePage;
