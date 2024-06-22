import React,{useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return ( <h3>Please Enter Details</h3> )
        return (
            <div>
                <h3>{user.Username}</h3>
            </div>
        )
}

export default Profile