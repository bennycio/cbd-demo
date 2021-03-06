

exports.handler = async function(event, context) {

    const body = event.body;
    const auth = process.env.REACT_APP_SQUARE_APPLICATION_ID
    return {
        statusCode: 200,
        body: JSON.stringify({message: auth}),
    };
}