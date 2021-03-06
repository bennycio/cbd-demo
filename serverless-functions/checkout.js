

exports.handler = async function(event, context) {
    const body = event.body;
    const auth = process.env.SQUARE_APPLICATION_ID
    console.log(auth);
    const response = await fetch("https://connect.squareupsandbox.com/v2/payments", {
        method: 'POST', 
        headers: {
            'Authorization': 'Bearer ' + auth,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    return {
        statusCode: 200,
        body: JSON.stringify({message: response}),
    };
}