import contactmeController from "./contactmeController.js";


const  getAllContacts = async (req, res) =>{
    try {
        const errorMessage = req.query.error;
        const [error, contacts] = await contactmeController.getAllContacts();
        if (error) {
            return res.status(500).json({ error: error });
        }
        res.status(200).json({ contacts, errorMessage, session: req.session });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const getContactsById = async (req, res) => {
    const id = req.params.id;
    try {
        const [error, contact] = await contactmeController.getContactsById(id);
        if (error) {
            return res.status(404).json({ error: error });
        }
        res.status(200).json({ contact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}


const updateContact = async (req,res) =>{

    const { id, firstName, lastName, email, phoneNumber, topic, message, answered, conctactDate,followup,closed } = req.body;

    try {
        const [error, contact] = await contactmeController.updateContact(id, firstName, lastName, email, phoneNumber, topic, message, answered, conctactDate,followup,closed);

        if (error) {
            return res.status(404).json({ error: "No record found with that ID." });
        }

        return res.status(200).json({ success: true, contact });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const removeContact = async (req, res) => {
    const { id } = req.body;

    try {
        const [error, contact] = await contactmeController.removeContact(id);

        if (error) {
            return res.status(404).json({ error: "No record found with that ID." });
        }

        return res.status(200).json({ success: true, contact });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
};


const createContact = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, topic, message } = req.body;
   console.log(firstName,lastName,email,phoneNumber,topic,message)

    try {
       
            const [error, contact] = await contactmeController.createContact(firstName, lastName, email, phoneNumber, topic, message);
            /* const apiUrl = 'http://172.25.0.3:3000/enviar';

            const apiResponse = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName,
                lastName,
                email,
                phoneNumber,
                topic,
                message,
                timestamp: Date.now(), 
              }),
              credentials: 'include',
            });
            
        console.log(apiResponse)
            if (apiResponse.ok) {
              const responseData = await apiResponse.json();
              console.log(responseData)
              return res.status(201).json({ contact: responseData });
            } else {
              const errorMessage = await apiResponse.text();
              throw new Error(`Error en la llamada a la API: ${apiResponse.status} - ${errorMessage}`);
            }
            
             */
            if (contact){
                return res.status(201).json({ contact: contact });
            }
          } catch (error) {
            console.error(error);
            return res.status(400).json({ error: error.message });
          }
        };
        




export default {
    getAllContacts,
    getContactsById,
    updateContact,
    removeContact, 
    createContact
};