const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionarios_ctrl');
const static = require('../static');

router.get('/getAll', async (req, res, next) => {
    try{
        console.log('\n// ROUTE GET - Get All Functionaries');
        console.log('--REQUEST:');
        static.utils_functions.printRequest(req);
        await controller.getFunc(req, res, next);

    }catch(error){       
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Obter funcionários',            
            errorMessage: error.message || error
        });
    }
});

router.get('/buscaFunc', async (req, res, next) => {
    try{
        console.log('\n// ROUTE GET - Search Functionary');
        console.log('--REQUEST:');
        static.utils_functions.printRequest(req);
        await controller.getFunc(req, res, next);

    }catch(error){       
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Busca funcionário',            
            errorMessage: error.message || error
        });
    }
});

router.post('/', async (req, res, next) => {
    try{
        console.log('\n// ROUTE POST - Create Functionary');
        console.log('--REQUEST:');
        static.utils_functions.printRequest(req);
        await controller.createFunc(req, res, next);
        
    }catch(error){       
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Criar funcionário',            
            errorMessage: error.message || error
        });
    }
});

router.patch('/', async (req, res, next) => {
    try{
        console.log('\n// ROUTE PATCH - Update Functionary');
        console.log('--REQUEST:');
        static.utils_functions.printRequest(req);
        await controller.attFunc(req, res, next);

    }catch(error){       
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Atualizar funcionário',            
            errorMessage: error.message || error
        });
    }
});

router.delete('/:idFunc', async (req, res, next) => {    
    try{
        console.log('\n// ROUTE DELETE - Delete Functionary');
        console.log('--REQUEST:');
        static.utils_functions.printRequest(req);
        await controller.deleteFunc(req, res, next);

    }catch(error){       
        return next({      
            status: error.status || undefined,
            operation: error.operation || undefined,      
            endpoint: 'Deletar funcionário',            
            errorMessage: error.message || error
        });
    }
});

module.exports = router;