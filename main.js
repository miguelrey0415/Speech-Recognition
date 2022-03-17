const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('Hola')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Hola mi  niña hermosa';
      texts.appendChild(p)
    }
    if (text.includes("te amo") || text.includes('te amo')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Te amo mucho más mi vida hermosa, eres todo para mi y eres lo mejor de mi vida';
      texts.appendChild(p)
    }
    if (text.includes('reproduce Nuestra canción')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'reproduce Nuestra canción';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/watch?v=ELsgRAGIgw0')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
