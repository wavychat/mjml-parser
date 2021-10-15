import { MJMLParsingOptions } from "mjml-core";
import Underscore from "underscore"
import Handlebars from "handlebars"
import EJS from "ejs";

export interface IGenericVariables {
	[variable: string]: any;
}
// TEMPLATE

export interface INoTemplate {
	/** 
	 * Which template engine to use.\
	 * Default: `no-template`
	 * */
	engine: "no-template";
}

export interface IUnderscoreTemplate {
	/** Use Underscore as template engine */
	engine: "underscore";

	/** Underscore options */
	templateOptions?: Underscore.TemplateSettings;
}

export interface IEJSTemplate {
	/** Use EJS as template engine */
	engine: "ejs";

	/** EJS options */
	templateOptions?: EJS.Options;
}

export interface IHBSTemplate {
	/** Use Handlebars as template engine */
	engine: "handlebars";

	/** EJS options */
	compileOptions?: CompileOptions;

	/** EJS options */
	runtimeOptions?: Handlebars.RuntimeOptions;
}

export type ITemplate = INoTemplate | IUnderscoreTemplate | IEJSTemplate | IHBSTemplate;

export interface IOptions<IVars> {
	/** 
	 * The path to the mjml file.\
	 * **Required**
	 * */
	mjmlPath: string;

	/** 
	 * MJML parsing options.\
	 * Default: `{}`
	 */
	mjmlOptions?: MJMLParsingOptions;



	template?: ITemplate & {
		/**
		 * The variables used in the template.\
		 * Default: `{}`
		   * */
		vars: Partial<IVars>
	}

}