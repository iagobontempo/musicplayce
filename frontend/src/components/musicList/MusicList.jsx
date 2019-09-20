import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MusicListItem from './MusicListItem'
import useInputState from '../../hooks/useInputState'

import { Container } from './styles'
import { Input } from 'semantic-ui-react'


function MusicList() {
    const [list, setList] = useState('')
    const [input, handleChange, resetInput] = useInputState('')
    const [reload, setReload] = useState(false)

    useEffect(() => {
        getList()
    }, [reload])

    async function getList() {
        const l = await axios.get('http://localhost:3333/musics')
        setList(l.data)
    }

    async function add() {
        await axios.post('http://localhost:3333/add', { music: input })
    }

    async function remove(id) {
        await axios.delete(`http://localhost:3333/delete/${id}`)
    }

    function handleSubmit(e) {
        e.preventDefault()
        add().then(setReload(!reload))
        resetInput()
    }

    return (
        <Container>
            <div>
                Lista
                {list && list.map(l => (
                    <MusicListItem key={l._id} id={l._id} music={l.music} />
                ))}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Input action='Adicionar' placeholder='Digite uma musica para adicionar'
                        value={input} onChange={handleChange} required />
                </form>
            </div>
        </Container>
    )
}

export default MusicList
