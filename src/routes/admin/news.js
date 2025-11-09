import express from 'express';
import NewsController from '../../app/controllers/NewsController.js'; // import default

const router = express.Router();

router.get('/', NewsController.index);
router.get('/:slug', NewsController.show);

export default router;
