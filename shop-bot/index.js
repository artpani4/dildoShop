const token = process.env["TOKEN"] || null
try{
    if(!token){
        throw new Error("Токен не найден!")
    }
    console.log(token)
}
catch (err){
    console.log(err)
}