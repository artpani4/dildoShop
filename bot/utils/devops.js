export const validSecret = (token)=>{
    try{
        if(!token){
            throw new Error("Токен не найден!")
        }
        console.log(token)
    }
    catch (err){
        console.log(err)
    }
}
