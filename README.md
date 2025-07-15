# Tietokannat ja rajapinnat -harjoitustyö

Kurssin harjoitustyön tehtävänä oli rakentaa aiemmin kurssilla luodusta "Opintorekisteri" -tietokannasta REST-API ja MVC- arkkitehtuuria käyttävä MySQL/Node/Express -sovellus.

<br/><br/>

## Opintorekisteri -tietokannan rakenne

<br/>

### Taulukot
- Opiskelija
- Opintojakso
- Arviointi (välitaulu)

<br/><br/>

#### Opiskelija -taulu

| Sarake | Tietotyyppi | Info |
|--------|-------------|------|
|idOpiskelija | INT | PK, NN, AI|
|Etunimi | VARCHAR(45)| - |
|Sukunimi | VARCHAR(45)| - |
|Luokkatunnus | VARCHAR(45)| - |
|Osoite | VARCHAR(45)| - |

<br/><br/>


#### Opintojakso -taulu

| Sarake | Tietotyyppi | Info |
|--------|-------------|------|
|idOpintojakso | INT | PK, NN, AI|
|Nimi | VARCHAR(45)| - |
|Laajuus | TINYINT| - |
|Koodi | VARCHAR(45)| NN, UQ |

<br/><br/>

#### Arviointi -taulu (välitaulu)

| Sarake | Tietotyyppi | Info |
|--------|-------------|------|
|idOpiskelija | INT | NN |
|idOpintojakso | INT | NN |
|Arvosana | TINYINT| - |
|Päiväys | DATE | - |

<br/><br/><br/><br/>


## ER-diagrammi:
<br/>

<img width="714" height="224" alt="Scheme" src="https://github.com/user-attachments/assets/d6d5122d-5f83-42a0-ae51-cc1d03e77d71" />

<br/><br/><br/><br/>


## Aliohjelmat
<br/><br/>

### UusiKurssi
Lisää uuden kurssin Opintojakso -taulukkoon.

Inputs:
- Kurssin nimi (varchar)
- Laajuus (tinyint, op)
- Kurssin koodi (varchar, esim "IN000111")

Esim:
<br/>
`CALL UusiKurssi("Matematiikka 101", 10, "IN00123");`
<br/><br/>


### PoistaKurssiNimellä
Poistaa kurssin Opintojakso -taulukosta mikäli syötetty nimi löytyy.

Inputs:
- Kurssin nimi (varchar)

Esim:
<br/>
`CALL PoistaKurssiNimellä("Matematiikka 101");`
<br/><br/>

### LisääUusiSuoritus
Lisää uuden suorituksen Arviointi -taulukkoon. Antaa myös virheilmoituksen jos syöttöarvoilla ei esim. löydy opiskelijaa.

Inputs:
- Opiskelijan Etunimi (varchar)
- Opiskelijan Sukunimi (varchar)
- Kurssin koodin (varchar)
- Kurssin arvosanan (tinyint)

Esim:
<br/>
`CALL LisääUusiSuoritus(
"Masa", "Mainio",
"IN00123", 3);`
<br/><br/>

### PoistaSuoritus
Poistaa suorituksen Arviointi -taulukkoon. Antaa myös virheilmoituksen jos syöttöarvoilla ei esim. löydy opiskelijaa.

Inputs:
- Opiskelijan Etunimi (varchar)
- Opiskelijan Sukunimi (varchar)
- Kurssin koodin (varchar)

Esim:
<br/>
`CALL PoistaSuoritus("Masa", "Mainio", "IN00123");`
<br/><br/>
