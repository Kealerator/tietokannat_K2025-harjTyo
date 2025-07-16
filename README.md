# Tietokannat ja rajapinnat -harjoitustyö

Kurssin harjoitustyön tehtävänä oli rakentaa aiemmin kurssilla luodusta "Opintorekisteri" -tietokannasta REST-API ja MVC- arkkitehtuuria käyttävä MySQL/Node/Express -sovellus.

<br/>

<a href="https://unioulu-my.sharepoint.com/:v:/g/personal/marundel24_students_oamk_fi/EW9gauNKe3hMmYvBjNac2DcBSg0wGyjUGR28SE8ycNVXYw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ZLoghi">Esittelyvideo OneDrive</a>

<a href="https://www.dropbox.com/scl/fi/tsyrs58xitjacw62j33xv/Matti-Rundelin-Opintorekisteri-Harjoitusty.mkv?rlkey=8yu9ew7licwi6osdlae3yv8is&st=iygvvawg&dl=0">Esittelyvideo Dropbox</a>

<br/>

## Järjestelmävaatimukset
- <a href="https://nodejs.org/en/download">Node.js</a> v14 tai uudempi
- <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a> v6 tai uudempi
- <a href="https://dev.mysql.com/downloads/mysql/8.0.html">MySQL v8.x</a>, joka käyttää porttia 3306
- Palomuurin asetuksissa portti 3000 avoinna ulkoisille pyynnöille.


### __<i>Mikäli et halua käyttää oletusasetuksia, voit muuttaa ne /Express/database.js tiedostossa!</i>__

```js

// -- Voit muuttaa käyttäjän, salasanan, tai portin tähän --
const myConnectionString = "mysql://<oma_user>:<oma_salasana>@localhost:<oma_portti>/Opintorekisteri";
```


<br/><br/>

### Oletusasetukset
- MySQL -tietokanta käyttää porttia 3306
- Oletusasetuksena MySQL -tietokantaan pääsee ainoastaan 'netuser' -käyttäjä, jonka voit luoda näin: 
<br/><br/>

```sql
CREATE USER 'netuser'@'localhost' IDENTIFIED BY 'netpass';
GRANT ALL PRIVILEGES ON Opintorekisteri.* TO 'netuser'@'localhost';
FLUSH PRIVILEGES;
```
<br/> <br/>
<br/> <br/>


## Käyttö

### 1. Lataa repo


```shell
git clone https://github.com/Kealerator/tietokannat_K2025-harjTyo.git
```

### 2. Mene repon hakemiston /Express/ -kansioon
```shell
cd Express/
```

### 3. Käynnistä Express
```shell
npm start
```

### 4. Avaa verkkoselain ja mene Expressin käyttämälle portille varmistaaksesi sen toimivuus (oletusportti 3000)
```shell
firefox localhost:3000
```

### Nyt voit suorittaa REST-API:n testausta selaimella, tai vaikka Postmanilla!
<img width="296" height="143" alt="Screenshot from 2025-07-16 15-04-22" src="https://github.com/user-attachments/assets/12e7e316-5140-42d6-9c08-881a7b3f7a9f" />



<br/><br/>


## Opintorekisteri -MySQL tietokannan rakenne

<br/>

### Taulukot
- Opiskelija
- Opintojakso
- Arviointi (välitaulu)
- Suoritus (näkymä)

<br/>

---

### Opiskelija -taulu

| Sarake       | Tietotyyppi | Info       |
| ------------ | ----------- | ---------- |
| idOpiskelija | INT         | PK, NN, AI |
| Etunimi      | VARCHAR(45) | -          |
| Sukunimi     | VARCHAR(45) | -          |
| Luokkatunnus | VARCHAR(45) | -          |
| Osoite       | VARCHAR(45) | -          |

<br/>

----

### Opintojakso -taulu

| Sarake        | Tietotyyppi | Info       |
| ------------- | ----------- | ---------- |
| idOpintojakso | INT         | PK, NN, AI |
| Nimi          | VARCHAR(45) | -          |
| Laajuus       | TINYINT     | -          |
| Koodi         | VARCHAR(45) | NN, UQ     |

<br/>


----

### Arviointi -taulu (välitaulu)

| Sarake        | Tietotyyppi | Info |
| ------------- | ----------- | ---- |
| idOpiskelija  | INT         | NN   |
| idOpintojakso | INT         | NN   |
| Arvosana      | TINYINT     | -    |
| Päiväys       | DATE        | -    |

<br/>


----

### Suoritus -taulu (näkymä)

| Sarake        | Tietotyyppi | Info |
| ------------- | ----------- | ---- |
| idOpiskelija  | INT         | NN   |
| Sukunimi      | VARCHAR(45) | -    |
| Etunimi       | VARCHAR(45) | -    |
| idOpintojakso | INT         | NN   |
| Nimi          | VARCHAR(45) | -    |
| Arvosana      | TINYINT     |

<br/><br/>

## ER-diagrammi:
<br/>

<img width="714" height="224" alt="Scheme" src="https://github.com/user-attachments/assets/d6d5122d-5f83-42a0-ae51-cc1d03e77d71" />

<br/><br/>

## Aliohjelmat

- UusiKurssi
- PoistaKurssiNimellä
- LisääUusiSuoritus
- PoistaSuoritus
<br/><br/>

### UusiKurssi
Lisää uuden kurssin Opintojakso -taulukkoon.

