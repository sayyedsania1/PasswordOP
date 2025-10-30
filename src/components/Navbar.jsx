import React from 'react'
const Navbar = () => {
    return (
        <>
            <nav className="bg-green-200 flex justify-between ">
                <div className="logo text-xl font-bold p-4 m-2 flex ">
                  <span><img className="w-8 h-8" src="icons/encryption.png" alt="logo"/></span>
                  <span className="text-green-900">&lt;</span>
                  <span className="text-green-500">Pass</span>
                  <span className="text-green-900">OP</span>
                  <span className="text-green-900">&gt;</span>
                </div>
                <button className="text-white bg-green-500 my-5 rounded-full flex justify-between items-center mx-1.5 ring-white ring-1">
                    <img src="icons/github.svg" alt="git" className="invert w-10 p-1" />
                    <span className="font-bold px-2" >GitHub</span>
                </button>
            </nav>
        </> 
    )
}
export default Navbar