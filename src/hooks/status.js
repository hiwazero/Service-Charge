export const status = (data) => {
    let status = ""

    if(data === 1){
        status = "New"
    }else if(data === 2){
        status = "Pending"
    }else{
        status = "Closed"
    }

    return status
}