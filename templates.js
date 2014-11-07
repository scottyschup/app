function render(templateSelector, data){
  var 
    fields = Object.keys(data),
    template = document.querySelector(templateSelector),
    node = document.importNode(template.content, true);
  
  fields.forEach(function(field){
    node.querySelector('.' + field).textContent = data[field]
  })

  return node;
}


// var eg = render('#sentenceTemplate', {
//   transcription: 'hola',
//   translation: 'hi',
// })

//document.querySelector('#text').appendChild(eg);

