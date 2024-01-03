import onclickController from "./onclickController.js";

const getAllClicks = async (req, res) => {
    try {
        const errorMessage = req.query.error;
        const [error, clicks] = await onclickController.getAllClicks();
        if (error) {
            return res.status(500).json({ error: error });
        }
        res.status(200).json({ clicks, errorMessage});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}
const getclickstats = async (req, res) => {
    try {
        const errorMessage = req.query.error;
        const [error, data] = await onclickController.getAllClicks();
        if (error) {
            return res.status(500).json({ error: error });
        }

        const componentInfoOccurrences = {};
        const platformOccurrences = {};
        const languageOccurrences = {};
        const vendorOccurrences = {};

        // Iterar sobre todos los clicks
        data.forEach(click => {
            const componentInfo = click.componentInfo;
            const clickedUrl = click.clickedUrl;
            const platform = click.userinfo.platform;
            const language = click.userinfo.language;
            const vendor = click.userinfo.vendor;

            // Contar las ocurrencias de componentInfo y clickedUrl
            if (!componentInfoOccurrences[componentInfo]) {
                componentInfoOccurrences[componentInfo] = {};
            }
            componentInfoOccurrences[componentInfo][clickedUrl] = (componentInfoOccurrences[componentInfo][clickedUrl] || 0) + 1;

            // Contar las ocurrencias de plataformas
            platformOccurrences[platform] = (platformOccurrences[platform] || 0) + 1;

            // Contar las ocurrencias de language
            languageOccurrences[language] = (languageOccurrences[language] || 0) + 1;

            // Contar las ocurrencias de vendor
            vendorOccurrences[vendor] = (vendorOccurrences[vendor] || 0) + 1;
        });

        // Mostrar los resultados
        console.log("Ocurrencias de diferentes valores de componentInfo y clickedUrl:", componentInfoOccurrences);
        console.log("Ocurrencias de diferentes plataformas:", platformOccurrences);
        console.log("Ocurrencias de diferentes idiomas:", languageOccurrences);
        console.log("Ocurrencias de diferentes vendedores:", vendorOccurrences);

        res.status(200).json({
            componentInfoOccurrences,
            platformOccurrences,
            languageOccurrences,
            vendorOccurrences,
            errorMessage
        });

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
        res.status(200).json({success: true, click});
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
    createClick,
    getclickstats
};