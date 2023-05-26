
Webcam.set({
    //Propriedades da webcam
    width:350,
    height:300,
    image_format : 'png',
    //Formato da imagem em png
    png_quality:90
    //Qualidade da visualização da webcam
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );
//Popup da camera

      
function takeSnapshot()
//é uma função pre definida usada para obter imagens de uma webcam
{
    Webcam.snap(function(data_uri) {
      //O comando de codigo data_uri pode ser ultilizado para mostrar a pre visualização de uma imagem que esta sendo gerada apos a captura
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  //  auxilia no manuseio de diferentes modelos e realiza uma comparação entre o que inserimos (imagem, áudio etc.) com o modelo e fornece o resultado. Um dos recursos da ml5.js é promover um modelo pré-treinado que detecta imagens de um vídeo OU webcam.
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YKKwCY5N3/model.json',modelLoaded);
//model é o modelo que criamos na plataforma de treinamento teacheble machine
//json= JavaScript Object Notation. é um formato de arquivo de padrão aberto utilizado para conter dados em um formato object. Você se lembra de que durante as aulas de API visitamos o arquivo JSON em
//imageClassifier é uma função pré definida do ml5  ultilizada para acionar a funçao de classificação da imagem ml5 
//ml5= Biblioteca do teachable machine
  function modelLoaded() {
    console.log('Modelo carregado!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultObjectName").innerHTML = results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
