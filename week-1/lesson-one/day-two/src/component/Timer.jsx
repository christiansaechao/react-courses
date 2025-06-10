import React, {useState, useEffect} from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const minutes = Math.floor((time % 360000) / 6000);

    const seconds = Math.floor((time % 6000) / 100);

    const ms = time % 100;

    const toggleStartAndStop = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () =>{
        setTime(0);
    }

    useEffect(()=>{
        let startTimer;
        if(isRunning){
            startTimer = setInterval(()=>setTime(time+1), 10);
        }

    }, [isRunning, time])

  return (
    <section className="flex justify-center">
        <h1>Stopwatch</h1>
    </section>
  )
}

export default Stopwatch