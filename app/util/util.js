module.exports ={
    resultObj(msg,statusCode,data=null){
        return {
            msg,data,statusCode
        }
    }
}