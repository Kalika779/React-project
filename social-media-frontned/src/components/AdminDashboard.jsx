import React from 'react';

const AdminDashboard = ({ submissions }) => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {submissions.map((submission) => (
                    <li key={submission._id}>
                        <h3>{submission.name}</h3>
                        <p>Social Media Handle: {submission.socialMediaHandle}</p>
                        <div>
                            {submission.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={`http://localhost:5000/${image}`}
                                    alt={`Uploaded pic ${index}`}
                                    style={{ width: '100px', marginRight: '10px' }}
                                />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;