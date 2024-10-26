import React from 'react'

const List = ({className, text, url}) => {
    return (
        
            <li className={className}>
                <a className='nav-item-link' href={url ? url : '/'}>{text}</a>
            </li>
        
    )
}

export default List;