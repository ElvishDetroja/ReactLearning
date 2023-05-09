import React from 'react'
import {memo} from "react";

function MemoChild1({count}) {
  return (
    <>
    {console.log("from MemoChild1")}
    </>
  )
}

export default memo(MemoChild1);