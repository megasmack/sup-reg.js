sup-reg.js
==========
Automatically add \<sup\> tags around all registration marks.

Any ```®``` marks will be wrapped in ```<sup>``` tags. Any registration marks already in ```<sup>``` tags will be ignored. So there is no chance of double wrapping them.

## Requirements

- jQuery 1.11.0 or higher

## Usage

Just load the script before the end of ```body``` tag.
```html
<script src="sup-reg.js"></script>
```

The script will add a `<sup>` tag with the class of `sup-reg`. If you want to do specific styling to `<sup>` tags created by sup-reg.js. It will also add an additional class of `sup-reg-kern` to any `<sup>` that is preceded by a period. This is useful for registration marks that are used on abbreviations. This way you can style additional kerning on these specific tags.

## Install via bower
```
bower install sup-reg --save
```

## Possible Issues

It’s assumed that the document is set as utf-8. Haven’t tested other encodings.
