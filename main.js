function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/t95F148HD/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    
    if (error) {
     console.error(error);   
    } else {
        console.log(results);

        random_num_r = Math.floor(Math.random() * 255) + 1;
        random_num_g = Math.floor(Math.random() * 255) + 1;
        random_num_b = Math.floor(Math.random() * 255) + 1;
           
        document.getElementById("result_label").innerHTML = "I can hear -" + results[0].label;
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_num_r+","+random_num_g+","+random_num_r+")";
        document.getElementById("name").style.color = "rgb("+random_num_r+","+random_num_g+","+random_num_r+")";
        
        img = document.getElementById('ear');
        
        if (results[0].label == "Barking")   {
            img.src = 'dog.jpg';
        }
        else if (results[0].label == "Meow") {
            img.src = 'cat.jpg';
        }
        else if (results[0].label == "Roar") {
            img.src = 'lion.jpg';
        }
        else if (results[0].label == "Moo") {
            img.src = 'cow.jpg';
        }
        else {
            img.src = 'ear.png';
        }
    }
}