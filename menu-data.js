(() => {
'use strict';
const categories=[['all','Alle'],['packages','Bordpakker'],['beer','Øl'],['cider','Cider'],['seltzer','Seltzer'],['red','Rødvin'],['white','Hvitvin'],['rose','Rosé'],['drinks','Drinker'],['soft','Alkoholfritt'],['food','Mat & snacks']];
const info='Full varedeklarasjon og allergeninformasjon må bekreftes før salg. Illustrasjonen viser serveringsmåten, ikke det faktiske produktets utseende.';
const beer=(id,name,image='beer-light')=>({id,category:'beer',name,image,detail:'0,5 l · plastglass',price:115,route:'bar',allergens:info});
const cider=(id,name)=>({id,category:'cider',name,image:'cider',detail:'0,5 l · plastglass',price:115,route:'bar',allergens:info});
const seltzer=(id,flavour)=>({id,category:'seltzer',name:`Isbjørn Hard Seltzer ${flavour}`,image:'clear-drink',detail:'0,33 l · plastglass',price:115,route:'bar',allergens:info});
const wine=(id,category,name,image)=>({id,category,name,image,detail:'0,15 l · plastglass · vin velges',price:150,route:'bar',allergens:'Vinleverandør er ikke valgt. Full varedeklarasjon, herunder sulfittinformasjon, må bekreftes før salg.'});
const drink=(id,name,ingredients,image)=>({id,category:'drinks',name,image,detail:`${ingredients} · plastglass`,price:195,route:'bar',allergens:'Merker, serveringsmengde og husets oppskrift er ikke valgt. Full ingrediens- og allergeninformasjon må bekreftes før salg.'});
const products=[
 beer('pils','Mack Pilsner'),beer('lite','Isbjørn Lite'),beer('lite-lemon','Isbjørn Lite Sitron'),beer('tropical-ipa','Mack Tropical IPA','beer-hazy'),beer('bayer','Mack Bayer','beer-dark'),
 cider('cider','Isbjørn Cider Lite Pæresus'),cider('cider-limonella','Isbjørn Cider Limonella'),cider('cider-peach-raspberry','Isbjørn Cider Fersken & Bringebær'),cider('cider-strawberry-apple','Isbjørn Cider Lite Jordbær & Eple'),
 seltzer('seltzer-tropical','Tropisk'),seltzer('seltzer-pomegranate','Granateple'),seltzer('seltzer-blueberry','Blåbær'),seltzer('seltzer-raspberry-lemon','Bringebær & Sitron'),
 wine('wine-red-glass','red','Husets rødvin','wine-red'),wine('wine-white-glass','white','Husets hvitvin','wine-white'),wine('wine-rose-glass','rose','Husets rosé','wine-rose'),
 drink('vodka-energy','Vodka Red Bull','Vodka + Red Bull','cider'),drink('vodka-cranberry','Vodka tranebær','Vodka + tranebærjuice','cranberry-drink'),drink('vodka-orange','Vodka appelsin','Vodka + appelsinjuice','orange-drink'),drink('gin-tonic','Gin tonic','Gin + tonic','clear-drink'),drink('rum-cola','Rom cola','Lys rom + cola','cola-drink'),
 {id:'free',category:'soft',name:'Isbjørn Lite Alkoholfri',image:'beer-light',detail:'0,33 l · plastglass',price:65,route:'bar',allergens:info},
 {id:'water',category:'soft',name:'Arctic Water Still',image:'clear-drink',detail:'0,5 l · plastglass · uten kullsyre',price:45,route:'bar',allergens:info},
 {id:'soda',category:'soft',name:'Fruktsjimpanse',image:'orange-drink',detail:'0,33 l · plastglass · variant velges',price:55,route:'bar',allergens:info},
 {id:'sausage',category:'food',name:'Mydlandpølse i brød',image:'sausage',detail:'1 pølse · brød og tilbehør avklares',price:85,route:'food',allergens:'Brød, pølse og tilbehør må velges og full varedeklarasjon bekreftes før salg.'},
 {id:'chips',category:'food',name:'Potetgull',image:'chips',detail:'1 snacksporsjon · smak velges i baren',price:45,route:'bar',allergens:info},
 {id:'jerky',category:'food',name:'Beef jerky',image:'jerky',detail:'1 snacksporsjon',price:65,route:'bar',allergens:info},
 {id:'fish',category:'food',name:'Tørrfisk',image:'stockfish',detail:'1 snacksporsjon',price:65,route:'bar',allergens:'Inneholder fisk. '+info}
];
const legacyProducts=[{id:'seltzer',category:'seltzer',name:'Seltzer · tidligere valg',image:'clear-drink',detail:'Velg en konkret smak før demobetaling',price:115,route:'bar',legacy:true,allergens:info}];
const categoryImages={packages:'beer-light',beer:'beer-light',cider:'cider',seltzer:'clear-drink',red:'wine-red',white:'wine-white',rose:'wine-rose',drinks:'cranberry-drink',soft:'orange-drink',food:'sausage'};
globalThis.COUNTRY_MENU={categories,products,legacyProducts,categoryImages};
})();
