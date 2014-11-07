var 
  text = [],
  sentenceForm       = document.querySelector('form'),
  textNode            = document.querySelector('#text'),
  transcriptionInput = document.querySelector('input.transcription'),
  translationInput   = document.querySelector('input.translation');

sentenceForm.addEventListener('submit', function(submitEvent){
  submitEvent.preventDefault();   

  var sentence = {
    transcription: transcriptionInput.value,
    translation:  translationInput.value
  };

  text.push(sentence);

  this.reset();
  transcriptionInput.focus();

  renderText();
});

function renderText(){
  textNode.innerHTML = '';
  text.forEach(function(sentence){
    var eg = render('#sentenceTemplate', sentence)
    textNode.appendChild(eg);
  })   
}
