import React, { useState } from 'react'
import useInputState from '../../hooks/useInputState'

import { ItemContainer } from './styles'
import { Button, Icon, Input } from 'semantic-ui-react'

function MusicListItem(props) {
    const [isEditing, setEditing] = useState(false)
    const [input, handleChange] = useInputState(props.music)

    function handleSubmit(e) {
        e.preventDefault()
        props.edit(props.id, input)
        setEditing(false)
    }

    return (
        <ItemContainer>
            <li key={props.id}>
                {isEditing ? (
                    <form onSubmit={handleSubmit}>
                        <Input style={{ width: '70%', height: '28px' }} value={input} onChange={handleChange} />
                    </form>
                ) : (
                        <p>{props.music}</p>
                    )}
                <div style={{ display: 'flex' }}>
                    <Button animated='vertical' onClick={() => setEditing(!isEditing)} size='mini'>
                        <Button.Content hidden>Editar</Button.Content>
                        <Button.Content visible>
                            <Icon name='edit' />
                        </Button.Content>
                    </Button>
                    <Button animated='vertical' onClick={props.remove} size='mini' color='red'>
                        <Button.Content hidden>Deletar</Button.Content>
                        <Button.Content visible>
                            <Icon name='trash' />
                        </Button.Content>
                    </Button>
                </div>
            </li>
        </ItemContainer>
    )
}

export default MusicListItem
