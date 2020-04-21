//This route will add(create) a new room in the hotel with provided details
//While adding a new room we can have parameters such as room type, number of persons allowed(1 or 2)
const handleCreate = () => (req,res) => {
    const {room_num, room_type, max_persons, geyser, ac, price} = req.body;

    const details = {
        roomNumber : room_num,
        roomType : room_type,
        personsAllowed : max_persons,
        isAcAvailable : ac,
        isGeySerAvavilable : geyser,
        price : price
    }

    if(!room_num || !room_type || !max_persons || !price) {
        return res.status(400).json('Please fill details prpperly');
    }

    res.send(details);
}

module.exports = {
    handleCreate
}