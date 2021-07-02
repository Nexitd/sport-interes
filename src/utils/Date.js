const defaultDate = {
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
  hour12: false,
};

export const getDate = (timestamp = new Date(), obj = defaultDate) =>
  new Date(timestamp).toLocaleString("en-US", obj);
