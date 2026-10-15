import {useState, type Dispatch, type SetStateAction } from "react";
import type { iplayer } from "../../Types/player";
import { FaUser, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

interface iPlayerCardProps {
  player: iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<iplayer[]>>;
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: iPlayerCardProps) => {
  
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = ()=> {

    const newCoinPrice = coin - player.price
    if(newCoinPrice >= 0){
      setIsSelected(true);
      setCoin(newCoinPrice)
      toast.success(`${player.playerName} is purchased successfully`)
    }
    else(
      toast.error("inefficient fund")
    )

    setSelectedPlayers([...selectedPlayers, player])

  }

  return (
    <div className="card bg-base-100 overflow-hidden border border-base-300 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <span className="badge badge-primary absolute top-4 right-4 font-semibold">
          {player.playerType}
        </span>
      </figure>

      <div className="card-body gap-4 p-5">
        {/* Player Name and Origin */}
        <div>
          <h2 className="card-title text-2xl font-bold">
            <FaUser className="text-primary text-lg" />
            {player.playerName}
          </h2>

          <p className="mt-2 flex items-center gap-2 text-sm text-base-content/60">
            <FaMapMarkerAlt />
            {player.origin}
          </p>
        </div>

        <div className="divider my-0" />

        {/* Player Details */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-base-200 p-3">
            <p className="text-xs text-base-content/60">Batting Style</p>
            <p className="mt-1 font-semibold text-sm">{player.battingType}</p>
          </div>

          <div className="rounded-xl bg-base-200 p-3">
            <p className="text-xs text-base-content/60">Bowling Style</p>
            <p className="mt-1 font-semibold text-sm">{player.bowlingStyle}</p>
          </div>
        </div>

        {/* Price and Action */}
        <div className="card-actions mt-1 flex items-center justify-between">
          <div>
            <p className="text-xs text-base-content/60">Player Price</p>
            <p className="text-2xl font-extrabold text-primary">
              ${player.price}
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleSelectPlayer()}
            className="btn btn-primary gap-2 rounded-xl"
            disabled = {isSelected}
          >
            <FaShoppingCart />
            {isSelected ? "Selected" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
