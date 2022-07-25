import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data/data'

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <>
    <Navbar/>
    <section>
    {cards}
    </section>
    </>
  );
}

export default App;
