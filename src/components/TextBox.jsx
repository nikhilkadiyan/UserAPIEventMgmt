import React from 'react'

function TextBox(props) {
  
  const onChange = ()=>{
  }
  return (
    <div className='my-3'>
        <textarea value={props.resOutput} name="outputtext" id="outputtext" rows="10" style={{width:'100%'}} onChange={onChange} ></textarea>
    </div>
  )
}

export default TextBox
