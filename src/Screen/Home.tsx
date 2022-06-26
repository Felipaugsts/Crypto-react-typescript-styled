import * as React from "react";
import styled from "styled-components";
import btc from "../assets/images/btc.gif";

import { useState } from "react";
import { useEffect } from "react";

import getCurrentPrice from "../data/services";

export interface IAppProps {}

function App() {
  const [newprice, setNewPrice] = useState(100);

  function currencyFormat(num: any) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const handlePriceChange = () => {
    getCurrentPrice().then((response) => {
      let currentPrice = response.data[0].current_price;
      setNewPrice(currentPrice);
    });
  };

  useEffect(() => {
    handlePriceChange();
  });

  return (
    <div>
      <Wrapper>
        <div>
          <img src={btc} />
          <h3>
            Current Bitcoin price:
            <span>{currencyFormat(newprice)}</span>
          </h3>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  min-height: 90vh;
  display: grid;
  place-items: center;
  text-align: center;
  color: ##363f4d;
  h3 {
    margin-top: 10rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
  img {
    height: 200px;
    width: 200px;
  }
  span {
    font-size: 24px;
    margin-left: 10px;
    color: green;
  }
`;

export default App;
