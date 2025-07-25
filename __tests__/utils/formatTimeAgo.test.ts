import { formatTimeAgo } from "@/app/utils/formatTimeAgo";
import moment from "moment";

describe("formatTimeAgo", () => {
  it('returns "a few seconds ago" for current time', () => {
    const now = new Date().toISOString();
    expect(formatTimeAgo(now)).toBe("a few seconds ago");
  });

  it("returns correct time for 3 days ago", () => {
    const past = moment().subtract(3, "days").toISOString();
    expect(formatTimeAgo(past)).toContain("days ago");
  });
});
