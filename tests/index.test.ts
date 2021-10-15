import { mjml2HTML } from "../src/index";

interface IMJMLVars {
	test: string;
}

mjml2HTML<IMJMLVars>({
	mjmlPath: __dirname + "/test.mjml",
	mjmlOptions: { validationLevel: "skip" },
	template: {
		engine: "ejs",
		vars: {
			test: "hi"
		}
	}
}).then(console.log)
