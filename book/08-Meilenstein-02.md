
= Meilenstein 01

# Meilenstein 02: Interface

# Uebersicht

## Uebersicht

- Beginn heute (20.04.2016)
- Detailansicht Auftraege
- Bearbeiten und Loeschen von Auftraegen
- GET Integration (/api/Tasks)
- POST Integration (/api/Tasks)

## Uebersicht

- Testat ist gemeinsam Meilenstein 1 und 2
- Antritt zum Testat **NUR** mit Pull-Request auf die Boilerplate
- Erfuellung Interface-Spezifikation (15 Punkte je Testat)
- Erfuellung Code-Qualitaet (15 Punkte je Testat)



= Interface

# Interface

## Interface

- Notwendige Features:
- Tasks "Formular"
- Input Elemente fuer ID, Type, data (input/output)
- type: `hash-md5`, `hash-sha256`
- type: `crack-md5`
- data: `(String) input` und `(String) output`

## Beispiel

```javascript
var json = {
	id: 0,
	type: 'hash-md5',
	data: {
		input:  'woot',
		output: null
	}
};
```

## Status Tabelle

- Start/Stop Button mit `/api/Status` POST Integration
- Anwendung des `token` Headers
- Senden der Daten mit `XHR Version 2`

## Tasks Tabelle

- Laden der Daten mit `Fetch` und `Promise API`, NICHT **XHR**
- Senden der Daten mit `XHR Version 2`

## Tasks Formular

- Input Elemente fuer ID, Type und Data
- Nutzung von JSON stringify
- Anwendung des `token` Headers
- Senden der Daten mit `XHR Version 2`

