const moment = require('moment');


module.exports ={
    resultObj(msg,statusCode,data=null){
        return {
            msg,data,statusCode
        }
    },
    formartDate(date){
        return moment(date).format('YYYY-MM-DD hh:mm:ss')
    }
}