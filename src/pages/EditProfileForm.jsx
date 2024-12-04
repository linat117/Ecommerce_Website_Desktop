import { useState, useEffect } from 'react';

const EditProfileForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        name: { firstname: '', lastname: '' },
        address: { city: ''}
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setFormData(storedUser);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://fakestoreapi.com/users/7', {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((json) => {
            // Update localStorage after successful update
            localStorage.setItem('user', JSON.stringify(formData));
            alert('Profile updated successfully');
        })
        .catch((error) => alert('Failed to update profile'));
    };

    return (
        <div>
            <h2 className="text-[16px] font-poppins font-semibold text-red-600 mb-4">Edit Your  Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='flex space-x-8 '>
                    <div>
                        <p>First Name</p>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-[26rem] px-4 py-2 mt-[0.5rem] bg-gray-100  rounded-sm"
                />
                <p className='mt-[1rem]'>Email</p>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-[26rem] px-4 py-2 mt-[0.5rem] bg-gray-100  rounded-sm"
                />
                </div>
                <div>
                    <p>Last  Name</p>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-[26rem] px-4 py-2 mt-[0.5rem] bg-gray-100  rounded-sm"
                />
                <p className='mt-[1rem]'>Address</p>
                <input
                    type="text"
                    name="name.firstname"
                    value={formData.name.firstname}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-[26rem] px-4 py-2 mt-[0.5rem] bg-gray-100  rounded-sm"
                />
                </div>
                </div>
                <div className='space-y-3'>
                    <p>Password Changes</p>
                <input
                    type="text"
                    name="name.lastname"
                    value={formData.name.lastname}
                    onChange={handleChange}
                    placeholder="Current Password"
                    className="w-[54rem] px-4 py-2 mt-[0.5rem] bg-gray-100  rounded-sm"
                />
                <input
                    type="text"
                    name="name.lastname"
                    value={formData.name.lastname}
                    onChange={handleChange}
                    placeholder="New Password"
                    className="w-[54rem] px-4 py-2 mt-[0.5rem] bg-gray-100  rounded-sm"
                />
                 <input
                    type="text"
                    name="name.lastname"
                    value={formData.name.lastname}
                    onChange={handleChange}
                    placeholder="Confirm New Password"
                    className="w-[54rem] px-4 py-2 mt-[0.5rem] bg-gray-100  rounded-sm"
                />
                </div>
                <div className='ml-[37.3rem]'>
                <button className="px-7 font-poppins text-[14px]">Cancel</button>
                <button type="submit" className="w-[10rem] py-2 bg-red-600 text-white font-poppins text-[14px] rounded-md">
                    Save Changes
                </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;
