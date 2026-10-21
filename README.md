# Country Saloon QR prototype

Mobilprototype for Tromsø Countryfestival. Hele menyen kan bestilles fra bordets QR-kode. Drikkepakker leveres til bordet; enkeltvarer hentes i baren og pølse i matboden. Alle priser er arbeidsforslag.

## Prøv prototypen

- Åpne nettsiden på mobil. Velg bord, eller bestill uten bord til henting.
- Bytt mellom menyoppsett A, B og C. Ingen endelig designretning er vedtatt.
- Legg varer i kurven og fullfør den tydelig merkede demobetalingen.
- Åpne personalevisningen i samme nettleser for å oppdatere hver leveringsrute.

Ingen ekte betaling, bestilling, SMS eller utlevering skjer. Ordrene og kurven lagres lokalt i nettleseren. Personalevisningen er en demonstrasjon, ikke et autentisert driftssystem. Ordrene deles mellom faner på samme opphav i samme nettleser, ikke mellom telefoner. Ikke skriv inn person- eller betalingsopplysninger.

Bordlenke: `?bord=P07`. Uten gyldig bord-ID blir man ikke plassert ved et tilfeldig bord. Personalevisning: `?visning=personale`.

## Kjør lokalt

Ingen byggetrinn eller pakkeavhengigheter. Kjør en statisk HTTP-server i denne mappen, for eksempel `python -m http.server 8765`, og åpne `http://127.0.0.1:8765`.

GitHub Pages publiserer denne mappen fra hovedgrenen. Relative filstier fungerer også når siden ligger under repositoriets navn.

## Innhold

- `index.html`, `styles.css`, `app.js`: brukergrensesnitt og lokal demosimulering.
- `package-model.json`: eksisterende arbeidsmodell med pakkeinnhold og eksempelpriser.
- `assets/`: eksisterende festivallogo og skrifter, samt tre AI-genererte designreferanser.

Original logo gjenbrukes uendret. Designbildenes logo er kun en visuell referanse. Rye og Poppins brukes som lokale fontfiler. Prisene, produkter og delvis allergeninformasjon må avklares før virkelig drift. Manglende allergeninformasjon betyr ikke allergenfritt.
