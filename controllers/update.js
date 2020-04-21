//This route will be used to update the details of a room
//Ex - If a room did not have ac/geyser in it previously, and has been installed now, it will updae the status for the same

const updateAcStatus = (db) => (req,res) => {
    const {room_num,ac} = req.body;
    db('rooms').where('room_num', '=', room_num)
    .update('ac', ac)
    //.then(data => console.log(data))
    .catch(err => res.status(400).json('Could not update'));
    res.send('Done');
}

const updateGeyserStatus = (db) => (req,res) => {
    const {room_num,geyser} = req.body;
    db('rooms').where('room_num', '=', room_num)
    .update('geyser', geyser)
    .catch(err => res.status(400).json('Could not update'));
    res.send('Done');
}

const updateWifiStatus = (db) => (req,res) => {
    const {room_num,wifi} = req.body;
    db('rooms').where('room_num', '=', room_num)
    .update('wifi', wifi)
    .catch(err => res.status(400).json('Could not update'));
    res.send('Done');
}

const updateBreakfastStatus = (db) => (req,res) => {
    const {room_num,breakfast} = req.body;
    db('rooms').where('room_num', '=', room_num)
    .update('breakfast', breakfast)
    .catch(err => res.status(400).json('Could not update'));
    res.send('Done');
}

module.exports = {
    updateAcStatus,
    updateGeyserStatus,
    updateWifiStatus,
    updateBreakfastStatus
}