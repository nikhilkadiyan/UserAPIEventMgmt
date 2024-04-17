import React, { useState } from 'react'
import AddUser from './AddUser'
import GetUsers from './GetUsers'
import EditUser from './EditUser'
import TextBox from './TextBox'
import GetUserById from './GetUserById'


function Home() {
    const [resOutput, setResOutput] = useState('');
    const [addUserVisibility, setAddUserVisibility] = useState(false);
    const [getUserVisibility, setGetUserVisibility] = useState(false);
    const [editUserVisibility, setEditUserVisibility] = useState(false);
    const [getUserByIdVisibility, setGetUserByIdVisibility] = useState(false);

    const updateResOutput = (res) => {
        let updatedRes = res + '\n' + resOutput;
        setResOutput(updatedRes);
    }
    return (
        <div className='container'>
            <div className="btn-holder my-4">
                <button onClick={()=>setAddUserVisibility(true)} type="button" class="btn btn-primary me-3">Add a user</button>
                <button onClick={()=>setGetUserVisibility(true)} type="button" class="btn btn-secondary me-3">Get Users</button>
                <button onClick={()=>setEditUserVisibility(true)} type="button" class="btn btn-success me-3">Edit a User</button>
                <button onClick={()=>{setGetUserByIdVisibility(true)}} type="button" class="btn btn-warning">Get User by Id</button>
            </div>
            {addUserVisibility && <AddUser updateResOutput={updateResOutput} setAddUserVisibility={setAddUserVisibility} />}
            {getUserVisibility && <GetUsers updateResOutput={updateResOutput} setGetUserVisibility={setGetUserVisibility} />}
            {editUserVisibility && <EditUser updateResOutput={updateResOutput} setEditUserVisibility={setEditUserVisibility} />}
            {getUserByIdVisibility && <GetUserById updateResOutput={updateResOutput} setGetUserByIdVisibility={setGetUserByIdVisibility} />}
            <TextBox resOutput={resOutput} />
        </div>
    )
}

export default Home