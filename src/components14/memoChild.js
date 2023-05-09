import React from 'react'
import {memo} from "react";

function MemoChild() {
  return (
    <>
    {console.log("from MemoChild")}
    </>
  )
}

export default memo(MemoChild);