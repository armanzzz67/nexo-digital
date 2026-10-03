const menu=document.getElementById("menu"),list=document.getElementById("nav-list");
if(menu){menu.addEventListener("click",()=>{const o=list.classList.toggle("open");menu.setAttribute("aria-expanded",o)})}
const form=document.getElementById("contact-form");
if(form){form.addEventListener("submit",e=>{
  e.preventDefault();
  const n=form.nombre.value.trim(),c=form.correo.value.trim(),m=form.mensaje.value.trim(),out=document.getElementById("form-msg");
  if(!n||!m||!/^\S+@\S+\.\S+$/.test(c)){out.className="msg err";out.textContent="Completa tu nombre, un correo válido y tu mensaje.";return}
  out.className="msg ok";out.textContent="Gracias, "+n+". Recibimos tu mensaje y te escribiremos pronto.";form.reset();
})}
