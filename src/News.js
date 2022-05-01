import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";

function News() {
  const [data, setData] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "News data"), (snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data(snapshot)));
      }),
    []
  );

  return (
    <>
      <Container>
        {data.map((results) => (
          <Card key={results.Info_date}>
            <img src={results.Image} alt="" />
            <h3>{results.Info}</h3>
            <div className="date">{results.Info_date}</div>
            <a href={results.Links}>
              Read More
            </a>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default News;

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 350px;
  height: auto;
  padding: 15px;
  margin: 20px auto;
  background: #dbdbdb;

  img {
    width: 90%;
    margin: auto;
  }

  h3 {
    font-size: 15px;
    font-weight: 550;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: justify;
    margin: 8px auto;
    width: 85%;
  }

  .date {
    font-size: 11px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    text-align: right;
    margin: 12px 0;
  }

  a {
    text-decoration: none;
    color: black;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    padding: 5px;
    border: none;
    cursor: pointer;
    width: fit-content;
    margin: 10px auto 5px auto;
    background: #f50;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: 0.5s;
    &:hover {
      background: #ca5;
      color: white;
    }
  }
`;
