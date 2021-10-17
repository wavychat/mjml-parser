import { mjml2HTMLParser } from "../src/index";

interface IMJMLVars {
	test: string;
	dirname: string;
	headerTest: string;
}

mjml2HTMLParser<IMJMLVars>({
	mjml: {
		path: __dirname + "/test.mjml",
		options: { validationLevel: "skip" },
	},
	template: {
		engine: "ejs",
		vars: {
			test: "testValue",
			headerTest: "headerValue",
			dirname: __dirname,
		}
	}
}).then(console.log)
