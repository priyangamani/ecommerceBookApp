import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { useSelector} from "react-redux";
import styled from "styled-components";


import { Button } from "./Button";


export default function MyOrderScreen() {

    const data = useSelector(state => state.addCart);
    const date = new Date();
    let datestring = date.getDate()

    const list = data;

    return (
        <Container>
            <Wrapper>
                {list && list.map((item, i) => (
                    <div>
                    <Column>
                       
                     
                        <IMG src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.name} />
                        <div>
                            <H4>{item.volumeInfo.title}</H4>
                            <H4>{item.volumeInfo.publisher}</H4>
                            <H4>{item.volumeInfo.pageCount}</H4>
                            <H4>Ordered Placed : {datestring}/8/2020</H4>
                            <H4>STATUS : Delivered</H4>
                        </div>
                    </Column>
                    </div>
                ))}
            </Wrapper>
            <Link    to={{
                      pathname: "/checkoutScreen",
                    }}><Button>CART</Button>
            </Link>
      
        </Container>
    );
}

const Column = styled.article`
  display: flex;
  flex-flow: flex-start;
  align-items: center;
  border-bottom: 0.5px solid #999999;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 12px 20px;
  border-radius: 10px;
  width: 1200px;
  margin-bottom:10px;
  background-color: #ffffff;
`;


const Wrapper = styled.div`

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
  display: flex;
  flex-flow: column;
  align-items: center;
`;
