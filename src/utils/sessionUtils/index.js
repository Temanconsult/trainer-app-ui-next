export default () => {
  const authToken = sessionStorage.getItem('authToken')
  return authToken !== null
}
