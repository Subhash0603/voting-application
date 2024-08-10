import React, { useState } from 'react';
import './App.css';

function App() {
  const candidates = [
    { id: 1, name: 'Candidate 1', image: 'candidate-1.jpeg' },
    { id: 2, name: 'Candidate 2', image: 'candidate-2.jpg' },
    { id: 3, name: 'Candidate 3', image: 'candidate-3.jpeg' }
  ];

  const [votes, setVotes] = useState(candidates.map(() => 0));
  const [showResults, setShowResults] = useState(false); // Initially hide the results table

  const voteForCandidate = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  const totalVotes = votes.reduce((acc, current) => acc + current, 0);

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  return (
    <div className="App">
      <h1>Vote for Class Representative</h1>
      <div className="candidates">
        {candidates.map((candidate, index) => (
          <div key={candidate.id} className="candidate">
            <img src={candidate.image} alt={candidate.name} className="candidate-image" />
            <h2>{candidate.name}</h2>
            <button onClick={() => voteForCandidate(index)}>Vote</button>
          </div>
        ))}
      </div>
      <div className="results-toggle">
        <button onClick={toggleResults}>
          {showResults ? 'Hide Results' : 'View Results'}
        </button>
      </div>
      {showResults && (
        <div className="results">
          <h2>Results</h2>
          <table>
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={candidate.id}>
                  <td>{candidate.name}</td>
                  <td>{votes[index]}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total Votes</strong></td>
                <td><strong>{totalVotes}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
