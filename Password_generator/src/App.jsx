import React, { use } from 'react'
import { useState,useCallback,useEffect, useRef} from 'react'


function App() {
  const [length, setlength] = useState(6)
  const [numbers, setnumbers] = useState(false)
  const [characters, setcharacters] = useState(false)
  const [password, setpassword] = useState('')
  const [copy, setcopy] = useState(false)

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    const content = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    let allowed = content
    if (numbers) allowed += '0123456789'
    if (characters) allowed += '!@#$%^&*()_+'

    let pass = ''

    for (let i=1 ; i<length ; i++)
    {
      pass += allowed.charAt(Math.floor(Math.random() * allowed.length +1))
      // since Math.random() returns a floating point number between 0 and 1,
      //  we multiply it by the length of the content string and round it down 
      // to the nearest integer using Math.floor()
      // content.charAt() returns the character at the specified index
    }
    setpassword(pass)
  },[length, numbers, characters]);

  useEffect(() => {
    generatePassword()
  },[length, numbers, characters]);

  const copytoclipboard = () => {
    window.navigator.clipboard.writeText(passwordRef.current.value)
    passwordRef.current.select()
    setcopy(true)
    setTimeout(() => {
      setcopy(false)
    }, 1500)
  }

  return (
    <>
    <div className='bg-[#2E2E2E] w-screen h-screen flex flex-col justify-start items-center relative'>
      <h1 className='text-amber-600 text-2xl mt-11 justify-center'>Password Generator</h1>
      <div className='bg-[#AA98A9] w-106 h-35 rounded-2xl mt-11 '>
        <input 
        className='bg-white w-75 h-9 rounded-2xl justify-center mt-7 ml-5 p-2'
        value={password}
        placeholder='Password'
        ref={passwordRef}
        readOnly
        ></input>
        <button 
        className='bg-[#dc7c1c] w-20 h-9 rounded-2xl justify-center text-white transform transition duration-200 active:scale-90'
        onClick={copytoclipboard}
        >{copy ? 'Copied!': 'Copy'}</button>
        <input type='range' 
        className='mt-6 ml-5 h-1.5 w-20' 
        min={6}
        max={24}
        value={length}
        onChange={(e)=> setlength(Number(e.target.value))}
        />
        <label className='text-amber-700 ml-1.5'>Length : {length}</label>
        <input type='checkbox' className='ml-5 mt-6' 
        defaultChecked={numbers}
        onChange={() =>{setnumbers((prev) => !prev )}}/>
        {/* setnumbers(!numbers) won't be able to fetch the previous value 
        if there are multiple updates in quick succession
        inorder to fetch previous value use the arrow function */}
        <label className='text-amber-700 ml-1.5'>Numbers</label>
        <input type='checkbox' className='ml-5 mt-6'
        defaultChecked={characters}
        //defaultChecked is used to check the checkbox by default 
        onChange = {() =>{setcharacters(!characters)}}/>
        {/* onclick just works for button for any other changes use onChange */}
        <label className='text-amber-700 ml-1.5'>Characters</label>
      </div>
    </div>
    </>
  )
}

export default App
