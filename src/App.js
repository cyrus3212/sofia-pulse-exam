import './App.css';
import Card from './Card';

const App = () => {
  const cards = ['1', '2', '3', '4', '5'];

  const cardsList = cards.map((card, i) => {
    return <Card card={card} index={i} />
  });

  return (
    <div className="app">
      {cardsList}
    </div>
  );
}

export default App;
