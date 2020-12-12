import Route from '@ioc:Adonis/Core/Route'

Route.post('/login',"AuthController.login");

Route.get('/users', 'UsersController.getUsers');
Route.get('/user/:id', 'UsersController.getUserById');
Route.get('/user-points/:id', 'UsersController.getUserPoints');
Route.post('/update-points', 'UsersController.updatePoints');

Route.get('/question/:id/:type', "QuestionsController.getQuestions");
