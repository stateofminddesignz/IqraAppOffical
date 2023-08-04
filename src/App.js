import Navigation from './components/Navigation'
import QuranCountdown from './components/QuranCountdown';
import DhikrCard from './components/DhikrCard';
import { cardData } from './components/CardData';
import './App.css';
import FoundationCard from './components/FoundationCard';

function App() {
  return (
    <>
   
      <Navigation />
      <QuranCountdown />

      <h1 className=' flex items-center justify-center font-bold  text-2xl mt-7  text-white'>Daily Dhikr</h1>
      <div className='bg-gradient-to-t from-green-300 via-green-600 to-green-900 py-10 px-2'>
        <div className='flex  justify-center items-center m-auto max-w-[1240px] '>
          
         {cardData.map((card) => (
          <DhikrCard
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
           />
      ))}
        </div>
        </div>
        <FoundationCard />
   
    </>
    
  );
}

export default App;
