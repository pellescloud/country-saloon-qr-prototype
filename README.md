# Country Saloon QR prototype

Mobilprototype for Tromsø Countryfestival. Hele menyen kan bestilles fra bordets QR-kode. Drikkepakker leveres til bordet; enkeltvarer hentes i baren og pølse i matboden. Alle priser er arbeidsforslag.

## Prøv prototypen

- Åpne nettsiden på mobil. Velg bord, eller bestill uten bord til henting.
- Bytt mellom menyoppsett A, B og C. Ingen endelig designretning er vedtatt.
- Legg varer i kurven og fullfør den tydelig merkede demobetalingen.
- Velg egne kategorier for øl, cider, seltzer, rødvin, hvitvin, rosé, drinker, alkoholfritt og mat/snacks. Øl, cider og seltzer bruker kontrollerte Mack-produktnavn.
- Bordpakker lar deg velge konkrete Mack-varianter og enkle drinker. Riktig antall må være valgt før pakken kan legges i kurven.
- Åpne personalevisningen i samme nettleser for å oppdatere hver leveringsrute.

Ingen ekte betaling, bestilling, SMS eller utlevering skjer. Ordrene og kurven lagres lokalt i nettleseren. Personalevisningen er en demonstrasjon, ikke et autentisert driftssystem. Ordrene deles mellom faner på samme opphav i samme nettleser, ikke mellom telefoner. Ikke skriv inn person- eller betalingsopplysninger.

Bordlenke: `?bord=P07`. Uten gyldig bord-ID blir man ikke plassert ved et tilfeldig bord. Personalevisning: `?visning=personale`.

## Kjør lokalt

Ingen byggetrinn eller pakkeavhengigheter. Kjør en statisk HTTP-server i denne mappen, for eksempel `python -m http.server 8765`, og åpne `http://127.0.0.1:8765`.

GitHub Pages publiserer denne mappen fra hovedgrenen. Relative filstier fungerer også når siden ligger under repositoriets navn.

## Innhold

- `index.html`, `styles.css`, `app.js`, `menu-data.js`: brukergrensesnitt, menydata og lokal demosimulering.
- `package-model.json`: eksisterende arbeidsmodell med pakkeinnhold og eksempelpriser.
- `assets/`: eksisterende festivallogo og skrifter, AI-genererte designreferanser og små serveringsillustrasjoner på nøytral bakgrunn.

Original logo gjenbrukes uendret. Designbildenes logo er kun en visuell referanse. Rye og Poppins brukes som lokale fontfiler. Prisene, produkter og delvis allergeninformasjon må avklares før virkelig drift. Manglende allergeninformasjon betyr ikke allergenfritt.

Drikke vises servert i plastglass. En vinmodul er nå fem glass à 0,15 l, samlet 0,75 l; de tekniske modul-ID-ene beholdes. Tidligere ordrekvitteringer beholder lagrede navn, innhold og priser. Gamle generiske pakkevalg og seltzervalg beholdes i kurven, men krever konkrete variantvalg før ny demobetaling.

Drinker er foreløpige menyforslag: vodka Red Bull, vodka tranebær, vodka appelsin, gin tonic og rom cola. Spritmerker, oppskrifter og serveringsmengder er ikke fastsatt. Vin kjøpes inn separat, og produsent er ikke valgt. Eksempelprisen for et vinglass er 150 kr, avledet av tidligere prototypeforslag 750 kr per 0,75 l, og er ikke en innkjøpspris eller endelig utsalgspris. Enkle drinker bruker tidligere prototypeforslag 195 kr per servering.
