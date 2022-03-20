import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Header.module.css";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

// import axios from "axios";
// import { withRouter } from "react-router-dom";

const IntrestForm = ({ setIntrestModel }) => {
  const [chosenArray, setArray] = useState([]);

  const handleCollection = (e) => {
    e.preventDefault();
    let chosen = [];
    for (let i = 1; i < 11; i++) {
      let query_id = document.getElementById(`${i}`);
      if (query_id.checked) {
        chosen.push(query_id.name);
      }
      
    }
    console.log(chosen,"chossssssssssssen");
    console.log("query_id");
    let list=[]

    for(let i=0;i<chosen.length;i++){
      axios
      .get(`https://api.unsplash.com/search/collections?client_id=8EgaFISttmW0yVj6J575P1by4zWGTAbN-a2AYo6mXdI&query=${chosen[i]}`)
      .then((chosedItem) => {
        list.push(chosedItem.data.results);
        // console.log(chosedItem.data.results);
        console.log("done");

        console.log(list,"list")
        setArray(list)
           window.localStorage.setItem(
            "intrsetItems",
            JSON.stringify(list)
          );
      });

      // console.log(list,"list")
      // setArray(list)
      //    window.localStorage.setItem(
      //     "intrsetItems",
      //     JSON.stringify(list)
      //   );

    }
    // axios
    //   .get(
    //     `https://api.unsplash.com/collections?:id=${chosen[0]}&client_id=8EgaFISttmW0yVj6J575P1by4zWGTAbN-a2AYo6mXdI`
    //   )
    //   .then((chosedItem) => {
    //     setArray(chosedItem.data);
    //     console.log(chosedItem.data);
    //     window.localStorage.setItem(
    //       "intrsetItems",
    //       JSON.stringify(chosedItem.data)
    //     );
    //   });
    setIntrestModel(false);
  };

  return (
    <div className={styles.intrests}>
      <h1>Welcome to Explorest</h1>
      <h3>Please pick one or more field </h3>
      <Form onSubmit={handleCollection}>
        <div key={`inline-checkbox`} className="mb-3">
          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="Books"
              name="books"
              type={"checkbox"}
              value="boks"
              id={`1`}
              className={styles.intrest_box_check}
            />{" "}
            <img src="https://miro.medium.com/max/1000/1*UWA-fJfH7AkORThsjOBNFQ@2x.jpeg" />
          </div>

          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="News"
              name="covid"
              type={"checkbox"}
              id={`2`}
              className={styles.intrest_box_check}
            />
            <img src="https://www.thescottishfarmer.co.uk/resources/images/11385326.jpg?display=1&htype=0&type=responsive-gallery" />
          </div>
          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="health"
              name="health"
              type={"checkbox"}
              id={`3`}
              className={styles.intrest_box_check}
            />
            <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" />
          </div>
          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="Animals"
              name="Animal"
              type={"checkbox"}
              id={`4`}
              className={styles.intrest_box_check}
            />
            <img src="https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/ethics-of-photographing-wildlife.jpg" />
          </div>
          <div className={styles.intrest_box}>
            {" "}
            <Form.Check
              inline
              label="Makeup"
              name="makeup"
              type={"checkbox"}
              id={`5`}
              className={styles.intrest_box_check}
            />
            <img src="https://st.depositphotos.com/1001855/3699/i/950/depositphotos_36991515-stock-photo-makeup-and-cosmetics-set.jpg" />
          </div>
          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="Sport"
              name="Sport"
              type={"checkbox"}
              id={`6`}
              className={styles.intrest_box_check}
            />
            <img src="https://track2traininginstitute.files.wordpress.com/2020/06/sports.jpg" />
          </div>
          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="Memes"
              name="memes"
              type={"checkbox"}
              id={`7`}
              className={styles.intrest_box_check}
            />
            <img src="https://i.pinimg.com/originals/5a/ea/dd/5aeadd53ab6157ab11a74a4b5ba26b9d.jpg" />
          </div>
          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="Arts"
              name="art"
              type={"checkbox"}
              id={`8`}
              className={styles.intrest_box_check}
            />
            <img src="https://thedavidsnider.com/wp-content/uploads/2021/01/istockphoto-577949148-612x612-1.jpg" />
          </div>
          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="Trees"
              name="tree"
              type={"checkbox"}
              id={`9`}
              className={styles.intrest_box_check}
            />
            <img src="https://images.unsplash.com/photo-1462143338528-eca9936a4d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjIyNjB8MHwxfHNlYXJjaHwzfHx0cmVlc3xlbnwwfHx8fDE2MzIyNjUxMDk&ixlib=rb-1.2.1&q=80&w=200" />
          </div>
          <div className={styles.intrest_box}>
            <Form.Check
              inline
              label="Colors"
              name="color"
              type={"checkbox"}
              id={`10`}
              className={styles.intrest_box_check}
            />
            <img src="https://images.ctfassets.net/cnu0m8re1exe/7bvBF6E4WXVLLIsH88lXcC/5a3b7483a82fb30248e7d1c7856be6ec/20-things-color.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" />
          </div>
        </div>
        <Button
          variant="danger"
          type="submit"
          style={{
            width: "7em",
            borderRadius: "5em",
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "2.5em",
          }}
        >
          Save{" "}
        </Button>
      </Form>
    </div>
  );
};
export default IntrestForm;
