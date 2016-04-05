# upi-placeholder

Generate a user profile image placeholder by using initials of user name

## Getting Started

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/neneji/upi-placeholder/master/dist/upi-placeholder.min.js
[max]: https://raw.github.com/neneji/upi-placeholder/master/dist/upi-placeholder.js

In your web page:

include the lib in your page.

```html
<script src="dist/upi-placeholder.min.js"></script>
```

then call
```js
upi.generateProfileImage(userName, options);
```
to generate the user profile image when the page is ready.

## Documentation
available options:
* **fontCOlor**: color of text, default is white
* **fontFamily**: font family, default is 'sans-serif'
* **size**: the size of generated image, the font size is 60% of the size
* **backgroundColor**: background color of the image, default is a random color

## Examples
```html
<script src="dist/upi-placeholder.min.js"></script>
<script>
var image = new Image();
var userName = 'Mario Rossi',
    options = {
        'fontColor': '#123456' // text color, default is #ffffff
        'backgroundColor': '#654321', // background color, default is a random color
        'size': 100, // result image size
    };
image.src = upi.generateProfileImage(userName, options);
</script>
```

## License
Copyright (c) 2016 neneji  
Licensed under the MIT license.
