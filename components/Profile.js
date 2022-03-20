import React, { useEffect, useState } from "react";
import Header from "./UserHeader";
import styles from "../styles/Header.module.css";
import HomePage from "./HomePage";
import LikedPhotos from "./LikedPhotos";

const Profile = () => {
  const [isLogged, setIsLoggedIn] = useState(true); //to Change the header to userHeader
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  const handleChangeHeader = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem("Token");
    // window.localStorage.removeItem("intrsetItems");
  };

  return (
    <div>
      {isLogged ? (
        <>
          {" "}
          <Header handleChangeHeader={handleChangeHeader} />
          <section className={styles.section_profile}>
            <div className={styles.span0}></div>
            <div className={styles.span1}></div>
            <div className={styles.span2}></div>
            <div className={styles.span3}></div>
            <div className={styles.span4}></div>
            <div className={styles.span5}></div>
            <div className={styles.span6}></div>
          </section>
          <div className={styles.profile}>
            <div className={styles.info}>
              <img
                className="img"
                src="https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              />
              <h1>{user.username}</h1>
              <p>{user.Email}</p>
            </div>
            <LikedPhotos />
          </div>
          <div style={{ textAlign: "center" }}>
            <p>©SHOT 2021</p>
          </div>
        </>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default Profile;
