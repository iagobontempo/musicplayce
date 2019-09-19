import React from 'react'
import axios from 'axios'

import { Container } from './styles'
import { Input } from 'semantic-ui-react'

function Main() {


    async function getList() {
        const list = axios.get('http://localhost:3333/musics')
        console.log(list)
    }

    return (
        <Container>
            <div>
                Lista
                <button onClick={() => getList()}>AAA</button>
            </div>
            <div>
                <Input action='Adicionar' placeholder='Adicione uma musica' />
            </div>
        </Container>
    )
}

export default Main
