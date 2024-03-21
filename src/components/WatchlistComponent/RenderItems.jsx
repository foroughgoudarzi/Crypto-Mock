import CryptoItem from "../CryptoItem";
import crypto from "../../data/crypto.json";
import { useEffect, useState } from "react";

function RenderItems() {
  const initialCryptoList =  localStorage.getItem("cryptoList") != null && localStorage.getItem("cryptoList") != "undefined"
  ? JSON.parse(localStorage.getItem("cryptoList"))
  : {};

  ////moved from crypto
   // const list= JSON.parse(localStorage.getItem("cryptoList"));
   const [list, setList] = useState(initialCryptoList);

  
   const handleRemove= (event)=>{
     
     setList({...list,[event.target.name]:false})
     // setItem(event.target.name);
     // list[removeItem] = false;
     console.log(list)
   }

  const selected = Object.keys(list).filter((element) => list[element]);

  const findName = (element) =>
  crypto.find((e) => e.abbreviation == element).name;
  const findId = (element) => crypto.find((e) => e.abbreviation == element).id;

  useEffect(() => {

    localStorage.setItem("cryptoList", JSON.stringify(list));
}, [list]);


  

  return (
    <>
      <h4>
        {selected.map((element) => (
          <CryptoItem
            name={findName(element)}
            abr={element}
            size="40px"
            key={findId(element)}
            handleRemove={handleRemove}
            
          />
        ))}
      </h4>
    </>
  );
}

export default RenderItems;
