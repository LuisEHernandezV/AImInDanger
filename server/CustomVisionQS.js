// <snippet_imports>
const util = require('util');
const fs = require('fs');
const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
const msRest = require("@azure/ms-rest-js");
// </snippet_imports>


// <snippet_creds>

const predictionKey = "d7b31da25374446984bc954ef90fd056";
const predictionResourceId = "/subscriptions/596277bf-9ec6-42e7-9699-1219e96ca413/resourceGroups/iamindanger/providers/Microsoft.CognitiveServices/accounts/imindanger-Prediction";
const predictionEndpoint = 'https://imindanger-prediction.cognitiveservices.azure.com/';


// </snippet_creds>

// <snippet_auth>
const predictor_credentials = new msRest.ApiKeyCredentials({ inHeader: { "Prediction-key": predictionKey } });
const predictor = new PredictionApi.PredictionAPIClient(predictor_credentials, predictionEndpoint);
 
// </snippet_auth>



// <snippet_create>
(async () => {
    
    // <snippet_test>
    const testFile = fs.readFileSync(`./../src/assets/images/ballena01.jpg`);

    const results = await predictor.classifyImage(predictionEndpoint, testFile);

    // Show results
    console.log("Results:");
    results.predictions.forEach(predictedResult => {
        console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
    });
    // </snippet_test>

// <snippet_function_close>
})()
// </snippet_function_close>