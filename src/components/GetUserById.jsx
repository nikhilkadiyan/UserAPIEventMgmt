import React, { useState } from 'react';
const getUserById = require('../apicalls/getUserById');

function GetUserById(props) {

    const [userId, setUserId] = useState('');

    const handleGetClick = async(e)=>{
        e.preventDefault();
        let res = await getUserById(userId);
        props.updateResOutput(res);
        props.setGetUserByIdVisibility(false);
    }
    const onChange = (event)=>{
        setUserId(event.target.value);
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="userid" className="form-label">User ID</label>
                    <input type="text" className="form-control" id="userid" name='userid' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <button onClick={() => { props.setGetUserByIdVisibility(false) }} type="button" class="btn btn-secondary me-3">Close</button>
                    <button onClick={handleGetClick} type="submit" className="btn btn-primary">Get</button>
                </div>
            </form>
        </div>
    )
}

export default GetUserById
