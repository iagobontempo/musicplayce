import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MusicListItem from './MusicListItem'
import useInputState from '../../hooks/useInputState'

import { Container, Wrapper } from './styles'
import { Input, Divider, Icon } from 'semantic-ui-react'


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
        await axios.post('http://localhost:3333/add', { music: input }).then(setReload(!reload))
    }

    async function remove(id) {
        await axios.delete(`http://localhost:3333/delete/${id}`).then(setReload(!reload))
    }

    function handleSubmit(e) {
        e.preventDefault()
        add()
        resetInput()
    }

    return (
        <Container>
            <Wrapper>
                <section>
                    {list && list.map(l => (
                        <MusicListItem key={l._id} id={l._id} music={l.music} remove={() => remove(l._id)} />
                    ))}
                </section>
                <Divider style={{ width: 291 }} horizontal fluid>
                    <Icon name='plus' />
                </Divider>
                <div style={{ paddingTop: '10px' }}>
                    <form onSubmit={handleSubmit}>
                        <Input action='Adicionar' placeholder='Adicione uma musica...'
                            value={input} onChange={handleChange} required />
                    </form>
                </div>
            </Wrapper>
        </Container>
    )
}

export default MusicList
