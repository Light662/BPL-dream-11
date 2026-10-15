import type { Dispatch, SetStateAction } from "react";
import type { iplayer } from "../../Types/player";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface iSelectedPlayersProps {
  selectedPlayers: iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: iSelectedPlayersProps) => {

  if(selectedPlayers.length === 0){
    return(
      <h2 className="text-3xl text-gray-500 text-center">No Selected Players</h2>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-7">
      {selectedPlayers.map((Player: iplayer, ind) => {
        return (
          <SelectedPlayerCard
            key={ind}
            Player={Player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers = {setSelectedPlayers}
            coin = {coin}
            setCoin = {setCoin}
          ></SelectedPlayerCard>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
