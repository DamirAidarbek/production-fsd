import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { countActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue';

export const Counter = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        console.log('increment');
        dispatch(countActions.increment());
    };

    const decrement = () => {
        console.log('decrement');
        dispatch(countActions.decrement());
    };

    return (
        <div>
            <h1>{value}</h1>
            <Button
                onClick={increment}
            >
                increment
            </Button>
            <Button
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
