

exports.handler = async function(event, context) {
    const body = event.body;
    const auth = process.env.SQUARE_APPLICATION_ID
    console.log(auth);
    return {
        statusCode: 200,
        body: JSON.stringify({message: 'AUTH' + auth, body: body}),
    };
}