from azure.cognitiveservices.vision.customvision.prediction import CustomVisionPredictionClient
from msrest.authentication import ApiKeyCredentials



predictionKey = "d7b31da25374446984bc954ef90fd056"
endPoint = "https://imindanger.cognitiveservices.azure.com/"
projectId = "e05b82af-323e-4934-ad68-2373977e794c"
iterationName = "Iteration1"

predictionCredentials = ApiKeyCredentials(in_headers={'Prediction-Key': predictionKey})
predictor = CustomVisionPredictionClient(endPoint, predictionCredentials)
print (predictor)

with open("C:/AImInDanger/src/assets/images/ballena00.jpg", mode= "rb") as test_data:
    results = predictor.classify_image(projectId, iterationName, test_data)

speciesInDanger = results.tag_name
speciesProbability = (results.probability*100)

print(speciesInDanger)
print(speciesProbability)

