import { Router } from 'express'
import UserController from '../controller/user.controller';
import UserMiddleware from '../middleware/userMiddleware';
import notAllowed from '../controller/generic.controller'

const rescue = require('express-rescue');

const router = Router();

const userController = new UserController();
const userMiddleware = new UserMiddleware();


router.post('/:id', rescue(notAllowed));

router.get('/:id', [
  rescue(userMiddleware.verifyReqParams),
  rescue(userController.findById),
]);

router.put('/:id', rescue(notAllowed));

router.delete('/:id', [
  rescue(userMiddleware.verifyReqParams),
  rescue(userController.deleteById)
]);


//---------------------------------------

router.post('/', [
  rescue(userMiddleware.validateBodyCreate),
  rescue(userMiddleware.verifyCredentialsExists),
  rescue(userController.create)]);

router.get('/', rescue(userController.findAll));

router.put('/', [
  rescue(userMiddleware.validateBodyUpdate),
  rescue(userMiddleware.verifyCredentialsExists),
  rescue(userController.updateById)
])

router.delete('/', rescue(notAllowed))
export default router;