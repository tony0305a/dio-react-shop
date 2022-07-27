import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'


const Items = () =>{

        const [produtos, setProdutos] = useState([])
        const [loading, setLoading] = useState(false)
        const [currentPage,setCurrentPage] = useState(1)
        const [productsPerPage] = useState(5)

        useEffect(()=>{
            const fetchProducts = async () =>{
                setLoading(true)
                const res = await axios.get(`http://localhost:1337/products`)
                setProdutos(res.data)
                setLoading(false)
            }
            fetchProducts()
        },[])

        // Get current Products
        const indexOfLastProduct = currentPage * productsPerPage
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage
        const currentProducts = produtos.slice(indexOfFirstProduct, indexOfLastProduct)

        //Change page

        const paginate = pageNumbers => setCurrentPage(pageNumbers)


    const call = () =>{
        console.log(currentProducts)
    }

    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <>
        <button onClick={call} >call</button>
        <ul>
            {currentProducts.map((item, index)=>(
                <li key={index}>
                    {item.name}
                </li>
            ))}
            <Pagination 
             productsPerPage={productsPerPage}
             totalProducts={produtos.length}
             paginate={paginate}
             />
        </ul>
        </>
    )

}
export default Items