Inputs:
- Kurssin nimi (varchar)
- Laajuus (tinyint, op)
- Kurssin koodi (varchar, esim "IN000111")

```sql
CALL UusiKurssi("Matematiikka 101", 10, "IN00123");
```

----

### PoistaKurssiNimellä
Poistaa kurssin Opintojakso -taulukosta mikäli syötetty nimi löytyy.

Inputs:
- Kurssin nimi (varchar)

```sql
CALL PoistaKurssiNimellä("Matematiikka 101");
```

----

### LisääUusiSuoritus
Lisää uuden suorituksen Arviointi -taulukkoon. Antaa myös virheilmoituksen jos syöttöarvoilla ei esim. löydy opiskelijaa.

Inputs:
- Opiskelijan Etunimi (varchar)
- Opiskelijan Sukunimi (varchar)
- Kurssin koodin (varchar)
- Kurssin arvosanan (tinyint)

```sql
CALL LisääUusiSuoritus(
  "Masa", "Mainio",
  "IN00123", 3
);
```

----

### PoistaSuoritus
Poistaa suorituksen Arviointi -taulukkoon. Antaa myös virheilmoituksen jos syöttöarvoilla ei esim. löydy opiskelijaa.

Inputs:
- Opiskelijan Etunimi (varchar)
- Opiskelijan Sukunimi (varchar)
- Kurssin koodin (varchar)

```sql
CALL PoistaSuoritus("Masa", "Mainio", "IN00123");
```


## REST-API

### Reitit (routes)

Reittitiedostot (esim. `routes/opiskelija.js`) käyttävät alla olevaa syntaxia:

- **GET /opiskelija**  
  Hakee kaikki opiskelijat Opiskelija-taulusta.

- **GET /opiskelija/:id**  
  Hakee opiskelijan Opiskelija-taulusta id:llä.

- **POST /opiskelija**  
  Lisää opiskelijan Opiskelija-tauluun (JSON-data rungossa).

- **PUT /opiskelija/:id**  
  Päivittää opiskelijan tiedot Opiskelija-taulussa.

- **DELETE /opiskelija/:id**  
  Poistaa opiskelijan Opiskelija-taulusta.

<br/>

**Ainoa poikkeus on `arviointi.js`, koska taulukossa on useampi eri avainkenttä niin niihin päästään vastaavalla tavalla:**
<br/>

- **GET arviointi/opintojakso/:id** <br/>
    Hakee Arviointi -taulukon kaikki arvioinnit annetulla opintojakson id:llä.

- **GET arviointi/:idOpiskelija/:idOpintojakso**<br/>
    Hakee Arviointi -taulukosta tietyn opiskelijan tietyn opintojakson arvioinnin.


<br/>


## Funktiot .js-tiedostoissa

Tässä kuvataan projektin tärkeimmät funktiot, niiden käyttötarkoitus ja käyttötapa.<br/>
Funktiot löytyvät pääosin kansioista `/Express/models/` ja `/Express/routes/` -kansioista.

<br/>

---

<br/>

### Mallit (models)


#### `arviointi_model.js`

- **getAll(callback)**  
  Hakee kaikki arvioinnit Arviointi-taulusta.

- **getByOpiskelijaId(id, callback)**  
  Hakee arvioinnit Arviointi-taulusta opiskelijan id:llä.

- **getByOpintojaksoId(id, callback)**  
  Hakee arvioinnit Arviointi-taulusta opintojakson id:llä.

- **getByOpiskelijaIdAndOpintojaksoId(idOpiskelija, idOpintojakso, callback)**  
  Hakee arvioinnin Arviointi-taulusta opiskelijan ja opintojakson id:llä.

- **add(arviointiData, callback)**  
  Lisää uuden arvioinnin Arviointi-tauluun.

- **delete(idOpiskelija, idOpintojakso, callback)**  
  Poistaa arvioinnin Arviointi-taulusta opiskelijan ja opintojakson id:llä.

- **update(idOpiskelija, idOpintojakso, arviointiData, callback)**  
  Päivittää arvioinnin tiedot Arviointi-taulussa.

---

#### `opiskelija_model.js`

- **getAll(callback)**  
  Hakee kaikki opiskelijat Opiskelija-taulusta.

- **getById(id, callback)**  
  Hakee opiskelijan tiedot Opiskelija-taulusta id:n perusteella.

- **add(opiskelijaData, callback)**  
  Lisää uuden opiskelijan Opiskelija-tauluun.

- **delete(id, callback)**  
  Poistaa opiskelijan Opiskelija-taulusta id:n perusteella.

- **update(id, opiskelijaData, callback)**  
  Päivittää opiskelijan tiedot Opiskelija-taulussa id:n perusteella.

---

#### `opintojakso_model.js`

- **getAll(callback)**  
  Hakee kaikki opintojaksot Opintojakso-taulusta.

- **getById(id, callback)**  
  Hakee opintojakson tiedot Opintojakso-taulusta id:n perusteella.

- **add(opintojaksoData, callback)**  
  Lisää uuden opintojakson Opintojakso-tauluun.

- **delete(id, callback)**  
  Poistaa opintojakson Opintojakso-taulusta id:n perusteella.

- **update(id, opintojaksoData, callback)**  
  Päivittää opintojakson tiedot Opintojakso-taulussa id:n perusteella.

---

