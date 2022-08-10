function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9EGlHOI5Z/model.json'), modelReady;
}
function modelReady (){
    classifier.classify(gotResults);
}
