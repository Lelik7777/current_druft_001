import React from 'react';

type PropsType = {
    title:string
    onClick:()=>void;
    disable:boolean;
}
export const Button = ({title,onClick,disable}: PropsType) => {
    return (<
            button onClick={onClick} disabled={disable}>{title}</button>
    )
}