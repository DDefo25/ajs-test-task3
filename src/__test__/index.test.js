import getLevel from "../index";
import fetchData from "../http";

jest.mock("../http");

beforeEach(() => {
    jest.resetAllMocks();
});

test.each([
    ["server is responsed", { status: "ok", level: 10 }, "Ваш текущий уровень: 10"],
    ["server is not responsed", { status: "fail" }, "Информация об уровне временно недоступна"],
])(
    ("should return %s with %s"),
    (_, response, level) => {
        fetchData.mockReturnValue(response);

        const result = getLevel(1);
        expect(result).toBe(level);
    },
);
