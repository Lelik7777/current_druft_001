import {Input} from './components/Input';
import React, {useState} from 'react';
import {Button} from './components/Button';

export type ValueType = {
    max: number;
    min: number;
}
type PropsType = {}
export const Block = ({}: PropsType) => {
    const [value, setValue] = useState<ValueType>({
        max: 0,
        min: 0,
    });
    const changeMaxValue = (max: number) => {
        debugger
        setValue({...value, max});
        console.log(value);
    }
    const changeMInValue = (min: number) => {
        setValue({...value, min})
    }
    return (
        <div>
            <div><Input type={'number'} value={value.min} changeValue={changeMInValue}/>
                <span>mix value</span></div>
            <div><Input type={'number'} value={value.max} changeValue={changeMaxValue}/>
                <span>max value</span></div>
            {/*<Button title={'+'}/>*/}
        </div>
    )
}
