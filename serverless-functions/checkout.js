const fetch = require("node-fetch");

exports.handler = async function(event, context) {
    const body = event.body;
    const auth = process.env.SQUARE_APPLICATION_ID
    console.log(auth);
    const response = await fetch("https://connect.squareupsandbox.com/v2/payments", {
        method: 'post', 
        headers: {
            'Authorization': 'Bearer ' + auth,
            'Content-Type': 'application/json',
        },
        body: body
    });
    console.log(response);
    return {
        statusCode: 200,
        body: JSON.stringify({message: JSON.stringify(response)}),
    };
}