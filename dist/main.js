(()=>{let e=0;const t=document.getElementById("back"),n=document.getElementById("next"),c=async function(){const t="https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start="+e+"&size=30";return(await fetch(t)).json()};function a(e){const t=document.createElement("div");for(let n of e){const e=document.createElement("p");e.innerHTML=n.name,t.appendChild(e)}document.body.appendChild(t)}c().then((e=>a(e))),c(),t.addEventListener("click",(function(){e<=0?document.getElementsByTagName("div")[0].innerHTML="Er zijn geen pagina's meer om naar terug te gaan!":(e--,document.getElementsByTagName("div")[0].remove(),async function(){const t="https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start="+e+"&size=30";return(await fetch(t)).json()}().then((e=>a(e))))})),n.addEventListener("click",(function(){e++,document.getElementsByTagName("div")[0].remove(),async function(){const t="https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start="+e+"&size=30";return(await fetch(t)).json()}().then((e=>a(e)))}))})();