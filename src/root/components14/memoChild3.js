import React from 'react'
import {memo} from "react";

function MemoChild3({check3}) {
  return (
    <>
    {console.log("from MemoChild3")}
    </>
  )
}

export default memo(MemoChild3);