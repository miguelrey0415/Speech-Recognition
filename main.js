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
      p.innerText = 'Hola.....';
      texts.appendChild(p)
    }
    if (text.includes("me llamo miguel") || text.includes('me llamo miguel')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'My Name is Cifar';
      texts.appendChild(p)
    }
    if (text.includes('reproduce mi video favorito')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'reproduce mi video favorito';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/watch?v=9BMwcO6_hyA')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
