const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User }],
        })
        const posts = postData.map((project) => project.get({ plain: true }));
        posts.map(x=> {
            x.image = Buffer.from(x.image).toString('base64');
        })
        for (z = 0; z < posts.length; z++) {
            let splitImage = posts[z].image.split("dataimage/pngbase64");
            let newImage = 'data:image/png;base64,' + splitImage[1];
            posts[z].image =  newImage.slice(0,-1);
        }
        res.render('home', {
            posts,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    if (req.session.logged_in) {
        const user = await User.findOne({ where: { email: req.session.email } });
        const postData = await Post.findAll({ where: { user_id: user.id } });
        const posts = postData.map((project) => project.get({ plain: true }));
        posts.map(x=> {
            x.image = Buffer.from(x.image).toString('base64');
        })
        for (z = 0; z < posts.length; z++) {
            let splitImage = posts[z].image.split("dataimage/pngbase64");
            let newImage = 'data:image/png;base64,' + splitImage[1];
            posts[z].image =  newImage.slice(0,-1);
        }
        res.render('dashboard', {
            logged_in: req.session.logged_in,
            posts
        });
        return;
    }
    res.render('login');
})

router.get('/dashboard/newpost', async (req, res) => {
    try {
        res.render('newpost');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard/newpost/createpost', async (req, res) => {
    const stadium = req.query.stadium;
    const section = req.query.section;
    res.render('createpost', {
        postDetail: {stadium: stadium, section: section}
    });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/search', async (req, res) => {
    try {
        res.render('search');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;