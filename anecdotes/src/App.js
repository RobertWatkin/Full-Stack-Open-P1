import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );
  // the map function on arrays uses a function which runs forEach of the values in the array. The output is a new array. In this scenario we are setting all to 0
  const [votes, setVotes] = useState(anecdotes.map((value) => 0));

  const nextAnecdote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const vote = () => {
    const newVotes = [...votes];
    console.log("New votes " + newVotes);
    newVotes[selected] += 1;
    console.log("Original votes " + votes);
    setVotes(newVotes);
    console.log("New votes " + newVotes);
  };

  console.log(selected);

  let max = Math.max(...votes);
  let maxIndex = votes.indexOf(max);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => vote()}>vote</button>
      <button onClick={() => nextAnecdote()}>next anecdote</button>

      <h2>Anecdote With The Most Votes</h2>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[maxIndex]} votes</p>
    </div>
  );
};

export default App;
