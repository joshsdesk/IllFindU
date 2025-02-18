import React from "react";

interface CandidateProps {
  avatar: string;
  name: string;
  username: string;
  location: string;
  email: string;
  company: string;
  profileUrl: string;
  onAccept: () => void;
  onReject: () => void;
}

const CandidateCard: React.FC<CandidateProps> = ({
  avatar,
  name,
  username,
  location,
  email,
  company,
  profileUrl,
  onAccept,
  onReject,
}) => {
  return (
    <div className="candidate-card">
      <img src={avatar} alt={name} className="candidate-avatar" />
      <h2>{name}</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Email:</strong> {email || "N/A"}</p>
      <p><strong>Company:</strong> {company || "N/A"}</p>
      <a href={profileUrl} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
      <div className="actions">
        <button className="accept-btn" onClick={onAccept}>+</button>
        <button className="reject-btn" onClick={onReject}>-</button>
      </div>
    </div>
  );
};

export default CandidateCard;
