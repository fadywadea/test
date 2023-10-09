/* eslint-disable eqeqeq */
import React from 'react'
import { useState } from 'react'

export default function Contacts() {

  // let inputUser = document.getElementById('userName');
  // let inputAge = document.getElementById('userAge');
  // let inputEmail = document.getElementById('userEmail');
  // let inputPassword = document.getElementById('userPassword');

  const [labelActive, setLabelActive] = useState(false);

  const labelACtivation = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
      setLabelActive(false);
    } else {
      setLabelActive(true)
    }
    // if (inputUser?.value === "" || inputAge?.value === "" || inputEmail?.value === "" || inputPassword?.value === "") {
    //   console.log(inputUser);
    //   setLabelActive(false);

    // } else {
    //   setLabelActive(true);
    // }

  };


  // window.addEventListener("input", labelACtivation);

  return <>
    <div className='mb-4'>
      <div className='contact pt-4'>
        <div className='text-center pt-4' >
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>contact section</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='lines  me-3'></div>
            <div className='fa-solid fa-star star'></div>
            <div className='lines  ms-3'></div>
          </div>
        </div>

        <form className='w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched'>

          <label htmlFor="userName" className={labelActive ? 'colorLabel position-relative top-0' : '__top position-relative top-0'}>userName :</label>
          <input onInput={(e) => labelACtivation(e)} className='form-control border-0 border-bottom py-3 position-relative' placeholder='userName' name='userName' id='userName' type="text" />

          <label htmlFor="userAge" className={labelActive ? 'colorLabel position-relative top-0' : '__top position-relative top-0'} >userAge :</label>
          <input onInput={(e) => labelACtivation(e)} className='form-control border-0 border-bottom py-3 position-relative' placeholder='userAge' name='userAge' id='userAge' type="text" />

          <label htmlFor="userEmail" className={labelActive ? 'colorLabel position-relative top-0' : '__top position-relative top-0'} >userEmail :</label>
          <input onInput={(e) => labelACtivation(e)} className='form-control border-0 border-bottom py-3 position-relative' placeholder='userEmail' name='userEmail' id='userEmail' type="text" />

          <label htmlFor="userPassword" className={labelActive ? 'colorLabel position-relative top-0' : '__top position-relative top-0'} >userPassword :</label>
          <input onInput={(e) => labelACtivation(e)} className='form-control border-0 border-bottom py-3 position-relative' placeholder='userPassword' name='userPassword' id='userPassword' type="text" />

          <button className="btn mt-4 text-white"> send Message </button>
        </form>

      </div>
    </div>
  </>
}
