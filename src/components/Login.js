import React from "react";
import Header from './Header'
const Login =()=>{
  return (
    <div className="relative w-full h-screen ">

      <img  className="absolute w-full h-full object-cover"      
      src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
        alt="logo" />
      
      <div className='absolute w-full h-full bg-black opacity-60'>
       </div>
        <Header/>
      
      <form className="absolute left-0 right-0 mx-auto my-36 w-3/12 bg-black bg-opacity-75 p-12 rounded-md text-white" 
      // className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'
      >
      <h1 className="font-bold text-3xl py-4">Sign In</h1>
      
      <input
        type="text"
       placeholder="Email address" 
       className="w-full p-3 mb-4 my-2  bg-gray-700 rounded outline-none focus:bg-gray-600"/>
      
      <input 
      type="password " 
      placeholder="Enter password" 
      className="w-full p-3 mb-4 my-2  bg-gray-700 rounded outline-none focus:bg-gray-600" />
      <button className=" w-full p-3 bg-red-600 rounded-lg hover:bg-red-700 font-semibold text-white ">
    Sign In
      </button>
    <p>Are you new to </p>
      </form>
    </div>
  )
}

export default Login;

// import React from 'react'
// import Header from './Header'

// const Login = () => {
//   return (
//     <div className="relative w-full h-screen">
      
//       {/* Background Image */}
//       <img
//         className="absolute w-full h-full object-cover"
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
//         alt="bg"
//       />

//       {/* Overlay (dark effect) */}
//       <div className="absolute w-full h-full bg-black opacity-60"></div>

//       <Header />

//       {/* Form Container */}
//       <form className="absolute z-10 w-3/12 bg-black bg-opacity-75 p-12 rounded-md my-36 mx-auto right-0 left-0 text-white">
        
//         <h1 className="text-3xl font-bold mb-6">Sign In</h1>

//         <input
//           type="text"
//           placeholder="Email or phone number"
//           className="w-full p-3 mb-4 bg-gray-700 rounded outline-none focus:bg-gray-600"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 mb-6 bg-gray-700 rounded outline-none focus:bg-gray-600"
//         />

//         <button className="w-full p-3 bg-red-600 rounded hover:bg-red-700 font-semibold">
//           Sign In
//         </button>

//         {/* Extra options */}
//         <div className="flex justify-between text-sm text-gray-400 mt-4">
//           <label>
//             <input type="checkbox" className="mr-1" />
//             Remember me
//           </label>
//           <p className="cursor-pointer hover:underline">Need help?</p>
//         </div>

//         <p className="text-gray-400 mt-6">
//           New to Netflix?{" "}
//           <span className="text-white cursor-pointer hover:underline">
//             Sign up now
//           </span>
//         </p>

//       </form>
//     </div>
//   )
// }

// export default Login
