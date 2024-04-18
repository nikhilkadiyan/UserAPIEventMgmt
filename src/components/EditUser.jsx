import React, { useState } from 'react'
const patchUser = require('../apicalls/patchUser');

function EditUser(props) {
    const [user, updateUser] = useState({ email: '', name: '', mobile: '',id:'112' });

    const handleUpdateClick = async(e)=>{
        e.preventDefault();
        let res = await patchUser(user.email,user.id,user.mobile,user.name);
        props.updateResOutput(res);
        props.setEditUserVisibility(false);
    }

    const onChange = (e) => {
        updateUser({ ...user, [e.target.name]: e.target.value })
    }
  return (
    <div>
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
                    <button onClick={()=>{props.setEditUserVisibility(false)}} type="button" className="btn btn-secondary me-3">Close</button>
                    <button onClick={handleUpdateClick} type="submit" className="btn btn-primary">Update User</button>
                </div>
            </form>
    </div>
  )
}

export default EditUser
