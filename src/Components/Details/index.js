import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { useParams } from 'react-router-dom'
import api from '../../Services/store-api'
import useStore from '../../Hooks/store-hook'
import { Item } from '../Products/styled'
import Frete from '../Frete'

const Details = () => {
    const {imageUrl} = useStore()
    const {id} = useParams()
    const [product, setProduct] = useState([{imgs:{img:[]}}])
    const [loading, setLoading] = useState(false)
    const [mainImage, setMainImage] = useState('')
    const [gallery, setGallery] = useState([])
    useEffect(()=>{
        const getDatafromId = async () =>{
            setLoading(true)
            const res = await api.get(`/products/${id}`)
                res.data.map((item)=>{
                    setProduct(item)
                    setMainImage(item.imgs.img[0])
                    setGallery(item.imgs.img)
                })
      
            setLoading(false)
        }
        getDatafromId()
    },[])
    useEffect(()=>{
        console.log(product)
        console.log(gallery)
    },[product])

    const mainImageChager = (img) =>{
        setMainImage(img)
    }

    if(loading){
        return(
            <h3>Loading...</h3>
        )
    }

  return (
   <S.Wrapper>
    <S.Product>
        <S.Display>
            <img src={`${imageUrl}/${mainImage}`}  width="300" height="300" id="main" />
            <S.Gallery>
            {gallery.map((item, index)=>(
                <img  key={index} src={`${imageUrl}/${item}`}  width="66" height="66" onClick={()=>mainImageChager(item)}  />
            ))}
            </S.Gallery>
            </S.Display>
            <S.Infos>
                <h2>{product.name}</h2>
                <hr/>
                <h3>{product.description}</h3>
                <hr/>
                <div>
              {product.sizes.PP?(<button className="btn btn-primary" >PP</button>):(<button className="btn btn-secondary" disabled >PP</button>)}
              {product.sizes.P?(<button className="btn btn-primary" >P</button>):(<button className="btn btn-secondary" disabled >P</button>)}
              {product.sizes.M?(<button className="btn btn-primary" >M</button>):(<button className="btn btn-secondary" disabled >M</button>)}
              {product.sizes.G?(<button className="btn btn-primary" >G</button>):(<button className="btn btn-secondary" disabled >G</button>)}
              {product.sizes.GG?(<button className="btn btn-primary" >GG</button>):(<button className="btn btn-secondary" disabled >GG</button>)}
                </div>
                <hr/>
            </S.Infos>
    </S.Product>
          
    <S.Payment>
        <span id='title' style={{backgroundColor:product.titlecolor}} >{product.title}</span>
        <S.Values>
    <span id='price' >R${product.price}</span>
    <hr/>
    <span id='paymentDisc' >TODO: payment description "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
    <hr/>
    <Frete/>
    <hr/>
    </S.Values>
    </S.Payment>

   </S.Wrapper>
  )
}

export default Details