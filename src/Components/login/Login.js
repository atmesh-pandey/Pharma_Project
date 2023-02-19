import
act, { useState, useEffect, useCallback } from 'react'
import './Login.css'
import { FaRegEnvelope } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom"
import Loginimage from '../logo/Loginimage';
import { useQuery, useMutation } from 'graphql-hooks';
import { async } from 'parse/lib/browser/IndexedDBStorageController';
import { reactLocalStorage } from 'reactjs-localstorage';
import Header from '../header/Header';

const LOGIN_MUTATION = `
mutation Login($username: String!, $password: String!) {
   logIn(input: {
      username: $username,
      password:$password,
    }){
      viewer {
        sessionToken
      }
    }
}`



function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false)
  const [myMutation] = useMutation(LOGIN_MUTATION);

  const isEmailValid = (email) =>{
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)) {  
      navigate('/Home');
      return true
    }else{
      return false
    }
  }

  const handleSubmit = () =>{
    if(!email || !password){
      alert('Please Enter Valid Deatils')
      navigate('/')
    }else{
      alert( isEmailValid(email))
     
      // alert("Go to Dasdboard")
      // navigate('/Home')

    }
    



    // console.log({ email, password })
    // await myMutation({ variables: { username: email, password: password } })
    // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    // if(e.value.match(mailformat)){
    //   setEmailErr(true)
    // }
    // console.warn(e.target.value.length)
  }

  return (
    <>
      <Header />

      <section>
        <div className="px-6 h-full text-white-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src="https://lmsimages.sgp1.digitaloceanspaces.com/loginImage.png "
                className="w-[40rem]"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                </div>

                <div
                  className="flex items-center my-4"
                >
                  <p className="text-center font-semibold mx-[4rem] mt-[-7rem] mb-0 text-[#082161] text-[2rem]">Log In To Your Account</p>
                </div>

                <div
                  className="flex items-center my-1"
                >
                  <p className="text-center font-semibold mx-[1rem] text-gray-500 mt-[1rem] mb-0 ">Email *</p>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block px-4  w-[30rem] py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none drop-shadow-md"
                    placeholder="Enter Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />{emailErr?<span>invalid email</span>:"" }
                </div>

                <div
                  className="flex items-center my-1"
                >
                  <p className="text-center font-semibold mx-[1rem] text-gray-500  mb-0 ">Password *</p>
                </div>
                <div className='mb-6'>
                  <input
                    type="password"
                    className="form-control block px-4  w-[30rem] py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none drop-shadow-md"
                    placeholder="Enter Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center lg:text-left">
                <button className="inline-block w-[30rem] px-7 py-3 bg-[#082161] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-[1rem]"
                      type='button' onClick={()=>handleSubmit()}>
                      Login
                    </button>
                  <p className='ml-[22rem] mt-[1rem]'>
                    <Link to="/Resetpasswrd">
                      <a
                        href="#!"
                        className="text-[#082161] hover:text-[#082161] focus:text-[#082161] transition duration-200 ease-in-out mx-"
                      > Forgot Password?</a
                      >
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default Login