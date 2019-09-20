const express = require('express');
const MusicController = require('./controllers/MusicController')

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ test: 'Test' })
});

routes.get('/musics', MusicController.index)
routes.post('/add', MusicController.store);
routes.delete('/delete/:id', MusicController.remove);

module.exports = routes