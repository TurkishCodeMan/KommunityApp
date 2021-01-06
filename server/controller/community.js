const User = require("../models/User")
const Community = require("../models/Community");
const Activity = require("../models/Activity");
const Event = require("../models/Event")

const getAllUser = async (req, res, next) => {
    try {
        const Users = await User.find();
        return res.json(Users);
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })
    }
}

const getAllCommunity = async (req, res, next) => {
    try {
        const Communities = await Community.find();
        return res.json(Communities);
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })
    }
}

const getCommunityById = async (req, res, next) => {
    try {
        let communityID = req.params.id;
        const community = await Community.findOne({ _id: communityID });
        return res.json(community);
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })

    }
}

const getUserById = async (req, res, next) => {
    try {
        let userID = req.params.id;
        const user = await User.findOne({ _id: communityID });
        return res.json(user);
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })

    }
}

const createCommunity = async (req, res, next) => {
    try {
        console.log(req.body)
        let community = new Community({
            name: req.body.name,
            location: req.body.location,
            description: req.body.description
        })
        await community.save();
        //community.organizators.push(req.user._id)
        //  await community.save();
        return res.json(community)
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })

    }
}


const createActivity = async (req, res, next) => {
    try {
        console.log(req.body)
        let activity = new Activity({
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            organizer: "5ff5c07bb9236c05cc6e29c0"

        })
        await activity.save();

        //Activity oluşturan communitye kaydet
        const community = await Community.findOne({ _id: '5ff5c07bb9236c05cc6e29c0' });
        community.activities.push(activity._id);
        await community.save();

        return res.json(activity)
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })

    }
}

const subscribeCommunity = async (req, res, next) => {
    try {
        const community = await Community.findOne({ _id: req.params.id });
        community.members.push(req.user._id);
        await community.save();
        return res.json(community);
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })
    }
}
const subscribeActivity = async (req, res, next) => {
    try {
        const activity = await Activity.findOne({ _id: req.params.id });
        activity.participants.push(req.user._id);
        await activity.save();
        return res.json(activity)
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })
    }
}
const getRandomUser = async (req, res, next) => {
    try {
        var random = Math.floor(Math.random() * 10)
        const users = await User.find().skip(random).exec();
        return res.json(users)
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })
    }
}


//Kullanılması için her olaya bir event ekleyip denetlenebilir
const getUserEvents = async (req, res, next) => {
    try {
        let events = await Event.find({ userID: req.user._id });
        return res.json(events)
    } catch (error) {
        return res.json({ message: "Server Error" + error.message })
    }
}


module.exports = {
    getAllUser,
    getAllCommunity,
    getCommunityById,
    getUserById,
    createCommunity,
    createActivity,
    subscribeCommunity,
    subscribeActivity,
    getRandomUser,
    getUserEvents
}