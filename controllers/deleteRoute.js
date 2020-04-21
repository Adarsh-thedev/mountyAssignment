const deleteRoom = () => (req,res) => {
    const room_num = req.body;
    res.json(`Deleted room with room number = ${room_num}`);
}

module.exports = {
    deleteRoom
}