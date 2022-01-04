# PSD.js + uint8 return

A simple fork of [psd.js](https://github.com/meltingice/psd.js) that incorporates a simple return of a uint8array of a full rasterized image of the document, as long as it was saved in Compatibility Mode in Photoshop.

Useful to manipulate data faster, allowing to use PSD files as textures for libraries like [three.js](https://threejs.org/) or save it in a variety of formats (and even faster) using [sharp](https://sharp.pixelplumbing.com/).
