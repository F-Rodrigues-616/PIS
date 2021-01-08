const estrategiaLocal = require('passport-local').Srtategy;

function initialize(passport, getUserbyUser){

    const autenticarUser = (user, pass, feito) =>{
        const utilizador = getUserbyUser(user)

        if(user==null){
            return feito(null, false, { message: 'Esse Utilizador não Existe'})
        }


        try {
            if(pass.localeCompare(user.pass)){
                feito(null, user);
            }else{
                return feito(null, false, {message: "Palavra Passe Incorreta"});
            }
        } catch(e){
            return feito(e);
            
        }
        

    }

    passport.serializeUser((id,feito) => { })
    passport.deserializeUser((id,feito) => { })

}

module.exports = initialize 