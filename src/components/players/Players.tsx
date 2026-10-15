import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { iplayer } from "../../Types/player";
import AvailiablePlayers from "./AvailiablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<iplayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);

  const [selectedPlayers, setSelectedPlayers] = useState<iplayer[]>([]);

  const [availiableButton, setAvailiableButton] = useState(true);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl">
          {availiableButton ? "Availiable Players" : "selected"}
        </h2>
        <div>
          <button
            onClick={() => setAvailiableButton(true)}
            className={`btn rounded-r-none ${availiableButton ? "btn-success" : ""}`}
          >
            Available
          </button>

          <button
            onClick={() => setAvailiableButton(false)}
            className={`btn rounded-r-none ${!availiableButton ? "btn-success" : ""}`}
          >
            Selected
          </button>
        </div>
      </div>

      <div>
        {availiableButton ? (
          <AvailiablePlayers
            players={players}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></AvailiablePlayers>
        ) : (
          <SelectedPlayers
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default Players;
