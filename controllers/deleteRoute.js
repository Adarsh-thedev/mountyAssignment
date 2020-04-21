//This route will be used to delete a room from the hotel records

const deleteRoom = () => (req,res) => {
    const room_num = req.body;
    res.json(`Deleted room with room number = ${room_num}`);
}

module.exports = {
    deleteRoom
}