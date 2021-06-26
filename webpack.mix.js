let mix = require("laravel-mix");
let path = require("path");

mix.setPublicPath(path.resolve("./"));

mix.js("resources/js/app.js", "assets/js");

mix.sass("resources/scss/app.scss", "assets/css");

mix.options({
	postCss: [require("postcss-nested-ancestors"), require("postcss-nested"), require("postcss-import"), require("tailwindcss"), require("autoprefixer")],
});

mix.browserSync({
	proxy: "http://theme-directory",
	host: "localhost",
	open: "external",
	baseDir: "./",
	port: 3000,
	files: ["**/*"],
	notify: {
		styles: {
			top: "auto",
			bottom: "5px",
			left: "auto",
			right: "5px",
		},
	},
});

mix.version();
