import moment from "moment";

export const formatDate = (date: string, format: string = "MMMM  YYYY") => {
    if (!date) return "";
    return moment(date).format(format);
  };