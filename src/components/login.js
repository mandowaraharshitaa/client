import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {
    const navigate = useNavigate()


    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log(userName, password)

     
                    // if (res.data.user.type === "USER") {
                    //     navigate('/home')
                    // }
                    // if (res.data.user.type === "SELLER") {
                    navigate('/get/products')
                    // }
                }
         
    

    return (
        <div style={{
            display: 'flex',
            boxShadow: '1px 1px 1px 1px rgb(0 0 0 / 16%)',
            justifyContent: 'center',
            margin: '50px 70px',
            padding: '30px',
        }}>
            <div>
                <h1> LOGIN PAGE</h1>
                <div><Link to="/signup"> SIGNUP </Link> </div>
                USERNAME -
                <input type="text" value={userName} onChange={(e) => {
                    setUserName(e.target.value)
                }} />   <br />  <br />
                PASSWORD -
                <input type="text" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />   <br />  <br />

                <button onClick={handleLogin}> SUBMIT </button>
            </div>
        </div>
    )
}

export default Login