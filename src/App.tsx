import './App.css'

import NFTCard, { Card } from './components/card';

const cardData: Card = {
  title: "Equilibrium #3429",
  collectionName: "Equilibrium",
  description: "Our Equilibrium collection promotes balance and calm. + Meteors! ",
  price: 0.041,
  daysLeft: 3,
  creatorName: "Jules Wyvern",
  creatorImageUrl: "https://raw.githubusercontent.com/keyule/Frontend-Mentor-NFT-Preview-Card/main/src/images/image-avatar.png",
  imageUrl: "https://raw.githubusercontent.com/keyule/Frontend-Mentor-NFT-Preview-Card/main/src/images/image-equilibrium.jpg",
};

const App: React.FC = () => {
  return (
    <div className="App">
      <NFTCard card={cardData} />
    </div>
  );
};
export default App
