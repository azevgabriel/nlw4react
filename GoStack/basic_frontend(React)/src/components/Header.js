import React from 'react';

/*
    (props)
    props = [title, ...rest]

    Destruturaçâo da propriedade
    ({title})
*/

export default function Header({title}){
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}