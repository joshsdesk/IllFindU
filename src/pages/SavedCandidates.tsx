import React, { useState, useEffect } from "react";
import "../styles/App.css";

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(storedCandidates);
  }, []);

  const removeCandidate = (username: string) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.username !== username);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div className="container">
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <div className="saved-candidates-grid">
          {savedCandidates.map((candidate) => (
            <div className="candidate-card" key={candidate.username}>
              <img src={candidate.avatar} alt={candidate.name} className="candidate-avatar" />
              <h2>{candidate.name}</h2>
              <p><strong>Username:</strong> {candidate.username}</p>
              <p><strong>Location:</strong> {candidate.location}</p>
              <p><strong>Email:</strong> {candidate.email || "N/A"}</p>
              <p><strong>Company:</strong> {candidate.company || "N/A"}</p>
              <a href={candidate.profileUrl} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
              <div className="button-container">
                <button className="remove-btn" onClick={() => removeCandidate(candidate.username)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
