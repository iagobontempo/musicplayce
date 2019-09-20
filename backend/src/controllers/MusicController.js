const Music = require('../models/Music')

module.exports = {
    async index(req, res) {
        const musics = await Music.find();
        return res.json(musics)
    },

    async store(req, res) {
        const { music } = req.body;
        const m = await Music.create({
            music: music
        })
        return res.json(m)
    },

    async remove(req, res) {
        const id = req.params.id;
        await Music.deleteOne({ _id: id })

        return res.json({ msg: 'ok' })

    }
}