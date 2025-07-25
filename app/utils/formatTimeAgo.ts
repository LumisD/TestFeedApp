import moment from "moment";

export function formatTimeAgo(dateString: string): string {
  return moment(dateString).fromNow();
}
