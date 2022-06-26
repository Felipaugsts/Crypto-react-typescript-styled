import http from "./http-common";
import Crypto from "./model";

const getCurrentPrice = () => {
  return http.get<Array<Crypto>>(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
};

export default getCurrentPrice;
