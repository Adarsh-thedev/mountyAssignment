//This route will add(create) a new room in the hotel with provided details
//While adding a new room we can have parameters such as room type, number of persons allowed(1 or 2)

const handleCreate = () => (req,res) => {
    const {room_num, room_type, max_persons, geyser, ac, wifi, breakfast, price} = req.body;

    const details = {
        roomNumber : room_num,
        roomType : room_type,
        personsAllowed : max_persons,
        isAcAvailable : ac,
        isGeyserAvavilable : geyser,
        wifiConnectivity : wifi,
        isbreakfastIncluded : breakfast,
        price : price
    }

    if(!room_num || !room_type || !max_persons || !price) {
        return res.status(400).json('Please fill details prpperly');
    }
    //the above 4 details must be, other 4 (ac, geyser, wifi, breakfast availability)
    //are by default false and can be updated later

    res.send(details);
}

module.exports = {
    handleCreate
}