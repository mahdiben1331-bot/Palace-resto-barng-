const menu = [
 {name:"Carré d’agneau",cat:"Plats",price:2400,desc:"Agneau rôti, accompagnement maison."},
 {name:"Filet de poisson",cat:"Plats",price:2200,desc:"Poisson du jour, sauce du chef."},
 {name:"Risotto du Palace",cat:"Plats",price:1900,desc:"Crémeux et parfumé, recette maison."},
 {name:"Dessert signature",cat:"Desserts",price:900,desc:"Création sucrée du chef."}
];
const grid=document.getElementById("menuGrid");
if(grid) grid.innerHTML=menu.map(x=>`<article class="menu-card"><div class="price">${x.cat}</div><h3>${x.name}</h3><p>${x.desc}</p><strong class="price">${x.price.toLocaleString("fr-FR")} DA</strong></article>`).join("");
const f=document.getElementById("reservationForm");
if(f) f.addEventListener("submit",e=>{e.preventDefault();alert("Merci ! Votre demande de réservation a bien été enregistrée. Pour confirmation : 0541 85 25 82.");});
