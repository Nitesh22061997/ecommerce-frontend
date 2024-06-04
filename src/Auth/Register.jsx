import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import "../../src/styles/AuthStyles.css"


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${import.meta.env.VITE_URL}/api/v1/auth/register`, {
                name,
                email,
                password,
                phone,
                address,
                answer
            })

            if (res && res.data.success) {
                // toast.success(res.data && res.data.message)
                toast(res.data && res.data.message)
                navigate("/login")
            }
            else {
                // toast.error(res.data.message)
                toast(res.data.message)

            }
        } catch (error) {
            console.log(error);
            // toast.error("Something went wrong")
            toast("Something went wrong")
        }
    }

    return (
        <Layout title="Register - Ecommer App">
            <div className="form-container" >
                <form onSubmit={handleSubmit}>
                    <h4 className="title">REGISTER FORM</h4>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Enter Your Name"
                            required
                            autoComplete='name'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                            autoComplete='email'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                            autoComplete='password'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder="Enter Your Phone"
                            required
                            autoComplete='phone'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputAddress"
                            placeholder="Enter Your Address"
                            required
                            autoComplete='address'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputAnswer"
                            placeholder="What is your favorite sport"
                            required
                            autoComplete='answer'
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        REGISTER
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;