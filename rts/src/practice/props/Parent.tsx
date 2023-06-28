import React from "react";
import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color="Green" onClick={() => console.log("Clicked...")}>
      Text text Text ......................
    </Child>
  );
};

export default Parent;
