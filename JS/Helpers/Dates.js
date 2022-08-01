const dateFormat = (time, format = "DD/MM/YYYY") => {

    moment.suppressDeprecationWarnings = true;

    return moment(time).format(format);
}