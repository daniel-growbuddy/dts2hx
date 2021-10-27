/**
	pixi.js offers both modular and global declarations. If we use modular, `require('pixi.js')` will be emitted in the javascript, whereas if we use global, it assumes pixi.js is already available in the global scope

	In this example we use the global type declarations so we don't need a bundler after haxe generates the javascript file

	To generate global externs we used dts2hx --global. If we wanted modular externs that import modules we can use --modular instead. By default both modular and global externs are generated

	Pixi uses different packages for global and modular types; to use the modular version we can change the import to:
		`import pixi_js.*;`
**/
import pixi.*;

import js.Browser.*;

class Main {

	static function main() {
		/**
			pixi.js text example
			https://pixijs.io/examples/#/text/text.js
		**/
		final app = new Application({ backgroundColor: 0x1099bb });
		document.body.appendChild(app.view);

		final basicText = new Text('Hello from haxe!');
		basicText.x = 50;
		basicText.y = 100;

		app.stage.addChild(basicText);

		final style = new TextStyle({
			fontFamily: 'Arial',
			fontSize: 36,
			fontStyle: 'italic',
			fontWeight: 'bold',
			fill: ['#ffffff', '#00ff99'], // gradient
			stroke: '#4a1850',
			strokeThickness: 5,
			dropShadow: true,
			dropShadowColor: '#000000',
			dropShadowBlur: 4,
			dropShadowAngle: Math.PI / 6,
			dropShadowDistance: 6,
			wordWrap: true,
			wordWrapWidth: 440,
		});

		final richText = new Text('Rich text with a lot of options and across multiple lines', style);
		richText.x = 50;
		richText.y = 250;

		app.stage.addChild(richText);
	}
	
}