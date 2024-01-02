import onClickModel from "../../models/onClickModel.js";
import mongodb from "../../config/mongodb.js";

const getAllClicks = async () =>{
    try {
        const clicks = await onClickModel.find({});
        return [null, clicks];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

const getClicksById = async (id) =>{
    try {
        const click = await onClickModel.findById(id).exec();
        return [null, click];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

const updateClick = async (_id, time, clickedUrl, userinfo, componentInfo) =>{
    try {
        const click = await onClickModel.findById(_id);

        if (!click) {
            const error = "No record found with that ID.";
            return [error, null];
        }

        click.time = time || click.time;
        click.clickedUrl = clickedUrl || click.clickedUrl;
        click.userinfo = userinfo || click.userinfo;
        click.componentInfo = componentInfo || click.componentInfo;

        await click.save();

        return [null, click];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }

}

const removeClick = async (id) =>{  
    try {
        const click = await onClickModel.findById(id);

        if (!click) {
            const error = "No record found with that ID.";
            return [error, null];
        }

        await click.remove();

        return [null, click];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

const createClick = async (time, clickedUrl, userinfo, componentInfo) =>{
    try {
        const click = new onClickModel({
            time,
            clickedUrl,
            userinfo,
            componentInfo
        });

        await click.save();

        return [null, click];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}



export default {
    getAllClicks,
    getClicksById,
    updateClick,
    removeClick,
    createClick
};

