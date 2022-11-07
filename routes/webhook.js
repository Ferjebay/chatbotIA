const { Router } = require('express');
const { webhook } = require('../controllers/webhook');
    
const router = Router();

/**
 * {{url}}/api/webhook
 */
router.post('/', webhook);

module.exports = router;