import React from 'react';
import { Typography } from '@mui/material';
import Price from "../components/Price"
import Logo from "../components/Logo"
// import Cryptodisplay from "./cryptodisplaying";
// // import cryptoinfo from "./cryptoinfoing.json";
// import Wrapper from "./cryptodisplaying";
// import cryptoinfo from "./cryptoinfoing"

const Home = () => {
  const [cryptoino] = React.useState(cryptoinfo);
  return (
    <Typography variant="h6" component="div">
      <div>
      <h1></h1>
     <Price abr="XRP" />
     <Logo name="BNB" abr="BNB" size="40px"/>
     </div>
    </Typography>
  //   <Wrapper>
      
  //   {cryptoino.map((cryptoino) => (
  //     <Cryptodisplay
  //       // id={cryptoino.id}
  //       key ={cryptoino.id}
  //       name={cryptoino.name}
  //       abbreviation={cryptoino.abbreviation}
  //     />
  //   ))}
  //   ;
  // </Wrapper>
  );
};

export default Home;
