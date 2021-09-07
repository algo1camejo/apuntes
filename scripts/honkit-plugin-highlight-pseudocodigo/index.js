var hljs = require("highlight.js");

hljs.registerLanguage("pseudocode", function(hljs) {
	return {
		aliases: ["pseudocode", "pseudocodigo"],
		case_insensitive: true,
		keywords: {
			keyword:
				"inicio fin "							+	// General
				"si sino entonces según caso defecto "	+	// Condicionales
				"mientras hacer repetir hasta para",		// Bucles
		},
		contains: [
			hljs.QUOTE_STRING_MODE
		]
	};
});
