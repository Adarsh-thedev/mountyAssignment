//This route will be used to delete a room from the hotel records

const deleteRoom = (db) => (req,res) => {
    const {room_num} = req.body;

    db('rooms')
    .where('room_num', room_num)
    .del();

    res.json(`Deleted room with room number = ${room_num}`);
}

module.exports = {
    deleteRoom
}