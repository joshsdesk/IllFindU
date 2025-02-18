import React, { useState, useEffect } from "react";
import CandidateCard from "../components/CandidateCard";
import "../styles/App.css";

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [previousUsername, setPreviousUsername] = useState<string | null>(null);

  const fetchCandidate = async () => {
    setLoading(true);
    try {
      let newCandidate = null;
      let attempts = 0;

      while (!newCandidate || newCandidate.username === previousUsername) {
        const randomUserId = Math.floor(Math.random() * 10000000); // Get a random GitHub user ID
        const response = await fetch(`https://api.github.com/user/${randomUserId}`, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        });

        if (response.ok) {
          const details = await response.json();
          newCandidate = {
            avatar: details.avatar_url,
            name: details.name || "No Name",
            username: details.login,
            location: details.location || "Unknown",
            email: details.email || "N/A",
            company: details.company || "N/A",
            profileUrl: details.html_url,
          };
        }

        // Prevent infinite loop if GitHub keeps returning invalid users
        attempts++;
        if (attempts > 5) break;
      }

      setPreviousUsername(newCandidate?.username || null);
      setCandidate(newCandidate);
    } catch (error) {
      console.error("Error fetching candidate:", error);
      setCandidate(null);
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
          onReject={fetchCandidate} // Reject now ensures a new user
        />
      ) : (
        <p>No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
