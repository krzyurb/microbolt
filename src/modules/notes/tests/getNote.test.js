const { mockRequest, runReaction } = require("../../../core/testHelpers");
const { getNoteReaction } = require("../getNote");

describe("getNote Reaction", () => {
  test("respond with note data", async () => {
    const req = mockRequest({
      matches: [null, "1"],
    });

    const dep = {
      sendAuthorizedRequest: jest.fn().mockResolvedValue({ title: "title" }),
    };

    await runReaction(getNoteReaction, req, dep);

    expect(req.say).toBeCalledWith("title");
  });
});
