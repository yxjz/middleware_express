/**
 * Created by Administrator on 2017/11/17.
 */
module.exports=function auth(req,res,next) {
    if(req.url=="/favicon.ico"){
        return
    }
    console.log(req.query)
    if(req.query.username==="laoyang"){
        next()
    }else {
        res.end('go away')
    }
}