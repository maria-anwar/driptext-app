import moment from "moment";

export const formatDate = (date: string, format: string = "MMMM  YYYY") => {
    return moment(date).format(format);
  };