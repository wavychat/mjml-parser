// TODO: use handlebars and mjml preprocessors instead of custom loop
// https://github.com/mjmlio/mjml/blob/f161c51ece176c59d193ca8f8b1c2e610f87f4d2/packages/mjml-parser-xml/test/test-preprocessors.js
// (https://stackoverflow.com/a/43112307/12624093)

import mjml2html from "mjml";
import fs from "fs";
import path from "path";
import { EJSCompiler, HBSCompiler, UnderscoreCompiler } from "./compilers";
import { IGenericVariables, IOptions } from "./types";

const defaultOptions: Partial<IOptions<any>> = {
	template: {
		engine: "no-template",
		vars: {},
	},
	mjmlOptions: {},
}

/**
 * Convert mjml file to html and replace variables by values
 * @returns The HTML of the file with variables replaced by values
 */
export const mjml2HTMLParser =
	async <IVars extends IGenericVariables = IGenericVariables>(
		_options: IOptions<IVars>
	): Promise<string> => {
		// overwrite default options by the user's one
		const options = { ...defaultOptions, ..._options };

		// try {
		const mjmlCode: string = (
			await fs.promises.readFile(
				path.join(options.mjmlPath),
				"utf8"
			)
		).trim();

		const htmlCode = mjml2html(mjmlCode, {
			...options,
			preprocessors: [
				options.template?.engine === "underscore" ?
					UnderscoreCompiler(
						options.template.vars,
						options.template.templateOptions
					)
					: options.template?.engine === "handlebars" ?
						HBSCompiler(
							options.template.vars,
							options.template.compileOptions,
							options.template.runtimeOptions
						)
						: options.template?.engine === "ejs" ?
							EJSCompiler(
								options.template.vars,
								options.template.templateOptions
							)
							: xml => xml
			],
		});

		if (htmlCode.errors[0])
			throw htmlCode.errors?.[0]?.formattedMessage;

		return htmlCode.html;
		// } catch (e) {
		// 	throw new Error(e);
		// }
	};
