
const Auth = async () => {
    try{
        const Token = req.cookies.jwtoken
        console.log(Token);
    }catch(err){
        console.log(err);
    }
}

module.exports = Auth
