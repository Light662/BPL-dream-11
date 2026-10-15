import type { Dispatch, SetStateAction } from "react";
import type { iplayer } from "../../Types/player";
import PlayerCard from "./PlayerCard";
interface iAvailableProps {
  players: iplayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: iplayer[]
  setSelectedPlayers: Dispatch<SetStateAction<iplayer[]>>
}

const AvailiablePlayers = ({players , coin, setCoin, selectedPlayers, setSelectedPlayers}:iAvailableProps) => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-7">
            {players.map((player:iplayer, ind: number) => {
                return (
                  <PlayerCard
                    key={ind}
                    player={player}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                  ></PlayerCard>
                );
            })}
        </div>
    );
};

export default AvailiablePlayers;