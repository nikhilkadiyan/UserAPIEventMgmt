import React, { useState } from 'react';
const adduserCall = require('../apicalls/adduserCall');


function AddUser(props) {
    const [user, setUser] = useState({ email: '', name: '', mobile: '' });

    const handleAddClick = async(e) => {
        e.preventDefault();
        let res = await adduserCall(user);
        props.updateResOutput(res);
        props.setAddUserVisibility(false);
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
                    <input type="text" className="form-control" id="mobile" name='mobile' maxLength={10} onChange={onChange} />
                </div>
                <div className="my-3">
                    <button onClick={()=>{props.setAddUserVisibility(false)}} type="button" className="btn btn-secondary me-3">Close</button>
                    <button onClick={handleAddClick} type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
            
        </div>
    )
}

export default AddUser
