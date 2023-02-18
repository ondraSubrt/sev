module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function (receiveAndSend) processed a request.');
    if (req.body) {
        responseMessage = "body processed"
    } else {
        responseMessage = "missing request body"
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            message: responseMessage,
            body: req.body
        },
        
    };
}