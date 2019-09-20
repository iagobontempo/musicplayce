import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container } from './styles'
import MusicListItem from './MusicListItem'

function MusicList() {
    const [list, setList] = useState()

    useEffect(() => {
        getList()
    }, [])

    async function getList() {
        const l = await axios.get('http://localhost:3333/musics')
        setList(l.data)
    }

    return (
        <Container>
            <div>
                Lista
                {list && list.map(l => (
                    <MusicListItem key={l._id} id={l._id} music={l.music} />
                ))}
            </div>
        </Container>
    )
}

export default MusicList
