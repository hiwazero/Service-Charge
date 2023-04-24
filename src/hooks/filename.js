export const filename = (path) => {

    let file = null;

    if(path !== null){
         file = path.split('\\').pop()
    }else {
        file = null;
    }
    
    return file; 
}