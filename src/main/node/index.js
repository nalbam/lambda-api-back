'use strict';

const doc = require('dynamodb-doc')
    , dynamo = new doc.DynamoDB()
    , debug = true;

if (!debug) {
    console.log = () => {
    };
    console.error = () => {
    };
}

exports.handler = (event, context, callback) => {
    console.log('## handler event : ', JSON.stringify(event, null, 2));

    const operation = event.operation;
    const payload = event.payload;

    switch (operation) {
        case 'put':
            dynamo.putItem(payload, callback);
            break;
        case 'get':
            dynamo.getItem(payload, callback);
            break;
        case 'update':
            dynamo.updateItem(payload, callback);
            break;
        case 'delete':
            dynamo.deleteItem(payload, callback);
            break;
        case 'scan':
            dynamo.scan(payload, callback);
            break;
        case 'query':
            dynamo.query(payload, callback);
            break;
        case 'echo':
            callback(null, payload);
            break;
        case 'ping':
            callback(null, 'pong');
            break;
        default:
            callback(new Error(`Unrecognized operation "${operation}"`));
    }
};
