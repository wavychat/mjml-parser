import { mjml2HTMLParser } from "../src/index";

interface IMJMLVars {
	test: string;
	dirname: string;
	headerTest: string;
}

mjml2HTMLParser<IMJMLVars>({
	mjmlPath: __dirname + "/test.mjml",
	mjmlOptions: { validationLevel: "skip" },
	template: {
		engine: "ejs",
		vars: {
			test: "hi",
			headerTest: "string",
			dirname: __dirname
		}
	}
}).then(console.log)
