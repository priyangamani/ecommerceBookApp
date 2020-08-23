import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from '../actions/actions'

import { Button } from "./Button";


export default function DetailScreen() {
    const dispatch = useDispatch();
    let Location = useLocation();
    const itemList = Location.state;
    const buttonAddToCart = () => {
        dispatch(addToCart(itemList));
        alert('Added Successfully');
    };
    return (
        <Column>
            <Wrapper>
                <IMG src={itemList.volumeInfo.imageLinks.smallThumbnail} alt={itemList.name} />
                <div>
                    <H4>{itemList.volumeInfo.publisher}</H4>
                    <H4>{itemList.volumeInfo.pageCount}</H4>
                    <H4>{itemList.volumeInfo.industryIdentifiers[0].type}</H4>
                    <H4>{itemList.volumeInfo.industryIdentifiers[0].identifier}</H4>
                </div>
            </Wrapper>
            <Wrapper>
                <Button onClick={buttonAddToCart}>ADD CART</Button>
                <Link to={{
                    pathname: "/myOrderScreen",
                }}>
                    <Button>BUY NOW</Button>
                </Link>
            </Wrapper>
            <H4>{itemList.volumeInfo.description}</H4>
        </Column>
    );
}

const Column = styled.article`
  flex-flow: row wrap;
  align-items: center;

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
const H4 = styled.h4`
  font-size: 16px;
`;
const IMG = styled.img`
  padding: 10px;
  width: 200px;
  height: 150px;
  object-fit: cover;
`;
