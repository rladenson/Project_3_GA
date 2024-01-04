const isAuthor = async (req, res, next) => {
    const id = req.params.id;
    const spot = await Spot.findById(id);
    if (!spot.author.equals(req.session.currentUser._id)) {
        return res.redirect(`/spots/${id}`);
    }
    next();
};

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.send(401);
    }
};

module.exports = {
    isAuthenticated,
    isAuthor,
}