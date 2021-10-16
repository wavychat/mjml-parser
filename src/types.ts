import { MJMLParsingOptions } from "mjml-core";
import Underscore from "underscore"
import Handlebars from "handlebars"
import EJS from "ejs";

export interface IGenericVariables {
	[variable: string]: any;
}
// TEMPLATE

export interface INoTemplate {
	/** **Default value** Don't use any template engine */
	engine: "no-template";
}

export interface IUnderscoreTemplate {
	/** Use Underscore as template engine */
	engine: "underscore";

	/** Underscore options */
	options?: Underscore.TemplateSettings;
}

export interface IEJSTemplate {
	/** Use EJS as template engine */
	engine: "ejs";

	/** EJS options */
	options?: EJS.Options;
}

export interface IHBSTemplate {
	/** Use Handlebars as template engine */
	engine: "handlebars";

	/** EJS options */
	preCompileOptions?: CompileOptions;

	/** EJS options */
	runtimeOptions?: Handlebars.RuntimeOptions;
}

export type ITemplate = INoTemplate | IUnderscoreTemplate | IEJSTemplate | IHBSTemplate;

export interface IOptions<IVars extends IGenericVariables = any> {
	mjml: {
		/** 
		 * The path to the mjml file.\
		 * **Required**
		 */
		path: string;

		/** 
		 * MJML parsing options.\
		 * Default: `{}`
		 */
		options?: MJMLParsingOptions;
	}

	template?: ITemplate & (IVars extends IGenericVariables ? {
		/** The variables used in the template. */
		vars: IVars
	} : {
		/**
		 * The variables used in the template.\
		 * Default: `{}`
		   * */
		vars?: IVars
	})

}