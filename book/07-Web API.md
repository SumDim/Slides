
= Web API

# Web API

## Web API

- Web API hat NICHTS mit DOM zu tun
- Web API ist Browser-API fuer Web Apps
- Mehr auf [https://developer.mozilla.org/en-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API)

## XHR

- XHR steht fuer XMLHttpRequest
- Alte schrottige Web-API
- Neue API ist `HTTP fetch`
- Fetch ist noch nicht Standard (thx to MS)
- XHR2 nicht ganz so scheisse

## Beispiel

```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://server.tld/api/Status');

xhr.responseType = 'json';

xhr.onload = function() {

	var data = xhr.response;
	if (data !== null) {
		console.log(data); // Parsed JSON object
	}

};

xhr.send(null);
```



= Live Coding

# Live Coding

## Aufgabe

- Request zu `botnet.artificial.engineering`
- Port ist `8080`
- Pfad ist `/api/Status`
- Parse JSON Daten und logge Antwort in console
- Setze Encoding auf `UTF-8`



= DOM API

# DOM API

## DOM API

- DOM API ist Document Object Model
- Manipulation des DOM Inhalts
- HTML ist NICHT DOM
- DOM ist aktuelle Repraesentation von HTML

## querySelector / querySelectorAll

- Initieller Query fuer Elementmanipulation
- `querySelector` fuer einzelnes Element
- `querySelectorAll` fuer mehrere Elemente

```javascript
var element = document.querySelector('#status tbody');

console.log(element); // tbody Element API
```

## Element API


## TODO

- Function Callbacks
- Asynchronitaet
- XHR Beispiel (Browser)
- innerHTML Beispiel (table tr)
 
