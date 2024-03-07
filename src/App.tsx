import './App.css'

import NFTCard, { Card } from './components/card';

const cardData: Card = {
  title: "Equilibrium #3429",
  collectionName: "Equilibrium",
  description: "Our Equilibrium collection promotes balance and calm.",
  price: 0.041,
  daysLeft: 3,
  creatorName: "Jules Wyvern",
  creatorImageUrl: "",
  imageUrl: "",
};

const App: React.FC = () => {
  return (
    <div className="App">
      <NFTCard card={cardData} />
    </div>
  );
};
export default App
