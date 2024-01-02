import onclickController from "./onclickController.js";

const getAllClicks = async (req, res) => {
    try {
        const errorMessage = req.query.error;
        const [error, clicks] = await contactmeController.getAllContacts();
        if (error) {
            return res.status(500).json({ error: error });
        }
        res.status(200).json({ clicks, errorMessage});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const getClicksById = async (req, res) => {
    const id = req.params.id;
    try {
        const [error, click] = await onclickController.getClicksById(id);
        if (error) {
            return res.status(404).json({ error: error });
        }
        res.status(200).json({ click });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const updateClick = async (req, res) => {

    const { _id, time, clickedUrl, userinfo, componentInfo } = req.body;

    try {
        const [error, click] = await onclickController.updateClick(_id, time, clickedUrl, userinfo, componentInfo);

        if (error) {
            return res.status(404).json({ error: "No record found with that ID." });
        }

        return res.status(200).json({ success: true, click });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const removeClick = async (req, res) => {
    const { id } = req.params;

    try {
        const [error, click] = await onclickController.removeClick(id);

        if (error) {
            return res.status(404).json({ error: "No record found with that ID." });
        }

        return res.status(200).json({ success: true, click });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const createClick = async (req, res) => {
    const { time, clickedUrl, userinfo, componentInfo } = req.body;

    try {
        const [error, click] = await onclickController.createClick(time, clickedUrl, userinfo, componentInfo);

        if (error) {
            return res.status(500).json({ error: error });
        }
        res.status(200).json({ click, errorMessage, session: req.session });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}


export default {
    getAllClicks,
    getClicksById,
    updateClick,
    removeClick,
    createClick
};