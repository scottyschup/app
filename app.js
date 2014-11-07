var 
  text = [],
  sentenceForm       = document.querySelector('form'),
  textDiv            = document.querySelector('#text'),
  transcriptionInput = document.querySelector('input.transcription'),
  translationInput   = document.querySelector('input.translation');

sentenceForm.addEventListener('submit', function(submitEvent){
  submitEvent.preventDefault();   // otherwise we leave the page

  var sentence = {
    transcription: transcriptionInput.value,
    translation:  translationInput.value
  };

  text.push(sentence);

  this.reset();
  transcriptionInput.focus();

});

function renderText(){
  
}
