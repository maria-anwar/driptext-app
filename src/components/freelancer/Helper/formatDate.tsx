import moment from "moment";

export const formatDate = (date: string, format: string = "MMM  YYYY") => {
    return moment(date).format(format);
  };