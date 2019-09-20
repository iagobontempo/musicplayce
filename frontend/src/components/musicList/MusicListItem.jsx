import React from 'react'

function MusicListItem(props) {
    return (
        <li key={props.id}>
            {props.music}
        </li>
    )
}

export default MusicListItem
