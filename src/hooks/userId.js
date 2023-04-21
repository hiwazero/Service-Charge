export const userId = () => {
    let data = localStorage.getItem('data');
    let parsedData = JSON.parse(data)
    let user_id = parsedData.user_id;
    return user_id;
}