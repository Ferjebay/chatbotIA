const {WebhookClient} = require('dialogflow-fulfillment');

const webhook = async (req, res) => {
    const agent = new WebhookClient({ request: req, response:res });

    // console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    // console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
   
    function welcome(agent) {
      agent.add(`Saludos desde un backend`);
    }
    
    function webhook(agent) {
      agent.add(`Estoy enviando esta respuesta desde webhook`);      
    } 
  
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('ProbandoWebhook', webhook);
    agent.handleRequest(intentMap);
}

module.exports = {
    webhook
}