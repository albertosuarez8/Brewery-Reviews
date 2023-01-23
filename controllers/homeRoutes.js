const router = require('express').Router();
const { User,} = require('./models/');

// GET all User posts for homepage

router.get('/', async (req, res) => {
    try {
    const dbUserData = await Post.findAll({
        include: [
            {
                model: User,
            }
        ]
    })

    }
})

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;