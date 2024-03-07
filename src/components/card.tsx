import { Meteors } from "./ui/meteors";
import React from 'react';

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
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                        <img className="w-full" src={card.imageUrl} alt={`NFT ${card.title}`} />
                        <div className="px-6 py-4">
                            <h2 className="font-bold text-xl mb-2">{card.title}</h2>
                            <p className="text-blue-300 text-base">{card.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{card.price} ETH</span>
                            <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{card.daysLeft} days left</span>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex items-center">
                            <img className="w-8 h-8 rounded-full mr-2" src={card.creatorImageUrl} alt={`Creator ${card.creatorName}`} />
                            <span className="text-sm">Creation of {card.creatorName}</span>
                        </div>
                    {/* Meaty part - Meteor effect */}
                    <Meteors number={50} />
                </div>
            </div>
        </div>
    );
}

export default NFTCard;