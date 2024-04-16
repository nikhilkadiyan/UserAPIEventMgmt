import React, { useState } from 'react'
import InputBoxContext from './inputBoxContext';

function InputState(props) {
    const [textbox, setTextBoxContent] = useState("");
    const updateTextBoxContent = (res)=>{
        let updatedtext = res + textbox;
        setTextBoxContent(updatedtext);
    }
  return (
    <InputBoxContext.Provider value={{textbox,updateTextBoxContent}}>
        {props.children}
    </InputBoxContext.Provider>
  )
}

export default InputState;
