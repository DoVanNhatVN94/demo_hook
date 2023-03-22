/** @format */

import React, { memo } from "react";

interface props {
  obj: { name: string; age: number };
}

function Memo({ obj: { name, age } }: props) {
  // console.log(name,age)
  console.log("render");
  return <div>Memo name {name}</div>;
}

export default memo(Memo, (prevProp: props, nextProp: props) => {
 const isRender = Object.keys(prevProp.obj).every((key)=>
  prevProp.obj[key as keyof typeof prevProp.obj] === nextProp.obj[key as keyof typeof nextProp.obj]
 )
  
  
  return isRender;
});
