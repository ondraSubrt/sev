const Ajv = require("ajv")
const axios = require('axios');

const ajv = new Ajv({allErrors: true})


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function (sendEventPOST) processed a request.');
       
    if (req.body) {
        responseMessage = "The request has been processed succesfully"; 
        const url = 'http://localhost:7071/api/google_analytics'; // Define the payload to send in the HTTP request
        const payload = { data: req.body }; // Define the options for the HTTP request
        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await axios.post(url, payload, options); // Send the HTTP request using axios
        context.res = {
            // status: 200, 
            body: response.data
        };
        return response.data; // Return the response data from the second function  
    } else {
        responseMessage = "missing request body"
        context.res = {
            // status: 200, 
            body: responseMessage
        };
    } 
}