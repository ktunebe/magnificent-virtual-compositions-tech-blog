module.exports = {
  format_date: function(date) {
    console.log(new Date(date.getTime()))
    const dateFromTimestamp = new Date(date.getTime())
    const year = dateFromTimestamp.getFullYear()
    const month = dateFromTimestamp.getMonth() + 1
    const day = dateFromTimestamp.getDay()


    return `${month}/${day}/${year}`
  }
}