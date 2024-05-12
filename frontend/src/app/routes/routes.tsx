// ---| Postagens |--------------------------------------------------------
import Users from '@/pages/users/index.jsx'
import Postagens from '@/pages/postagens/index.jsx'
import PostagensMore from '@/pages/postagens/actions/more/index.jsx'
import PostagensEdit from '@/pages/postagens/actions/edit/index.jsx'
import PostagensCreated from '@/pages/postagens/actions/created/index.jsx'
// ---||-------------------------------------------------------------------

// ---| Authentication |---------------------------------------------------
import Authorization from '@/pages/authentication/authorization/index.jsx';
import CreateUser from '@/pages/authentication/createUser/index.jsx';
import Badge from '@/pages/authentication/badge/index.jsx';
// ---||-------------------------------------------------------------------

// ---| Layouts |----------------------------------------------------------
import AuthenticationLayout from '@/UI/layouts/authentication.jsx'
import HomeLayout from '@/UI/layouts/home.jsx'
// ---||-------------------------------------------------------------------



export const routes=[
	// [Routes] ~ Users - Views	
	{
		path:"/signIn",
		element:<AuthenticationLayout children={<Authorization/>}/>
	},
	{
		path:"/signUp",
		element:<AuthenticationLayout children={<CreateUser/>}/>
	},
	{
		path:"/badge",
		element:<AuthenticationLayout authorization={true} children={<Badge/>}/>
	},
	{
		path:"/users/",
		element:<HomeLayout children={<Users/>}/>
	},
	// [Routes] ~ Posts - Views
	{
		path:"/",
		element:<HomeLayout children={<h1>...funcionou...</h1>} />
	},
	{
		path:"/posts/",
		element:<HomeLayout children={<Postagens/>}/>
	},	
	{
		path:"/posts/create",
		element:<HomeLayout children={<PostagensCreated/>}/>
	},
	{
		path:"/posts/edit/:id",
		element:<HomeLayout children={<PostagensEdit/>}/>
	},
	{
		path:"/posts/more/:id",
		element:<HomeLayout children={<PostagensMore/>}/>
	}
]