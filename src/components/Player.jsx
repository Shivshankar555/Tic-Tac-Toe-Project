import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleInput(event) {
    setPlayerName(event.target.value);
  }

  let editedPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editedPlayerName = (
      <input
        className="input"
        type="text"
        required
        value={playerName}
        onChange={handleInput}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editedPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditing()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
