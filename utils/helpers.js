module.exports = {
  format_date: function(date) {
    const currentDate = date.toLocaleDateString()
    return currentDate
  },
// Check to see if post id matches currently logged in user (just checking if two inputs are equal)
  id_check: function(a, b) {
    return a === b
  }
}