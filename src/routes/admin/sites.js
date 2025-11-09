import express from 'express';
import SitesController from '../../app/controllers/SitesController.js';

const router = express.Router();

router.get('/', SitesController.index);

export default router;
