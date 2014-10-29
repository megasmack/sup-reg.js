# sup-reg.js
==========

Any ® marks will be wrapped in ```<sup>``` tags. Any registration marks already in ```<sup>``` tags will be ignored. So there is no chance of double wrapping them.

## Requirements

- jQuery 1.11.0 or higher

## Usage

Just load the script before the end of ```body``` tag.
```html
<script src="sup-reg.js"></script>
```

Or install via bower
```
bower install sup-reg --save
```

## Possible Issues

It’s assumed that the document is set as utf-8. Haven’t tested other encodings.
