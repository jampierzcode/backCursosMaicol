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
import CoursesCategoriesController from '#controllers/courses_categories_controller'
import SectionsController from '#controllers/sections_controller'
import LessonsController from '#controllers/lessons_controller'

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

// RUTAS PARA sections
router.get('/api/sections', [SectionsController, 'index']).as('section.index')
router.get('/api/sections/:id', [SectionsController, 'show']).as('section.show')
router.post('/api/sections', [SectionsController, 'store']).as('section.store')
router.put('/api/sections/:id', [SectionsController, 'update']).as('section.update')
router.delete('/api/sections/:id', [SectionsController, 'destroy']).as('section.destroy')
router
  .get('/api/sectionsByCourseId/:id', [SectionsController, 'sectionsByCourseId'])
  .as('section.sectionsByCourseId')

// RUTAS PARA lessons
router.get('/api/lessons', [LessonsController, 'index']).as('lesson.index')
router.get('/api/lessons/:id', [LessonsController, 'show']).as('lesson.show')
router.post('/api/lessons', [LessonsController, 'store']).as('lesson.store')
router.put('/api/lessons/:id', [LessonsController, 'update']).as('lesson.update')
router.delete('/api/lessons/:id', [LessonsController, 'destroy']).as('lesson.destroy')

// RUTAS PARA courses
router
  .post('/api/courses_categories', [CoursesCategoriesController, 'store'])
  .as('course_category.store')
