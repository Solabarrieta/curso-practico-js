tipoSub = "Basic";

suscirpciones = 
[ "Free",
  "Basic",
  "Expert",
  "Expert +"
 ];

 mensaje =
  [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar TODOS los cursos de Plazti durante un año",
    "Tu y un amig@ podeis tomar TODOS los cursos de Platzi durante un año" 
 ]
 
 suscirpciones.forEach(element => {
     if(tipoSub==element){
         console.log(mensaje[suscirpciones.indexOf(element)]);
     }
 });