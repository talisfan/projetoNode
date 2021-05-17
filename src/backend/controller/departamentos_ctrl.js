const model = require('../model/departamentos_mdl');

exports.getAllDepart = async(req, res, next)=>{
    return await model.getAllDepart(req, res, next);
}

exports.createDepart = async(req, res, next)=>{
    if(req.body && req.body.nomeDepart){             
        return await model.createDepart(req, res, next);                
    }else{        
        return next({     
            status: 400,              
            errorMessage: "Missing property 'nomeDepart'."
        });
    }
}

exports.attDepart = async(req, res, next)=>{      
    if(req.query && req.query.nomeDepart && req.query.idDepart && req.query.idDepart > 0){        
        return await model.attDepart(req, res, next);        
    }else{
        return next({     
            status: 400,              
            errorMessage: 'Missing parameters "nomeDepart" and / or "idDepart".'
        });
    }
}

exports.deleteDepart = async(req, res, next)=>{    
    if(req.params && req.params.idDepart && req.params.idDepart > 0){        
        return await model.deleteDepart(req, res, next);                
    }else{
        return next({     
            status: 400,              
            errorMessage: 'Missing parameter "idDepart".'
        });
    }
}