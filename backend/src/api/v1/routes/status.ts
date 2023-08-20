import { Router } from 'express';
import * as statusController from '../controllers/status';

const router = Router();

router.route('/')
  .get(statusController.listStatus);

export default router;
