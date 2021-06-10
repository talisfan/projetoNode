const model = require('../model/funcionario.model');
const static = require('../static');


exports.getFunc = async(req, res, next)=>{
    if(req.query && req.query.nome){
        if(!static.utils_functions.queryAccepted(req.query.nomeFunc)){                    
            return next({     
                status: 400,              
                errorMessage: 'QueryString "nome" contains invalid characters.'
            });
        }  
    }
    return await model.getFunc(req, res, next);
}

exports.createFunc = async(req, res, next)=>{
    if(
        req.body && req.body.nome && req.body.telefone 
        && req.body.email && req.body.acesso && req.body.senha 
        && req.body.confSenha && req.body.departamento 
    ){    
        if(req.body.departamento == '*DEPARTAMENTO' || req.body.acesso == '*NIVEL DE ACESSO'){
            return next({     
                status: 400,              
                errorMessage: 'Missing required properties.'
            });
        }
        if(req.body.senha != req.body.confSenha){
            return next({     
                status: 400,              
                errorMessage: 'As senhas não conferem.'
            });
        }           
        if(req.body.senha.length < 6){
            return next({     
                status: 400,              
                errorMessage: 'A senha deve ter no mínimo 6 caracteres.'
            });
        }

        return await model.createFunc(req, res, next);            
    }else{
        return next({     
            status: 400,              
            errorMessage: 'Missing required properties.'
        });
    }
}

exports.attFunc = async(req, res, next)=>{          
    return await model.attFunc(req, res, next);            
}

exports.deleteFunc = async(req, res, next)=>{    
    if(req.params && req.params.idFunc && req.params.idFunc > 0){
        return await model.deleteFunc(req, res, next);                  
    }else{
        return next({     
            status: 400,              
            errorMessage: 'Missing required parameter "idFunc".'
        });
    }
}