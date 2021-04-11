import fs from "fs";
import path from "path";
import mjml2html from "mjml";
import { MJMLParsingOptions } from "mjml-core";

interface IVariables {
	[variable: string]: string;
}

type TMJML2HTML = <IVars extends IVariables = IVariables>(
	mjml_path: string,
	vars?: Partial<IVars>,
	options?: MJMLParsingOptions
) => Promise<string>;

/**
 * Convert mjml file to html and replace variables by values
 * @param mjml_path - The path to the mjml file
 * @param vars - The variables to pass to the template
 * @param options - The options for mjml parsing
 * @returns The HTML of the file with variables replaced by values
 */
export const mjml2HTML: TMJML2HTML = async (
	mjml_path,
	vars = {},
	options = {}
) => {
	try {
		let mjml_code: string = (
			await fs.promises.readFile(path.join(mjml_path), "utf8")
		).trim();

		for (let name of Object.keys(vars)) {
			const value = vars[name];
			mjml_code = mjml_code.replace(
				new RegExp(`{{ \\$${name} }}`, "gm"),
				value!
			);
		}

		const html_code = mjml2html(mjml_code, options);

		if (html_code.errors[0]) throw html_code.errors?.[0]?.formattedMessage;

		return html_code.html;
	} catch (e) {
		throw new Error(e);
	}
};
