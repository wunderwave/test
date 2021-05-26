const app = require('express');
const rt  = app.Router();
const auth_router = require('./auth');

const getUsers = require('./../../controllers/db_crud').getAllUsers;

rt.use(auth_router);
rt.post('/userlist', async (req, res) =>
{
	const user_list = await getUsers();		

	res.json( user_list );
});


module.exports = rt;