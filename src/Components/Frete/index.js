import React from 'react'

const Frete = () => {
  return (
    <div>
        <form>
    <label for="cep">Calcular frete e prazo</label>
    <input className='form-control' type="text" name="cep" style={{border:'1px solid black'}}  placeholder="digite o CEP" />
    <button className='btn btn-primary'  type='submit'>ok</button>
    </form>
    </div>
  )
}

export default Frete