import './App.css'
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from 'react';

const NewPerson = ({done}: {done: () => void}) => {
  const [name, setName] = useState('');
  const save = useMutation(api.person.newPerson);

  return <>
    <div>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
    <button onClick={() => {
      void (async () => {
        await save({person: {name}});
        done();
      })();
    }}>Save</button>
  </>
};

function App() {
  //const tasks = useQuery(api.tasks.get);
  const [editing, setEditing] = useState(false);

  return (
    <div className="App">
      {editing ?
      <NewPerson done={() => setEditing(false)} />
      :
      <>
        <button onClick={() => setEditing(true)}>New Person</button>
      </>
    }
    </div>
  );
}

export default App
