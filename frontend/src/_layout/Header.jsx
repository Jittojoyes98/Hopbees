import React from 'react'
import  Button  from 'react-bootstrap/Button';

const Header = () => {

  const handlePath=(path)=>{
    window.open(`/${path}`,'_blank')
  }
  return (
    <div className='header'>
        <div>Logo</div>
        <div className='d-flex' >
          <div className='d-flex mb-0'>
            
              <a href="" className='px-3 py-2_5 fw-normal d-flex justify-content-center align-items-center text-dark '><span>Hire talents</span></a>
              
              <a href="" className='px-3 py-2_5 fw-normal d-flex justify-content-center align-items-center text-dark '><span>Become a hobbyist</span></a>
              
              <a href="" className='px-3 py-2_5 fw-normal d-flex justify-content-center align-items-center text-dark'><span>Find a hobby</span></a>
              
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <Button onClick={()=>handlePath("login")} type="button" variant='primary' className='fw-semibold px-4 me-1 py-1'>Log in</Button>
            <Button onClick={()=>handlePath("signup")} type="button" variant='secondary' className='fw-semibold px-4 py-1'>Sign up</Button>
          </div>
          

        </div>
    </div>
  )
}

export  {Header};