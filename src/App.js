import React from 'react';
import './App.css';

let App = ({onNumButtonClick, onOpButtonClick, count, clear, clearEvery, output, isDisabled}) => {
    return (
        <div className='App'>
            <div className={'calculator'}>
                <div>
                    <div className={'outputBlock'}>
                        <div className={'output'}>
                            {output}
                        </div>
                    </div>
                    <div className={'deleteBlock'}>
                        <button className={'button'} onClick={clearEvery}>CE</button>
                        <button className={'button'} onClick={clear}>C</button>
                    </div>
                </div>
                <div className={'inputBlock'}>
                    <button value={1} className={'button'} onClick={onNumButtonClick}>1</button>
                    <button value={2} className={'button'} onClick={onNumButtonClick}>2</button>
                    <button value={3} className={'button'} onClick={onNumButtonClick}>3</button>
                    <button value={'+'} className={'button'} onClick={onOpButtonClick}>+</button>
                    <button value={4} className={'button'} onClick={onNumButtonClick}>4</button>
                    <button value={5} className={'button'} onClick={onNumButtonClick}>5</button>
                    <button value={6} className={'button'} onClick={onNumButtonClick}>6</button>
                    <button value={'-'} className={'button'} onClick={onOpButtonClick}>-</button>
                    <button value={7} className={'button'} onClick={onNumButtonClick}>7</button>
                    <button value={8} className={'button'} onClick={onNumButtonClick}>8</button>
                    <button value={9} className={'button'} onClick={onNumButtonClick}>9</button>
                    <button value={'*'} className={'button'} onClick={onOpButtonClick}>*</button>
                    <button value={0} className={'button'} onClick={onNumButtonClick}>0</button>
                    <button value={'.'} className={'button'} onClick={onNumButtonClick}>.</button>
                    <button value={'='} className={'button'} onClick={count} disabled={isDisabled}>=</button>
                    <button value={'/'} className={'button'} onClick={onOpButtonClick}>/</button>
                </div>
            </div>
        </div>
    );
};

export default App;
