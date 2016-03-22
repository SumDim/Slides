
= Meta-Daten

# Meta-Daten

## Meta-Daten

- Gehoeren in den Header der Datei (&lt;head&gt;)
- Anweisungen fuer den Browser
- Anweisungen fuer Spiders oder Scraper
- Anweisungen fuer Crawler und Bots

## Beispiel: Meta-Daten

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Christoph Martens">
    <meta name="robots" content="noindex, follow">
    <meta name="viewport" content="width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes">
</head>
```

## Beispiel: Meta-Daten (Open Graph)

- Meta-Tags auch fuer Social Web
- Open Graph API (Facebook, Twitter)

```html
<head>
    <meta name="og:image" content="/design/preview.png">
    <meta name="og:image:width" content="256">
    <meta name="og:image:height" content="256">
    <meta name="og:description" content="Awesome website with some content">
</head>
```

## Links

- Links fuer Dokumente
- Aus Zeiten der digitalen Buecher
- Anweisungen fuer den Browser
- `rel` Attribut ( `next` , `prev` , `stylesheet` )

## Beispiel: Links

```html
<head>
    <link rel="stylesheet" href="./design/index.css"/>
    <link rel="stylesheet" media="print" href="./design/print.css"/>

    <link rel="prev" href="page-01.html">
    <link rel="next" href="page-03.html">
</head>
```


= Live Coding

# Live Coding

## Aufgabe

- Stylesheet `./design/index.css` hinzufuegen
- Print Stylesheet `./design/print.css` hinzufuegen
- Beschreibung und Autor der Website hinzufuegen
- Encoding auf `UTF-8` setzen
- Optional: Setze korrektes `viewport` meta-Tag (Mobile-ready)


= Inhalte

# Inhalte

## Bilder

- &lt;img&gt; Tag
- `src` Attribut mit `URL` Wert.
- `alt` Alternativer Text (nicht ladbares Bild)
- `width`, `height` jeweils mit Pixelwert

```html
<img src="awesome-01.jpg" alt="Awesome Stuff"/>
<img src="awesome-02.png" width="100" height="200"/>
```

## Hyperlinks

- Verknuepfung von Dokumenten und/oder Elementen
- Verweis via URL und Identifier (#blub)
- Absolute URL ( `/blub.html` )
- Relative URL ( `../blub.html` )
- Download einer Datei (Anhang oder Text)
- `protocol://server:port/path/file.ext#element`

## Beispiel: Hyperlinks

```html
<a href="https://github.com">Click here to visit GitHub</a>
<a href="https://google.com">Click here to visit Google</a>
<a href="./index.html#seite2">Go to page 2</a>
<a href="//google.com">Visit google (use current protocol)</a>
```

## Beispiel: Protokolle

```html
<a href="mailto:support@github.com">E-Mail to GitHub</a>
<a href="ftp://ftp.hs-mannheim.de/setup.zip">Download via FTP</a>
<a href="./setup.zip">Download via HTTP or HTTPS</a>
<a href="file:///home/cookiengineer/index.html">Local File</a>
```

## Beispiel: Elemente

```html
<a href="#paragraph1">First paragraph</a>
<a href="#paragraph2">Second paragraph</a>

<p id="paragraph1">A long, long time ago ...</p>
<p id="paragraph2">there was a little script kiddo.</p>
```

## Hyperlink Beziehungen

- Unterschiedliche Typen von Links
- Angabe via `rel` Attribut
- `author` , `help` , `license` , `next` , `prev`
- `prefetch` , `nofollow` , `noreferrer`

## Hyperlink Beziehungen

```html
<a rel="download" href="setup.zip">Download</a>
<a rel="nofollow" href="./login.html">Login</a>
<a rel="license" href="/LICENSE.txt">License</a>
<a rel="noreferrer" href="https://google.com">Google (external Site)</a>
```


= Live Coding (Aufgabe)

# Live Coding

## Aufgabe

- Ein `menu`, `header`, `main` und zwei `section`
- Eine `section` mit id `status`
- Eine `section` mit id `tasks`
- Eine `table` mit id `status-overview`
- Verlinke das Menu mit den IDs der Sektionen


= Display Model

# DOM

## DOM

- Document Object Model
- Trennung Inhalt, Design und Verhalten
- HTML5, CSS3, JavaScript / ES
- Bereitstellung DOM APIs fuer JS
- Bereitstellung DOM APIs fuer CSS

## Display Model

- **Alle** Elemente haben ein Display Model
- Haeufigst verwendete Models sind:
- `Block` , `Inline-Block` , `Inline`
- Neuerdings auch `Flex` bzw. Flexbox

## Beispiel: Display Model

