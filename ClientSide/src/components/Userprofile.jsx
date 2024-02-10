import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ProfileModal from './ProfileModal';

function Userprofile() {
    const [data, setData] = useState({
        name: "",
        email: "",
    })
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    },)

    const handleUserProfile = async () => {
        const response = await fetch('http://localhost:4000/api/userprofile', {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `jwt ${localStorage.getItem('token')}`
            }
        })

        const dataResponse = await response.json()
        setData(dataResponse.data)
    }

    useEffect(() => {
        if (token) {
            handleUserProfile()
        }
    }, [])

    return (

        <>
            


            <section>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="row">

                        <div className="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <h1 class="page-header"><i class="glyphicon glyphicon-user"></i> Welcome {data?.name} !!</h1>
                                </div>

                                <div class="col-md-6">
                                    <div class="btn-group actions" role="group" aria-label="...">
                                        {/* New - Modal Button */}
                                        <ProfileModal />
                                    </div>
                                </div>

                            </div>
                            

                            <ol class="breadcrumb">
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li class="active">Profile</li>
                            </ol>
                            


                            <div className="row">


                                <div className="col-md-6">


                                    <p><strong>Name:</strong> {data?.name}</p>
                                    <p><strong>Email:</strong> {data?.email}</p>
                                    <p><strong>Role:</strong> {data?.role}</p>
                                    <p><strong>Gender:</strong> {data?.gender}</p>
                                    <p><strong>Age:</strong> {data?.age}</p>
                                    <p><strong>Interests:</strong></p>
                                    {/* <ul>
                                        {data.interests.map((interest, i) => (
                                            <li key={i}>{interest}</li>
                                        ))}
                                    </ul> */}


                                </div>
                                

                            </div>


                        </div>
                    </div>
                </div>
            </section >

            <footer>
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>

        </>
    )
}

export default Userprofile