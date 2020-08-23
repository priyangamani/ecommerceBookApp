import React, { useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getBookItems } from '../actions/actions'
import styled from "styled-components";

import { Button } from "./Button";


export default function HomeScreen() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.bookData.data);


  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  const list = data && data.items;

  return (
    <Container>
      <Wrapper>
        {list && list.map((item, i) => (
          <Column key={item.kind}>
            <H4>{item.volumeInfo.title}</H4>
            <IMG src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.name} />
            <Link    to={{
                      pathname: "/detailScreen",
                      state: item
                    }}><Button>BUY NOW</Button>
            </Link>
          </Column>
        ))}
      </Wrapper>
    </Container>
  );
}

const Column = styled.article`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 0.5px solid #999999;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 12px 20px;
  border-radius: 10px;
  margin: 8px;
  background-color: #ffffff;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;
const IMG = styled.img`
  padding: 10px;
  width: 200px;
  height: 150px;
  object-fit: cover;
`;
const H4 = styled.h4`
  padding: 5px 0;
  width: 150px;
  height: 30px;
  font-size: 18px;
`;
const Container = styled.div`
  padding: 75px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
