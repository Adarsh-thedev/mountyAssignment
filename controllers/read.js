//This route can be used as filter,
//For example if a user opts for a room that must have AC in it, we can return all the rooms which as ac = true;

const handleRead = () => (req,res) => {
    const {room_type, max_persons, ac, geyser} = req.body;

    res.json('Working');
}

module.exports = {
    handleRead
}