const getUser = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}
export default getUser;