const express = require('express');
const router = express.Router();
const controller = require('../controller/departamentos_ctrl');
const static = require('../static');

router.get('/getAll', async (req, res, next) => {
    try{
        console.log('\n// ROUTE GET - Get All Departments');
        console.log('--REQUEST:');
        static.utils_functions.printRequest(req);
        await controller.getAllDepart(req, res, next);

    }catch(error){       
        
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Obter Departamentos',            
            errorMessage: error.message || error
        });
    }
});

router.post('/', async (req, res, next) => {
    try{        
        console.log('\n// ROUTE POST - Create Department');
        console.log('--REQUEST:');
        static.utils_functions.printRequest(req);
        await controller.createDepart(req, res, next);
    
    }catch(error){       
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Criar Departamento',            
            errorMessage: error.message || error
        });
    }
});

router.patch('/', async (req, res, next) => {
    try{
        console.log('\n// ROUTE PATCH - Update Department');
        console.log('--REQUEST:');        
        static.utils_functions.printRequest(req);
        await controller.attDepart(req, res, next);
    
    }catch(error){       
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Atualizar Departamento',            
            errorMessage: error.message || error
        });
    }
});

router.delete('/:idDepart', async (req, res, next) => {    
    try{
        console.log('\n// ROUTE DELETE - Delete Department');
        console.log('--REQUEST:');
        static.utils_functions.printRequest(req);
        await controller.deleteDepart(req, res, next);
    
    }catch(error){       
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Deletar Departamento',            
            errorMessage: error.message || error
        });
    }
});

module.exports = router;