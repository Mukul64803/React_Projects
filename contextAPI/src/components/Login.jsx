import React,{useState,useContext} from 'react'
import UserContext from '../context/Usercontext';

function Login() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const HandleSubmit = (e)=>{
        e.preventDefault();
        setUser({Username, Password})
    }
  return (
    <div>
        <input type="text" placeholder='Username' value={Username} onChange={(e)=>setUsername(e.target.value)}/>
        {" "}
        <input type="text" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login