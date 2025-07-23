import loggerAxios from "../middleware/logger";

export const shortenURL = (data) => loggerAxios.post("/shorten", data);
export const fetchAnalytics = () => loggerAxios.get("/analytics");
