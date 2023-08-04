
import React, { useEffect, useState } from 'react';
import moment from 'moment';


const QuranCountdown = () => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
      const today = moment();
      const nextRamadanStart = getNextRamadanStartDate(today.year());
  
      const daysLeft = nextRamadanStart.diff(today, 'days');
      setCountdown(daysLeft);
    }, []);
  
    // Function to calculate the start date of the next Ramadan
    const getNextRamadanStartDate = (currentYear) => {
      // This function calculates the start date of Ramadan using a specific algorithm
      // You can replace this with your own method to determine the start date of Ramadan
  
      // Assuming Ramadan starts on the 1st of the 9th month (Islamic calendar)
      const ramadanStart = moment().year(currentYear).month(2).date(10);
  
      // If the current date is after the calculated start date, set the start date to next year
      if (moment().isAfter(ramadanStart)) {
        ramadanStart.add(1, 'year');
      }
  
      return ramadanStart;
    };
  
    return (
        //i will dynamiclly update the ramadan year at later date
        
            <div className='counter-section justify-center m-auto text-center w-[400px] md:max-w-[1240px]'>
              <h3 className='counter-header text-white'>Road to Ramadan 1445</h3>
              <h1 className='quran-counter text-white'>{countdown} Days </h1>
              <p className='reflection'>During Ramadan the believers get busy seeking Allah's mercy, forgiveness, and protection from Hellfire.</p>
            </div>
      
        
    )
}
export default  QuranCountdown