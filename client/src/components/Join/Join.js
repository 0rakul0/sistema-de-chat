import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Nome" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <input placeholder="Sala" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} required />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">logar</button>
        </Link>
      </div>
    </div>
  );
}
