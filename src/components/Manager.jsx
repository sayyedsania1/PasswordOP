import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
  

const Manager = () => {

    const ref = useRef()
    const passwordRef =useRef()
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""

    })
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const handleClick = () => {
        passwordRef.current.type="text"
        if (ref.current.src.includes("icons/eyeoff.svg")) {
            ref.current.src = "icons/eye.svg"
            passwordRef.current.type="password"
        }
        else {
            ref.current.src = "icons/eyeoff.svg"
            passwordRef.current.type="text"

        }

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
  

    const savePassword = () => {
        if(form.site.length>3 && form.username.length>3 && form.password.length>3){
        setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
        console.log(passwordArray)
        setform({site:"",username:"", password:""})
           toast('Passsword saved!', {
            position: "top-right",
            autoClose: 50,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
        
        else{
            toast('Invalid data', {
            position: "top-right",
            autoClose: 50,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    
       }
    }

    const copyText=(text)=>{
     toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 50,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
       navigator.clipboard.writeText(text)
    }

    const handleEdit =(id)=>{
        setform(passwordArray.filter(i => i.id === id)[0]);
        setPasswordArray(passwordArray.filter(item=>item.id!==id));
      
    }

    const handleDelete =(index)=>{
        let c=confirm("Do you really want to delete this password?")
        if(c){
        setPasswordArray(passwordArray.filter((item, i) => i !== index));
        localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.index!==index)))
        }
           toast('Deletion completed!', {
            position: "top-right",
            autoClose: 50,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <>
         <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            </div>
            <div className="bg-green-100 py-7 md:mycontainer">
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-green-900">&lt;</span>
                    <span className="text-green-500">Pass</span>
                    <span className="text-green-900">OP</span>
                    <span className="text-green-900">&gt;</span>

                </h1>
                <p className="text-center  text-sm md:text-xl text-green-900 font-bold mx-5 my-5">Your very own password manager.</p>

                <div className=" text-white flex flex-col p-4 gap-8 items-center ">

                    <input value={form.site} className="rounded-full w-full border border-green-950 text-black  py-1" type="text" name="site" id="" placeholder=" Enter website URL" onChange={handleChange}  />
                    <div className="flex w-full  flex-col md:flex-row  justify-between gap-3">

                        <input value={form.username} className="rounded-full border border-green-950 w-full text-black py-1" type="text" name="username" placeholder=" Enter username" onChange={handleChange} />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} className="rounded-full border border-green-950 w-full text-black py-1" type="password" name="password" placeholder=" Enter password" onChange={handleChange} />
                            <span className="absolute text-black right-0 cursor-pointer" onClick={handleClick}>
                                <img ref={ref} className="m-1.5" width="20" src="icons/eye.svg" alt="eye" />

                            </span>
                        </div>
                    </div>
                    <button className="text-black flex font-bold justify-center items-center border-2 border-green-900 bg-green-600 hover:bg-green-500 rounded-full px-2 py-2 w-fit" onClick={savePassword}>
                        <lord-icon className="mx-auto"
                            src="https://cdn.lordicon.com/tsrgicte.json"
                            trigger="hover"
                            stroke="bold">
                        </lord-icon>
                        Save</button>
                </div>
                <div className="passwords">
                    <h1 className="font-bold text-xl py-4">Your Passwords</h1>
                    {passwordArray.length===0 && <div>NO PASSWORDS TO SHOW</div>}
                    {passwordArray.length !==0  &&<table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className="bg-green-600 text-white ">
                            <tr>
                                <th className="py-2 border border-white">Site</th>
                                <th className="py-2 border border-white">Username</th>
                                <th className="py-2 border border-white">Password</th>
                                <th className="py-2 border border-white">Action</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody className="bg-green-200">
                         {passwordArray.map((items,index) =>  {
                         return <tr key={index} >
                                <td className="py-2 border border-white text-center justify-around w-32"><a className="flex justify-center items-center gap-2" href={items.site} target="_blank">{items.site}<div  onClick={()=>copyText(items.site)} className="flex justify-between items-center gap-2" ><img className="h-5 w-5 cursor-wait rounded" src="icons/copy.png" alt="copy"  /></div></a></td>
                                <td className="py-2 border border-white text-center w-32"><div onClick={()=>copyText(items.username)}  className="flex justify-center items-center gap-2" >{items.username}<img className="h-5 w-5 cursor-wait rounded" src="icons/copy.png" alt="copy"  /></div></td>
                                <td className="py-2 border border-white text-center w-32"><div onClick={()=>copyText(items.password)}  className="flex justify-center items-center gap-2" >{items.password}<img className="h-5 w-5 cursor-wait rounded" src="icons/copy.png" alt="copy"  /></div></td>
                                <td className="py-2 border border-white text-center w-1"><div className="flex justify-center items-center gap-6"><button className="flex justify-center items-center gap-2" onClick={()=>handleEdit(items.id)}> <div className="flex justify-center items-center gap-2" ><img className="h-5 w-5 cursor-pointer" src="icons/edit.png" alt="edit"/></div></button><button className="flex justify-center items-center gap-2" onClick={()=>handleDelete(index)}> <div className="flex justify-center items-center gap-2" ><img className="h-5 w-5 cursor-pointer" src="icons/delete.svg" alt="delete"/></div></button></div></td>
                                

                            </tr>})}
                           
                        </tbody>
                    </table>}


                </div>
            </div>
        </>
    )
}
export default Manager