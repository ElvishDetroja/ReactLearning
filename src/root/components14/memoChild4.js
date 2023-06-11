import React from 'react'
import {memo} from "react";

const MemoChild4Out = memo(function MemoChild4({check4}) {
  return (
    <>
    {console.log("from MemoChild4")}
    </>
  )
})

export default MemoChild4Out;