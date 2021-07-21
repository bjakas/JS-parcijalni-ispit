PARCIJALNI ISPIT – Javascript

Napišite aplikaciju koja po traženom terminu izlistava pogođene podatke (search app). Aplikacija se sastoji od text input fielda te tablice ili liste rezultata.


1. Podaci trebaju biti dobiveni s iTunes search stranice, npr. https://itunes.apple.com/search?term=indie&entity=song
2. Na svaki novi upisani znak traženog termina tablica ili lista rezultata se mora updateati s imenom odabrane pjesme i umjetnika.
3. U slučaju praznog rezultata, stranica mora prikazati poruku koja daje detaljnije opisuje stanje.
4. Dok se podaci sa servera preuzimaju, aplikacija treba dati do znanja da korisnik mora malo pričekati, npr. u pogledu loadera.


Očekivanja:
1. Možete koristiti bilo koje npm pakete za koje smatrate da vam mogu pomoći. 2. Kod može biti ES5 ili ES6 standard.
3. Stilizacija aplikacije nije od važnosti.
4. Dodatni bodovi za exportanje krajnjeg js filea minificiranog za produkciju.

---


Ako imate problem s CORS-om zbog toga što ste poslali previše zahtjeva u kratkom vremenskom roku, predlažem sljedeće:


1. Posjetite endpoint iz teksta parcijalnog ispita u pregledniku i preuzmite .json datoteku koju vam nudi

2. Spremite datoteku pored JS datoteke vaše aplikacije

3. Koristitie fetch da bi dohvatili lokalnu datoteku (npr. fetch("./response.json"))

4. Pripremite aplikaciju s obzirom na podatke iz lokalnog response.json i kasnije se prespojite na pravi endpoint kada počnete dodavati obrazac i pretraživanje kroz input element