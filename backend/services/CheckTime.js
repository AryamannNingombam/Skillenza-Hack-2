exports.addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
}

exports.subtractMinutes = (date, minutes) => {
    return new Date(date.getTime() - minutes * 60000);
}