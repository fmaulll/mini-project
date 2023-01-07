import { useEffect } from "react";

export const useMonth = (date) => {
  useEffect(() => {
    const unix = Date.parse(date);
    const month = new Date(unix).toLocaleString("en-US", { month: "long" });
    return month;
  }, [date]);
};
