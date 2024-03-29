import moment from 'moment/src/moment'

const formatDate = (value, format = 'DD/MM/YYYY') =>
  moment(value).utc().format(format)

export { formatDate }
