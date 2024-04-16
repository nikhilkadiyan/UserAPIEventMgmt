import React, { useState } from 'react';
import TextBox from './TextBox';
const adduserCall = require('../apicalls/adduserCall');
const getUsers = require('../apicalls/getUsers');

function AddUser() {
    const [user, setUser] = useState({ email: '', name: '', mobile: '' });
    const [resOutput, setResOutput] = useState('');

    const handleAddClick = async(e) => {
        e.preventDefault();
        let res = await adduserCall(user);
        res= res+'\n'+resOutput;
        setResOutput(res);
    }
    const handleGetClick = async(e)=>{
        e.preventDefault();
        let res = await getUsers(user.name,user.email,user.mobile);
        res= res+'\n'+resOutput;
        setResOutput(res);
    }
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div className='my-4'>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="mobile" name='mobile' onChange={onChange} />
                </div>
                <div className="my-3">
                    <button onClick={handleAddClick} type="submit" className="btn btn-primary">Add</button>
                </div>

                <div className='my-3'>
                    <button onClick={handleGetClick} type="submit" className="btn btn-success">Get Users</button>
                </div>
            </form>
            <TextBox resOutput={resOutput} />
        </div>
    )
}

export default AddUser
