// import React, { useState } from 'react';
// import Select from 'react-select';

// export default function ProfileEdit() {
//     const [interests, setInterests] = useState([]);

//     const handleInterestChange = (selectedOptions) => {
//         console.log(selectedOptions);
//         setInterests(selectedOptions.map(option => option.value));
//     };

//     const interestOptions = [
//         { value: 'Sports', label: 'Sports' },
//         { value: 'Music', label: 'Music' },
//         { value: 'Art', label: 'Art' },
//         { value: 'Reading', label: 'Reading' },
//         { value: 'Cooking', label: 'Cooking' }
//     ];

//     return (
//         <div className='border border dark rounded container-fluid w-50 shadow-lg p-3 mb-5 bg-white rounded'>
//             <h3 className="text-center mb-4">Edit Profile</h3>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="fullName" className="col-form-label">Full Name:</label>
//                     <input type="text" className="form-control" id="fullName" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email" className="col-form-label">Email:</label>
//                     <input type="email" className="form-control" id="email" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="age" className="col-form-label">Age:</label>
//                     <input type="number" className="form-control" id="age" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="gender" className="col-form-label">Gender:</label>
//                     <select className="form-control" id="gender">
//                         <option>Select</option>
//                         <option>Male</option>
//                         <option>Female</option>
//                         <option>Other</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="interests" className="col-form-label">Interests:</label>
//                     <Select
//                         id="interests"
//                         isMulti
//                         options={interestOptions}
//                         onChange={handleInterestChange}
//                         closeMenuOnSelect={false}
//                     />
//                 </div>
//                 <div className="text-center">
//                     <button type="submit" className="btn btn-primary">Update</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const ProfileEdit = () => {
    const [interests, setInterests] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const baseUrl = 'http://localhost:4000/api/userprofile/edit';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        interests: []
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    //edit mode if id as a parameter
                    const response = await axios.get(`${baseUrl}/${id}`);
                    setFormData(response.data);
                }
            } catch (error) {
                console.error('Error fetching page details:', error.message);
            }
        };
        fetchData()
    }
        , [])



    const handleChange = (e) => {
        setFormData((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }));
    };

    const handleInterestChange = (selectedOptions) => {
        setInterests(selectedOptions.map(option => option.value));
    };

    const interestOptions = [
        { value: 'Sports', label: 'Sports' },
        { value: 'Music', label: 'Music' },
        { value: 'Art', label: 'Art' },
        { value: 'Reading', label: 'Reading' },
        { value: 'Cooking', label: 'Cooking' }
    ];

    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`${baseUrl}/${id}`, formData);
        alert('User updated successfully');
        navigate('/userprofile'); // Redirect to the userprofile page
    };

    return (
        <div className='border border dark rounded container-fluid w-50 shadow-lg p-3 mb-5 bg-white rounded'>
            <h3 className="text-center mb-4">Edit Profile</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="name" className="col-form-label">Full Name:</label>
                    <input type="text" className="form-control" value={formData.name} id="name" onChange={handleChange} name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-form-label">Email:</label>
                    <input type="email" className="form-control" value={formData.email} id="email" onChange={handleChange} name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="age" className="col-form-label">Age:</label>
                    <input type="number" className="form-control" value={formData.age} id="age" onChange={handleChange} name="age" />
                </div>
                <div className="form-group">
                    <label htmlFor="gender" className="col-form-label">Gender:</label>
                    <select className="form-control" value={formData.gender} id="gender" onChange={handleChange} name="gender">
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="interests" className="col-form-label">Interests:</label>
                    <Select
                        id="interests"
                        isMulti
                        options={interestOptions}
                        onChange={handleInterestChange}
                        closeMenuOnSelect={false}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" onClick={handleUpdate} className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
}

export default ProfileEdit;
