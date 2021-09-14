const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

// return true if substr is in str
// eg. isSubString(cofe, coffee) = true
const isSubString = (substr, str) => {
  const query = `^${substr.toLowerCase().split('').join('\\S*')}`
  const result = str.toLowerCase().match(new RegExp(query))
  return !!result
}

const utils = {
  capitalize,
  isSubString,
}
export default utils
