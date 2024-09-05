import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

export default function Loader() {
  return (
    <>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass={'justify-content-center'}
            visible={true}
          />
    </>
  )
}
