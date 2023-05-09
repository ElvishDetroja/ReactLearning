import React from 'react'
import {memo} from "react";

function MemoChild2({check2}) {
  return (
    <>
    {console.log("from MemoChild2")}
    </>
  )
}

export default (MemoChild2);