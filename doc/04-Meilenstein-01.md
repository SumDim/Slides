
= Meilenstein 01

# Meilenstein 01: Interface

# Uebersicht

## Uebersicht

- Beginn heute (23.03.2016)
- Testat ist gemeinsam Meilenstein 1 und 2
- Verstaendnis Git, GitHub, Branches, Triangularer Workflow
- Antritt zum Testat **NUR** mit Pull-Request auf die Boilerplate
- Erfuellung Interface-Spezifikation (15 Punkte je Testat)
- Erfuellung Code-Qualitaet (15 Punkte je Testat)


= Interface

# Interface

## Interface

- Notwendige Features:
- Status Tabelle
- Sidebar-Menu
- Transition zwischen Sections (App States)
- GET Integration zum CNC Server ( `/api/Status` )


## Status Tabelle

- Spalten sind `Workload` , `IP` , `Auftrag (ID)` , `Stop/Start Button`
- Inhalte via `http://botnet.artificial.engineering/api/Status`
- Automatische Aktualisierung in einem angemessenen Interval
- Anpassung des Farbschemas und des Cell Paddings
- Transition der Zeile bei hover

## Status Tabelle

- Laden der Daten mit `XMLHttpRequest` Version **2**, NICHT **1**
- Start / Stop Button als Toggle ohne Funktion

## Menu

- Notwendige Features:
- Fixierte Positionierung (linksbuendig)
- Inhalte (main) der App sind rechtsbuendig
- Farbanpassungen der Links bei hover und active

