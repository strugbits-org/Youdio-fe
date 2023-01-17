import React from 'react'
import styled from 'styled-components'

const Contaienr = styled.div`
    background:var(--backgroundGreen);
    height:100vh;
    display:grid;
    place-content:center;
`

function Login() {
  return (
    <Contaienr>
      <div className='form'>
       <h1>Form</h1>

      </div>
    </Contaienr>
  )
}

export default Login