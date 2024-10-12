import React, { useState } from 'react';
import axios from 'axios';

const SubmissionForm = ({ fetchSubmissions }) => {
    const [name, setName] = useState('');
    const [socialMediaHandle, setSocialMediaHandle] = useState('');
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        setImages(Array.from(e.target.files));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('socialMediaHandle', socialMediaHandle);
        images.forEach((image) => {
            formData.append('images', image);
        });

        await axios.post('http://localhost:5000/api/submissions', formData);
        setName('');
        setSocialMediaHandle('');
        setImages([]);
        fetchSubmissions(); // Refresh submissions
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Social Media Handle"
                value={socialMediaHandle}
                onChange={(e) => setSocialMediaHandle(e.target.value)}
                required
            />
            <input
                type="file"
                multiple
                onChange={handleImageChange}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SubmissionForm;