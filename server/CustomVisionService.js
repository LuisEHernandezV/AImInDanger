'use strict';

const fs = require('fs');
const util = require('util');

const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");

const setTimeoutPromise = util.promisify(setTimeout);

let predictionKeyVar = 'd7b31da25374446984bc954ef90fd056';

//if (!process.env[predictionKeyVar]) {
//    throw new Error('please set/export the following environment variable: ' + predictionKeyVar);
//}

// This is referenced from the root of the repo.
const sampleDataRoot = "src/assets/images";

const predictionKey = process.env[predictionKeyVar];
// Add your Custom Vision endpoint to your environment variables.
const endPoint = 'https://imindanger.cognitiveservices.azure.com';

const predictionResourceId = "/subscriptions/596277bf-9ec6-42e7-9699-1219e96ca413/resourceGroups/iamindanger/providers/Microsoft.CognitiveServices/accounts/imindanger";
const projectId = "883de85d-286b-4ca3-80cf-cbb7af5ce0b9";
const publishIterationName = "classifyModel";

async function sample() {

    // Step 5. Prediction
    const predictor = new PredictionApi.PredictionAPIClient(predictionKey, endPoint);
    const testFile = fs.readFileSync(`${sampleDataRoot}/ballena01.jpg`);

    const results = await predictor.classifyImage(projectId, publishIterationName, testFile);

    // Step 6. Show results
    console.log("Results:");
    results.predictions.forEach(predictedResult => {
        console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
    });
}

sample();