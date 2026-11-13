// Menu mobile
const b=document.querySelector('.burger'),n=document.querySelector('nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
// Digitação na página inicial
const r=document.getElementById('role');
if(r&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
 const w=['professor','pedagogo','técnico em redes','criador de conteúdo','escritor'];let i=0,j=0,d=false;
 (function t(){const s=w[i];r.textContent=s.slice(0,j);
  if(!d&&j===s.length){d=true;return setTimeout(t,1400)}
  if(d&&j===0){d=false;i=(i+1)%w.length}
  j+=d?-1:1;setTimeout(t,d?40:80)})();
}
// Quando tiver o link de venda (Hotmart etc.), preencha data-buy="URL" no botão do livro em livros.html/producoes.html
document.querySelectorAll('a.btn.off[data-buy]').forEach(a=>{const u=a.dataset.buy;if(u){a.href=u;a.textContent='Comprar';a.classList.remove('off');a.removeAttribute('aria-disabled');a.target='_blank'}});

// Últimas postagens do blog Pedagogia em Foco (feed público do Blogger)
const P=document.getElementById('posts');
if(P){fetch('https://pedagogiaeducacaoemfoco.blogspot.com/feeds/posts/default?alt=json&max-results=3')
 .then(r=>r.json()).then(d=>{(d.feed.entry||[]).forEach(e=>{
  const l=(e.link.find(x=>x.rel==='alternate')||{}).href,li=document.createElement('li'),a=document.createElement('a'),s=document.createElement('small');
  a.href=l;a.target='_blank';a.rel='noopener';a.textContent=e.title.$t;
  s.textContent=new Date(e.published.$t).toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric'});
  li.append(a,s);P.append(li)})})
 .catch(()=>{P.innerHTML='<li>Veja as novidades diretamente no blog.</li>'})}
