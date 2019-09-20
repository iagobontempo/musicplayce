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
    },

    async edit(req, res) {
        const { NewMusic } = req.body;
        const id = req.params.id;
        const m = await Music.updateOne({ _id: id }, {
            music: NewMusic
        })

        return res.json(m)
    }
}