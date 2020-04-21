//This route will be used to update the details of a room
//Ex - If a room did not have ac/geyser in it previously, and has been installed now, it will updae the status for the same

const updateAcStatus = () => (req,res) => {
    const {ac} = req.body;
    if(ac === true) {
        return res.json('AC installed');
    } else if(ac === false) {
        return res.json('Removed AC');
    } else {
        return res.status(400).json('Not Updated');
    }
}

const updateGeyserStatus = () => (req,res) => {
    const {geyser} = req.body;
    if(geyser === true) {
        return res.json('Geyser installed');
    } else if(geyser === false) {
        return res.json('Removed Geyser');
    } else {
        return res.status(400).json('Not Updated');
    }
}

const updateWifiStatus = () => (req,res) => {
    const {wifi} = req.body;
    if(wifi === true) {
        return res.json('wifi installed');
    } else if(wifi === false) {
        return res.json('Removed wifi');
    } else {
        return res.status(400).json('Not Updated');
    } 
}

const updateBreakfastStatus = () => (req,res) => {
    const {breakfast} = req.body;
    if(breakfast === true) {
        return res.json('Breakfast added');
    } else if(breakfast === false) {
        return res.json('Breakfast no mre available in this room');
    } else {
        return res.status(400).json('Not Updated');
    } 
}

module.exports = {
    updateAcStatus,
    updateGeyserStatus,
    updateWifiStatus,
    updateBreakfastStatus
}