const ExpressError = require('./ExpressError.js')

//wraps async functions with try catch
const catchAsync = (fn) => {
    return function(req,res,next){
        fn(req, res, next).catch(e=> next(e))
    }
}

module.exports = catchAsync