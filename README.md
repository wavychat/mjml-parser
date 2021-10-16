<p align="center">
  <a href="https://github.com/wavychat/mjml-parser">
    <img src="https://raw.githubusercontent.com/wavychat/mjml-parser/main/assets/logo.svg" alt="MJML PARSER" height="400"/>
  </a>
</p>

### Welcome to MJML Parser's documentation!

Parse MJML files as templates and add variables to make them customizable.

[![GitHub issues](https://img.shields.io/github/issues/wavychat/mjml-parser)](https://github.com/wavychat/mjml-parser/issues)
[![GitHub stars](https://img.shields.io/github/stars/wavychat/mjml-parser)](https://github.com/wavychat/mjml-parser/stargazers)
[![GitHub license](https://img.shields.io/github/license/wavychat/mjml-parser)](https://github.com/wavychat/mjml-parser/blob/master/LICENSE)

## Features
- Convert MJML to HTML 💱
- Easy to use ⚡️
- 🤗 Complete typing system
- Multiple template engines 🤝
- ♾️ Customizable

## Table of Content

- [Installation](https://github.com/wavychat/mjml-parser#installation)
- [Import](https://github.com/wavychat/mjml-parser#import)
- [Add Variables to your MJML file](https://github.com/wavychat/mjml-parser#add-variables-to-your-mjml-file)
- [Generate HTML](https://github.com/wavychat/mjml-parser#generate-html)
- [Typescript support](https://github.com/wavychat/mjml-parser#typescript)

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


## License
MJML Parser © 2022, released under the MIT License.