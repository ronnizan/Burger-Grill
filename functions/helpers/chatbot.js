const dialogflow = require('dialogflow');
const { struct } = require('pb-util');

const projectId = process.env.DIALOGFLOW_GOOGLE_PROJECT_ID;

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
};

//initialize chatbot configuration
const sessionClient = new dialogflow.SessionsClient({ projectId, credentials });


module.exports = {
  textQuery: async function (text, uid, parameters = {}) {
    const sessionPath = sessionClient.sessionPath(
      process.env.DIALOGFLOW_GOOGLE_PROJECT_ID,
      process.env.DIALOGFLOW_SESSION_ID + uid
    );
    let self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: process.env.DIALOGFLOW_SESSION_LANGUAGE_CODE,
        },
      },
      queryParams: {
        payload: {
          data: parameters,
        },
      },
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleActions(responses);
    return responses;
  },
  eventQuery: async function (event, uid, parameters = {}) {
    const sessionPath = sessionClient.sessionPath(
      process.env.DIALOGFLOW_GOOGLE_PROJECT_ID,
      process.env.DIALOGFLOW_SESSION_ID + uid
    );
    let self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: struct.encode(parameters),
          languageCode: process.env.DIALOGFLOW_SESSION_LANGUAGE_CODE,
        },
      },
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleActions(responses);
    return responses;
  },
  handleActions: function (responses) {
    return responses;
  },
};
