const { Router } = require('express');

const dialogflow = require('@google-cloud/dialogflow');
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
    
const router = Router();

// Your google dialogflow project-id
const PROJECID = CREDENTIALS.project_id;

// Configuration for the client
const CONFIGURATION = {
    credentials: {
        private_key: CREDENTIALS['private_key'],
        client_email: CREDENTIALS['client_email']
    }
}

// Create a new session
const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

// Detect intent method
const detectIntent = async (languageCode, queryText, sessionId) => {

    let sessionPath = sessionClient.projectAgentSessionPath(PROJECID, sessionId);

    // The text query request.
    let request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: queryText,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    return {
        response: result.fulfillmentText
    };
}

/**
 * {{url}}/api/dialogflow
 */
router.get('/', async (req, res) => { 
    let languageCode = req.query.languageCode;
    let queryText = req.query.queryText;
    let sessionId = req.query.sessionId;

    let responseData = await detectIntent(languageCode, queryText, sessionId);

    res.status(200).json({ msg: responseData.response});
});

module.exports = router;