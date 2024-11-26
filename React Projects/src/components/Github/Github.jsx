import React, { useEffect, useState } from 'react';
import "./Github.css"; // Custom CSS for the profile

const Github = () => {
    const [username, setUsername] = useState("");
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async (username) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error(`User not found!`);
            }
            const data = await response.json();
            setProfileData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser("Sanmit0804");
    }, []);

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSearch = () => {
        if (username) {
            fetchUser(username);
        }
    };

    return (
        <div className="container  github-profile-container ">
            <h1 className="header">GitHub Profile Finder</h1>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Enter GitHub username" 
                    value={username}
                    onChange={handleChange}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Find Profile</button>
            </div>

            {loading && <p className="loading-text">Loading...</p>}

            {error && <p className="error-text">{error}</p>}

            {profileData && (
                <div className="profile-card">
                    <img src={profileData.avatar_url} alt="Avatar" className="avatar" />
                    <div className="profile-details">
                        <h2 className="name">{profileData.name}</h2>
                        <p className="username">@{profileData.login}</p>
                        <p className="bio">{profileData.bio || 'No bio available'}</p>
                        <p className="location"><strong>Location:</strong> {profileData.location || 'Not available'}</p>
                        <p className="followers"><strong>Followers:</strong> {profileData.followers}</p>
                        <p className="following"><strong>Following:</strong> {profileData.following}</p>
                        <p className="repos"><strong>Public Repos:</strong> {profileData.public_repos}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Github;
