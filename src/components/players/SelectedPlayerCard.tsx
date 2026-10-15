import { type Dispatch, type SetStateAction } from 'react';
import { TbTrash } from 'react-icons/tb';
import type { iplayer } from '../../Types/player';

interface iSelectedPlayersCardProps {
    Player: iplayer
    selectedPlayers: iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<iplayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({
  Player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin
}: iSelectedPlayersCardProps) => {
  const handleSelectedPlayers = (player: iplayer) => {
    const restPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(restPlayers);

    const updatedCoinPrice = coin + player.price;
    setCoin(updatedCoinPrice);
  };

  return (
    <div
      className="flex justify-between gap-2 items-center border-2 border-gray-200 rounded-3xl py-2
          px-4"
    >
      <div className="flex gap-2">
        <img src={Player.playerImg} alt="" className="h-15 w-15" />
        <div>
          <h2 className="font-bold text-2xl">{Player.playerName}</h2>
          <p>{Player.playerType}</p>
        </div>
      </div>
      <span
        className="text-red-500 font-bold cursor-pointer"
        onClick={() => handleSelectedPlayers(Player)}
      >
        <TbTrash></TbTrash>
      </span>
    </div>
  );
};

export default SelectedPlayerCard;