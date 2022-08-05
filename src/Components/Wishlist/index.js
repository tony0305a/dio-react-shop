import React from 'react'
import useStore from '../../Hooks/store-hook'

const Wishlist = () => {


    const {imageUrl} = useStore()

  return (
    <>
    <img src={`${imageUrl}/heart.png`} width="32"/>
    </>
  )
}

export default Wishlist