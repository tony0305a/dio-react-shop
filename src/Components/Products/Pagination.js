import React from 'react'
import * as S from './styled'

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = []
    for(let i=1;i<=Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
   <S.PaginationWrapper>
        {pageNumbers.map((number)=>(
            <div key={number} >
                <button onClick={()=>paginate(number)} >
                    {number}
                </button>
                </div>
        ))}
   </S.PaginationWrapper>
  )
}

export default Pagination
