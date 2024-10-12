import React from 'react';

const Leaderboard = ({ users, claimPoints }) => {
    return (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={user._id}>
                        {index + 1}. {user.name} - {user.points} points
                        <button onClick={() => claimPoints(user._id)}>Claim Points</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;