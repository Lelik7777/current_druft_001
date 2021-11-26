import React, {ChangeEvent} from 'react';

type PropsType = {
    type: string;
    value:number;
    changeValue:(v:number)=>void;
}
export const Input = ({type,value,changeValue,}: PropsType) => {

    const onChange = (e:ChangeEvent<HTMLInputElement>)=>changeValue(+e.currentTarget.value);
    return (
        <input type={type} onChange={onChange} value={value}/>
    )
}