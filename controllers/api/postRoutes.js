const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/post', async (req, res) => {
    try {
        let x = await Post.findAll();
        x.map(x=> {
            x.image = Buffer.from(x.image).toString('base64');
        })
        res.status(200).json(x);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        // const user = await User.findOne({ where: { username: req.session.email } });
        const postData = await Post.create({
            description: req.body.description,
            stadium: req.body.stadium,
            rating: req.body.rating,
            section: req.body.section,
            image: Buffer.from(req.body.image, 'base64'),
            // user_id: user.id,
            date: new Date(),
        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/update', async (req, res) => {
    try {
        const post = await Post.findByPk(req.body.id);
        post.update({
            description: req.body.description,
            stadium: req.body.stadium,
            rating: req.body.rating,
            section: req.body.section,
            image: req.body.image,
            // user_id: user.id,
            date: new Date(),
        });
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;