import './App.css';
import Card from './Card';

const App = () => {
  const cards = ['1', '2', '3', '4', '5'];

  const cardsList = cards.map((card, i) => {
    return <Card card={card} index={i} key={i}/>
  });

  return (
    <div className="app">
      <h2 className="title">You will learn a lot</h2>
      <p className="subtitle">Well, it can teach you over 600 skills</p>
      <div className="container">
        {cardsList}
      </div>
      
    </div>
  );
}

export default App;
