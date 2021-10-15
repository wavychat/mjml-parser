import Underscore from "underscore"
import Handlebars from "handlebars"
import EJS from "ejs";

export const UnderscoreCompiler =
	(vars: any, compileOptions?: Underscore.TemplateSettings) =>
		(xml: string) => Underscore.template(xml, compileOptions)(vars)

export const EJSCompiler =
	(vars: any, compileOptions?: EJS.Options) =>
		(xml: string) =>
			EJS.render(xml, vars, {
				...compileOptions,
				async: false
			})

export const HBSCompiler =
	(
		vars: any,
		compileOptions?: CompileOptions,
		runtimeOptions?: Handlebars.RuntimeOptions
	) =>
		(xml: string) =>
			Handlebars.compile(xml, compileOptions)(vars, runtimeOptions);