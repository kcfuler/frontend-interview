import url from "../_images/file.png";

it("should import asset with correct publicPath", () => {
	expect(url).toEqual("assets/file.png");
});
