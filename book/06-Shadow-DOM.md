
= Shadow DOM

# Shadow DOM

## Shadow DOM

- Unsichtbares DOM
- Implementierung der UI
- HTML implementiert HTML
- User-Agent Styles

## Shadow DOM

## Beispiel: Shadow DOM

```html
<style>
	input {
		border: 1px solid red;

	}
	input[type="range"]::-webkit-slider-runnable-track {
		background: blue;
	}
</style>

<input type="range" id="demo">Blub</input>
```


= Live Coding

# Live Coding

- Erstelle ein `input` mit `type="range"`
- Modifiziere die Scrollbar des body
- Erklaere den Browser-Support (via caniuse)


= Web Components

# Web Components

## Web Components

- Erlaubt eigener Shadow DOM
- Custom Elements
- HTML Imports

= Custom Elements

# Custom Elements

## Custom Elements

```html
Woop woop
``` 
