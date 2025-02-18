import React, { useState, useEffect } from "react";
import CandidateCard from "../components/CandidateCard";
import "../styles/App.css";

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCandidate = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.github.com/users?per_page=1", {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });

      const data = await response.json();
      if (data.length > 0) {
        const user = data[0];

        const userDetails = await fetch(user.url, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        });

        const details = await userDetails.json();

        setCandidate({
          avatar: details.avatar_url,
          name: details.name || "No Name",
          username: details.login,
          location: details.location || "Unknown",
          email: details.email || "N/A",
          company: details.company || "N/A",
          profileUrl: details.html_url,
        });
      } else {
        setCandidate(null);
      }
    } catch (error) {
      console.error("Error fetching candidate:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  return (
    <div className="container">
      <h1>Candidate Search</h1>
      {loading ? (
        <p>Loading candidate...</p>
      ) : candidate ? (
        <CandidateCard
          {...candidate}
          onAccept={() => {
            const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
            savedCandidates.push(candidate);
            localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
            fetchCandidate();
          }}
          onReject={fetchCandidate}
        />
      ) : (
        <p>No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
