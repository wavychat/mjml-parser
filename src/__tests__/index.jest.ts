import { mjml2HTML } from "../index";

test("should return the file with variables changed", () => {
	expect(
		mjml2HTML(
			__dirname + "/test.mjml",
			{
				name: "hi",
			},
			{ validationLevel: "skip" }
		)
	).resolves.toContain("hi");
});
