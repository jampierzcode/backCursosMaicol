/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import RolesController from '#controllers/roles_controller'
import CategoriesController from '#controllers/categories_controller'
import CoursesController from '#controllers/courses_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.post('/api/register', [AuthController, 'register']).as('auth.register')
router.post('/api/newuser', [AuthController, 'createUser']).as('auth.createUser')
router.post('/api/login', [AuthController, 'login']).as('auth.login')
router.delete('/api/logout', [AuthController, 'logout']).as('auth.logout').use(middleware.auth())
router.get('/api/me', [AuthController, 'me']).as('auth.me')

// RUTAS PARA roles
router.get('/api/roles', [RolesController, 'index']).as('role.index')
router.get('/api/roles/:id', [RolesController, 'show']).as('role.show')
router.post('/api/roles', [RolesController, 'store']).as('role.store')
router.put('/api/roles/:id', [RolesController, 'update']).as('role.update')
router.delete('/api/roles/:id', [RolesController, 'destroy']).as('role.destroy')

// RUTAS PARA categorias
router.get('/api/categories', [CategoriesController, 'index']).as('category.index')
router.get('/api/categories/:id', [CategoriesController, 'show']).as('category.show')
router.post('/api/categories', [CategoriesController, 'store']).as('category.store')
router.put('/api/categories/:id', [CategoriesController, 'update']).as('category.update')
router.delete('/api/categories/:id', [CategoriesController, 'destroy']).as('category.destroy')

// RUTAS PARA courses
router.get('/api/courses', [CoursesController, 'index']).as('course.index')
router.get('/api/courses/:id', [CoursesController, 'show']).as('course.show')
router.post('/api/courses', [CoursesController, 'store']).as('course.store')
router.put('/api/courses/:id', [CoursesController, 'update']).as('course.update')
router.delete('/api/courses/:id', [CoursesController, 'destroy']).as('course.destroy')
