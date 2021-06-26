const _ = require("lodash");
const theme = require("./theme.json");

module.exports = {
	mode: "jit",
	theme,
	purge: {
		content: ["./template-parts/*.php", "./resources/css/*.css", "./resources/js/*.js", "./comments.php", "./header.php", "./footer.php", "./footer.php", "./single.php", "./index.php", "./404.php", "./safelist.txt"],
	},
	theme: {
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "0rem",
			},
		},
		extend: {
			colors: theme.colors,
		},
	},
	plugins: [],
};
