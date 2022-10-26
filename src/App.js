import React, { useEffect, useState } from "react";
import pattern from './images/pattern-divider-desktop.svg';
import {ReactComponent as Dice} from './images/icon-dice.svg';

function App(){
    const [advice, setAdvice] = useState('');
    const [id, setId] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleClick = () => {
        setIsPending(true)

        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => {
                setAdvice(data.slip.advice)
                setId(data.slip.id)
                setIsPending(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(handleClick, [])

    return (
        <div className="app p-5 sm:p-0 h-screen w-full bg-dark-2 center font-display text-sm">
            <div className="box w-full sm:w-7/12 lg:w-2/6 bg-dark-1 rounded-2xl p-10 text-center relative">
                <p className="title text-neon uppercase tracking-base">Advice # { id }</p>
                <p className="advice text-2xl text-white my-4 leading-9">‘‘ { advice } ’’</p>
                <div><img src={ pattern } className="w-full my-7 object-cover"/></div>
                <div className="w-14 h-14 bg-neon rounded-full center absolute left-2/4 -bottom-6 -translate-x-2/4 cursor-pointer duration-200 hover:shadow-base" onClick={ handleClick }>
                    { !isPending && <Dice />}
                    { isPending && <Dice className="animate-rotate"/>}
                </div>
            </div>
        </div>
    )
}

export default App;