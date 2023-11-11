import React,{ useState,useContext } from 'react'
import roomContext from '../context/roomContext'
import { useNavigate } from "react-router-dom";
// import img from './workmanagement.png'

export default function Login() {
    const context = useContext(roomContext)
    const { setname } = context

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    // const history = useHistory()
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3001/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify({input: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.autoken);
            navigate("/doctors");
        }
        else{
            alert("invalid credentials")
        }
        setname(credentials.email)
        setcredentials({email:"",password:""})
    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    {/* <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} ariax -describedby="emailHelp" /> */}
                    <input type="text" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
