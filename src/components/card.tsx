import { Meteors } from "./ui/meteors";
import React from 'react';
import ViewIcon from '../images/icon-view.svg'; 
import ethIcon from '../images/icon-ethereum.svg';
import clockIcon from '../images/icon-clock.svg';

export type Card = {
    title: string;
    collectionName: string;
    description: string;
    price: number;
    daysLeft: number;
    creatorName: string;
    creatorImageUrl: string;
    imageUrl: string;
};

export type NFTCardProps = {
    card: Card;
};

const NFTCard: React.FC<NFTCardProps> = ({ card }) => {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-950">
            <div className=" w-full relative max-w-xs">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800 p-4 h-full overflow-hidden rounded-2xl">
                        <a href="#">
                            <div className="relative group">
                                <img src={card.imageUrl} alt={`NFT ${card.title}`} className="w-full rounded-2xl" />
                                <div className="absolute inset-0 bg-emerald-400 rounded-2xl bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <img src={ViewIcon} alt="View Icon" className="w-8 h-8 text-blue-800" />
                                </div>
                            </div>
                        </a>
                    <div className="py-5">
                        <a href = "#">
                            <h5 className="text-xl font-bold text-white hover:text-emerald-400 transition-colors duration-300 mb-5">{card.title}</h5>
                        </a>
                        <p className="text-blue-300 text-sm">{card.description}</p>
                    </div>
                    <div className="flex justify-between mt-2 mb-4">
                        <div className="flex items-center">
                            <img src= {ethIcon} alt='ETH Icon'/>
                            <p className = "ml-2 text-emerald-200">{card.price} ETH</p>
                        </div>
                        <div className="flex items-center">
                            <img src= {clockIcon} alt='Clock Icon'/>
                            <p className = "ml-2 text-blue-300">{card.daysLeft} days left</p>
                        </div>
                    </div>
                    <div className= "border-t border-grey-100 border-opacity-50 pt-2">
                    <div className="flex items-center">
                        <img src={card.creatorImageUrl} alt={`Creator ${card.creatorName}`} className="border-white border w-8 rounded-full mr-3" />
                        <div>
                        <span className="text-sm font-bold text-blue-300">Creation of </span>
                        <span className="text-sm text-white">{card.creatorName}</span>
                        </div>
                    </div>
                    </div>
                    {/* Meaty part - Meteor effect */}
                    <Meteors number={50} />
                </div>
            </div>
        </div>
    );
}

export default NFTCard;