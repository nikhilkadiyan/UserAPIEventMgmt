import React, { useState } from 'react'
const deleteUsers = require('../apicalls/deleteUsers')


function DeleteUsers(props) {
    const [inputFields, setInputFields] = useState([""]);

    const onChange = (index, event) => {
        let data = [...inputFields];
        data[index] = event.target.value;
        setInputFields(data);
    }

    const addFields = (e) => {
        e.preventDefault();
        let newField = "";
        setInputFields([...inputFields, newField]);
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    const handleDeleteClick = async(e) => {
        e.preventDefault();
        let res = await deleteUsers(inputFields);
        props.updateResOutput(res);
        props.setDeleteUsersVisibility(false);
    }

    return (
        <div>
            <form onSubmit={handleDeleteClick}>
                {inputFields.map((input, index) => {
                    return (
                        <div className="input-group mb-3" key={index}>
                            <input type="text" className="form-control" id="delid" name='delid' placeholder='user ID' onChange={event => onChange(index, event)} />
                            <span onClick={removeFields} className="input-group-text" id="basic-addon2">Remove</span>    
                        </div>
                    )
                })}
                <div className="mb-3">
                    <button onClick={() => { props.setDeleteUsersVisibility(false) }} type="button" className="btn btn-secondary me-3">Close</button>
                    <button onClick={addFields} className="btn btn-info me-3">Add more</button>
                    <button onClick={handleDeleteClick} type="submit" className="btn btn-primary">Delete</button>
                </div>
            </form>
        </div>
    )
}

export default DeleteUsers
