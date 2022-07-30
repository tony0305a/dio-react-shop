import React, {useEffect, useState} from 'react'
import { Rating } from 'react-simple-star-rating'
import api from '../../Services/store-api'
import * as S from './styled'

const Stars = ({prodId, userId}) => {
    const [rating, setRating] = useState(0)
    const [stars,setStars] = useState(0)

    useEffect(()=>{
        const getStars = async(id) =>{
           const res = await api.get(`/rating/${id}`)
           setStars(res.data)
        }
        getStars(prodId)
    },[])
 
    useEffect(()=>{
        var totalStars = 0
        var starsMedia = 0
        var rates = stars.length
        for(var i in stars){
             totalStars += parseFloat(stars[i].stars)
             
        }
        starsMedia = totalStars / rates

        

        setRating(starsMedia)  
    },[stars])


    const handleRating = async (rate) =>{
       const res = await api.get(`/rating/check/${userId}/${prodId}`)
       if(res.data.length === 0 ){
        console.log('sem avaliações para o produto')
            const add = await api.post(`/rating/add`,{prodid:prodId,userid:userId,stars:rate})
       }
    }



  return (
    <S.Wrapper>
 
    <Rating onClick={handleRating} ratingValue={rating} size={24} allowHalfIcon={true} />
    <span><b>Avaliações:</b> {stars.length}</span>
    </S.Wrapper>
  )
}

export default Stars