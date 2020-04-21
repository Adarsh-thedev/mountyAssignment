//This route will add(create) a new room in the hotel with provided details
//While adding a new room we can have parameters such as room type, number of persons allowed(1 or 2)

const handleCreate = (db) => (req,res) => {
    const {type, max_persons, geyser, ac, wifi, breakfast, price} = req.body;

    if(!type || !max_persons || !price) {
        return res.status(400).json('Please fill details prpperly');
    }
    //the above 4 details must be, other 4 (ac, geyser, wifi, breakfast availability)
    //are by default false and can be updated later

    db.transaction(trx => {
        trx.insert ({
            type : type,
            max_persons : max_persons,
            ac : ac,
            geyser : geyser,
            wifi : wifi,
            breakfast : breakfast,
            price : price
        }).into('rooms')
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .catch(err => res.status(400).json('Could not feed details'));

    res.json('Successful');
}

module.exports = {
    handleCreate
}