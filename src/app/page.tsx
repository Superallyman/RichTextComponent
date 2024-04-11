'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { Space_Grotesk } from 'next/font/google';
const space = Space_Grotesk({ subsets: ['latin'] })
function TextEditor() {
  const [value, setValue] = useState('');

  return <>
    <div className='h-10 shadow-md flex items-center justify-center'>
      <h1 className={"text-center header_heading " + space.className}>Next Text Editor</h1>
    </div>
    <div className='h-screen flex justify-center items-center '>
      <div className='w-10/12'>
        <h1 className={"text-xl font-semibold mb-3" + space.className}>Text Editor</h1>
        <div className='m-auto border  rounded-lg'>
          <div id="toolbar"></div>
          <ReactQuill modules={{
            toolbar: [
              ['bold', 'italic', 'underline'],        
              ['link'],

              [{ 'list': 'ordered' }, { 'list': 'bullet' }],

              ['clean']                                       
            ]

          }} theme="bubble" className='rounded-lg' value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  </>
}
export default TextEditor