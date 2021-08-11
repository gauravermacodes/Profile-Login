import React , {useState} from 'react'
import Card from "../UI/Card";
import './LogIn.css'

const LogIn = () => {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [valid,setvalid]=useState(true);

    const usernameHandler = event =>{
        setusername(event.target.value);
    }
    const passwordHandler = event =>{
        setpassword(event.target.value);
    }
    const loginHandler = ()=>{
        if(username.trim().length === 0 || password.trim().length === 0){
            setvalid(false)
        }
        else{
            setvalid(true)
        }
        
    }



    return (
        <Card>
        <div className='login'>
            <h2>Log In</h2>
            <input onChange={usernameHandler} value={username} type="text" placeholder='username' />
            <input onChange={passwordHandler} value={password} type="password" placeholder='password'/>
            {!valid && <h4>Error! Input cant be empty </h4>}
            <button onClick={loginHandler}>Log In</button>
        </div>

        </Card>
    )
}

export default LogIn
