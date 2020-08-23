import React from 'react';
import {
    Link,
} from 'react-router-dom';
import styled from "styled-components";
import { Button } from "./Button";

export default function MyOrderScreen() {
    return (
        <Container>
            <Wrapper>
                <Column>
                    <div>
                        <Wrapper>
                            <Button>Save Address</Button>
                            <Button>Cancel</Button>
                        </Wrapper>
                    </div>
                    <div>
                        <H4>Shipping Bag</H4>
                        <H4>Payment Info</H4>
                        <H4>Item Price</H4>
                        <H4>Tax</H4>
                        <H4>Shipping Charge</H4>
                        <H4>Total</H4>
                    </div>
                </Column>
            </Wrapper>
            <Wrapper>
                <Button>Checkout</Button>
                <Link to={{
                    pathname: "/homeScreen",
                }}>
                    <Button>Cancel</Button>
                </Link>
            </Wrapper>
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