```html
<div>Dieses Element hat einen folgenden Absatz</div>
<p>Dieses Element ebenfalls</p>

<span>Diese</span>
<span>Elemente</span>
<span>nicht!</span>
```

## Display Model

- Beeinflussung des Display Models via CSS
- CSS Angabe **ehemals** via `style` Attribut
- CSS Angabe **sauberer** via Style Sheet
- CSS Syntax: `display: block`

```html
<head>
    <style>
        span {
            display: block;
        }
        span.old {
            display: inline;
            text-decoration: line-through;
        }
    </style>
</head>
<body>
<div>Dieses Element hat einen folgenden Absatz</div>
<p>Dieses Element ebenfalls</p>

<span style="background:red;color:blue;">Diese</span>
<span>Elemente</span>
<span><span class="old">nicht!</span> jetzt auch!</span>
</body>
```


= CSS

## CSS

- Cascading Style Sheet
- Aktueller Standard: CSS3 / CSS4
- Selektoren fuer Elemente
- Mehrere Elemente: Klassen ( `.class` )
- Einzelne Elemente: IDs ( `#id` )
- Direkte Strukturen: Child ( `html > body` )
- Verhalten: Pseudoklassen ( `a:hover` , `a:visited` )

## CSS3

- Optische Gestaltung im Browser
- Statisches Design und Animiertes Design
- Transitions (Uebergaenge von - bis)
- Animationen (wiederholte Uebergaenge von - bis)

## Beispiel: Selektoren

```css
html body {
  background: #222222;
  color: #ffffff;
  font-size: 32px;
}

h1 {
  font-size: 2em;
}

#headline {
  background: red;
}

.stuff {
  border: 1px solid red;
}
```


= Positionierung

# Box Model

## width, height und z-index

- **Alle** Elemente haben `width` und `height`
- Default-Wert ist `inherit` bzw. `auto`
- Einheiten fuer Dimensionen sind `em`, `px`, `pt`

## Position

- **Alle** Elemente sind statisch by default
- Absolute Inhalte mit `position: absolute`
- Fixierte Inhalte mit `position: fixed`
- Statische Inhalte mit `position: static`
- Relative Inhalte mit `position: relative`

## Absolute Position

Wenn position `absolute or fixed` dann haben
Elemente eine Position absolut zur linken oberen
Ecke des Bildschirms und eine absolute Breite und
Hoehe.

## Relative Position

Wenn position `static or relative` dann haben
Elemente eine Position `relativ` zu ihrem
umgebenden Element. Der Uebergang von `static`
zu `absolute or fixed` ist **NUR** mit `relative`
moeglich.

## Beispiel: Static und Relative

```html
<div>
  Woop woop (I'm static by default)
  <div style="position:relative">
    I'm still containing
    <p style="position:absolute">
      I'm absolute
    </p>
  </div>
</div>
```

## Box Model: Absolute und Fixed

- Angabe `width` und `height` mit `px`, `%` moeglich
- Absolut zur linken oberen Ecke des Bildschirms
- Absolut zum eigenen Element ohne Vererbung
- Position  **NUR** noch mit `top` , `right` , `bottom` , `left`
- `z-index` zum Einfluss der Zeichenreihenfolge moeglich


## Beispiel: Absolute und Fixed

```html
<style>
  div {
    position: absolute;
    width: 100px;
    height: 100px;
  }
</style>

<div style="background:#ff0000;top:20px;left:20px;z-index:1"></div>
<div style="background:#ffff00;top:50px;left:50px;z-index:10"></div>
<div style="background:#0000ff;top:80px;left:80px;z-index:1"></div>
```

## Box Model: Static und Relative

- Angabe `width` und `height` mit `px`, `%` moeglich
- Relativ zum umgebenden Element
- `z-index` hat keine Wirkung bei `static`
- `z-index` hat Einfluss bei `relative`


## Box Model: Margin und Padding

- **Alle** Elemente haben `margin` und `padding`
- **Alle** Elemente koennen eine `border` haben
- `margin` wirkt nur auf Position **RELATIV** zum umgebenden Element
- `margin` wirkt nicht bei `absolute` oder `fixed` Positionierung


## Demo: Margin und Padding

Live-Demo mit Inspect Element.
Aufzeigen von Static, Relative, Absolute, Fixed.


= Live Coding

# Live Coding

## Aufgabe

- Baue das `menu` mit `position:fixed` linksbuendig
- Baue die `main` (Inhalt) mit `position:absolute` rechtsbuendig
- Setze `overflow:auto` auf die `main` und erklaere den Unterschied
- Optional: Passe die Farben im Menu an ( auch fuer `a:hover` )

