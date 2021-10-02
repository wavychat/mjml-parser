import { mjml2HTML, IVariables } from "../src/index";

interface IMJMLVars {
	name: string;
	bye: string;
}

test("should return the file with variables changed", () => {
	expect(
		mjml2HTML<IMJMLVars>(
			__dirname + "/test.mjml",
			{
				name: "hi",
				bye: "ih",
			},
			{ validationLevel: "skip" }
		)
	).resolves.toContain("hi");
});
