import React,{useState} from 'react';
import OddEvenResult from './OddEvenResult';

const Counter = (props) => {
    console.log(props)

    // 0에서 출발
    // 1씩 증가하고
    // 1씩 감소하는
    // count 상태

    console.log("카운터 호출!!")

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(props.initialValue);

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
    }

    const onIncrease2 = () => {
        setCount2(count2 + 1);
    }

    const onDecrease2 = () => {
        setCount2(count2 - 1);
    }
    
    const onIncrease3 = () => {
        setCount3(count3 + 1);
    }

    const onDecrease3 = () => {
        setCount3(count3 - 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>

            <h2>{count2}</h2>
            <button onClick={onIncrease2}>+</button>
            <button onClick={onDecrease2}>-</button>

            <h2>{count3}</h2>
            <button onClick={onIncrease3}>+</button>
            <button onClick={onDecrease3}>-</button>
            <OddEvenResult count={count} />
        </div>
    )

}

Counter.defaultProps = {
    initialValue: 0,
};

export default Counter;