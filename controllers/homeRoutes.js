const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newpost', async (req, res) => {
    try {
        res.render('newpost');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newpost/createpost', async (req, res) => {
    const stadium = req.query.stadium;
    const section = req.query.section;
    res.render('createpost', {
        postDetail: {stadium: stadium, section: section}
    });
});


module.exports = router;