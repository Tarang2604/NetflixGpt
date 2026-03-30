# NetflixGpt

 Create an app using npm create -react-app 
  Configure TailwindCSS
- Header
- Login Form
- Sign Up Form

# Features
- Login/SignUp 
  - Sign In/ Sign Up Form 
  - Redirect to Browser Page
-Browser(after authentication )
 -Header 
 - Main Movie
  -Tailer in Background    
  - Title & description 
  - Movie Subscription 
     - MovieSuggestion
       -MovieLists  

-NetflixGPT
  - Search Bar
  - Movie Suggestions
.




import React from "react";
import Header from './Header'
const Login =()=>{
  return (
    <div className="relative w-full h-screen ">
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
        alt="logo" />

      </div>
      <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
      <h1 className="font-bold text-3xl py-4">Sign In</h1>
      <input  type="text" placeholder="Email address" className="p-2 m-2 w-full"/>
      <input type="password " placeholder="Enter password" className="p-2 m-2 w-full" />
      <button className="p-4 m-4 bg-red-700 text-white w-full">
    Sign In
      </button>
      </form>
    </div>
  )
}

export default Login;