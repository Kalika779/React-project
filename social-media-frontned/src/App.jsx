import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubmissionForm from './components/SubmissionForm';
import AdminDashboard from './components/AdminDashboard';
import Leaderboard from './components/Leaderboard';
import './App.css';

const App = () => {
    const [submissions, setSubmissions] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchSubmissions = async () => {
        const response = await axios.get('http://localhost:5000/api/submissions');
        console.log("Response",response);
        setSubmissions(response.data);
    };

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
    };

    useEffect(() => {
        fetchSubmissions();
        fetchUsers();
    }, []);

    const claimPoints = async (userId) => {
        const response = await axios.post(`http://localhost:5000/api/users/claim/${userId}`);
        setUsers(response.data);
    };

    return (
        <div>
            <h1>User Submission Form</h1>
            <SubmissionForm fetchSubmissions={fetchSubmissions} />

            <AdminDashboard submissions={submissions} />
            <Leaderboard users={users} claimPoints={claimPoints} />
        </div>
    );
};

export default App;