import React from 'react';
import {
    Link,
} from 'react-router-dom';
import styled from "styled-components";
export default function Header() {
    return (
            <Container>
                <RightContainer>
                    <H6>eCommerce Site</H6>
                </RightContainer>
                <LeftContainer>
                    <Link to="/homeScreen">
                        <H4>Home</H4>
                    </Link>
                    <Link to="/detailScreen">
                        <H4>My Orders</H4>
                    </Link>
                    <Link to="/myorderScreen">
                        <H4>Cart</H4>
                    </Link>
                </LeftContainer>
            </Container>
    );
}


const LeftContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: flex-end;
`;


const RightContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-items: flex-start;
margin:10px
`;

const H4 = styled.h4`
  padding: 5px 0;
  width: 150px;
  height: 30px;
  font-size: 18px;
`;

const Container = styled.div`
    height: 60,
    flex-direction: row;
    justify-content: space-between;
    align-items: center`;

const H6 = styled.h4`
  padding: 5px 0;
  width: 150px;
  height: 30px;
  font-size: 25px;
`;
