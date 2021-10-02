# mjml-parser

Parse MJML files as templates and add variables to make them customizable

## Installation

```bash
yarn add @wavychat/mjml-parser
```
```bash
npm install @wavychat/mjml-parser
```

## How to use:

### Import

Javascript:

```js
const { mjml2HTML } = require("@wavychat/mjml-parser");
```

Typescript:

```ts
import { mjml2HTML } from "@wavychat/mjml-parser";
```

### Add variables to your MJML file

The variables must use be between handlebars:

**_Important:_**

-   Add `$` before the name of the variables
-   Add white spaces around the name: `{{ $varname }}`. **Not `{{$varname}}`**

```html
<mjml>
	<mj-body>
		<mj-button
			font-family="Helvetica"
			background-color="#f45e43"
			color="white"
		>
			{{ $your_variable_name }}
		</mj-button>
	</mj-body>
</mjml>
```

### Generate HTML

You need to call the function that you imported:

```ts
mjml2HTML(
	"absolute path to file mjml file",
	{ your_variable_name: "your_value" },
	{ ...mjmlOptions }
);
```

### Typescript
Now a days, it's common to use Typescript in projects.\
You can type the variables by using typescript genercis:
```ts
import { mjml2HTML, IGenericVariables } from "../src/index";

// IT'S REQUIRED TO EXTEND FROM `IGenericVariables`
interface IMJMLVariables extends IGenericVariables {
	username: string;
	name: string;
}

mjml2HTML<IMJMLVariables>(
	"absolute path to file mjml file",
	all_your_typed_options,
	{ ...mjmlOptions }
);
```
### MJML options

Please read [the official documentation](https://github.com/mjmlio/mjml#inside-nodejs) to have all the official options
