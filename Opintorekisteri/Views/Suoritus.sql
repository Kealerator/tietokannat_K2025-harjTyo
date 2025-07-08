CREATE VIEW Suoritus AS
Select Sukunimi, Etunimi, Nimi, Arvosana
FROM Opiskelija JOIN Arviointi ON Opiskelija.idOpiskelija=Arviointi.idOpiskelija
JOIN Opintojakso ON Opintojakso.IdOpintojakso=Arviointi.idOpintojakso;