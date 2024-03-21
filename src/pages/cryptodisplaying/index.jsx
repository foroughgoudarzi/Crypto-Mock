import React from "react";
import "./style.css";

// function Cryptodisplay(props) {
//   return (
//     <div className="cryptodes">
//       <div>
//              {props.name} <a>Info: {props.info} </a> <a> {props.change}</a>
//       </div>
//     </div>
//   );
// }

function Cryptodisplay() {
    const posts = data.posts;
    return (
        <div>
            {posts.map((posts) => {
              return <span>{posts.title} {posts.content} </span>
            })}
        </div>
    )
}


// {crypto.map((crypto) => (
//   <Cryptodisplay
//   name={crypto.name}
//   info={crypto.info}
//   change={crypto.change}
//   />
// ))};
  

export default Cryptodisplay;
