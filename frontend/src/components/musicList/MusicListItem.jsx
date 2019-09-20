import React from 'react'

import { ItemContainer } from './styles'
import { Button, Icon } from 'semantic-ui-react'

function MusicListItem(props) {
    return (
        <ItemContainer>
            <li key={props.id}>
                {props.music}
                <Button animated='vertical' onClick={props.remove} size='mini'>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                        <Icon name='trash' />
                    </Button.Content>
                </Button>
            </li>
        </ItemContainer>
    )
}

export default MusicListItem
