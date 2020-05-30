const { mockRequest } = require("../../../core/testHelpers");
const { getNoteReaction } = require("../getNote");

describe("getNote Reaction", () => {
  test("respond with note data", async () => {
    const req = mockRequest({
      matches: [null, "1"],
      sendRequest: jest.fn().mockResolvedValue({ title: "title" }),
    });

    await getNoteReaction(req);

    expect(req.say).toBeCalledWith("title");
    expect(req.sendRequest).toBeCalledWith({
      service: "EXAMPLE",
      url: "todos/1",
    });
  });
});
