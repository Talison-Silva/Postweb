// ---| Postagens |--------------------------------------------------------
import Users from '@/pages/users/index.jsx'
import Posts from '@/pages/posts/index.jsx'
import PostsMore from '@/pages/posts/actions/more/index.jsx'
import PostsEdit from '@/pages/posts/actions/edit/index.jsx'
import PostsCreate from '@/pages/posts/actions/create/index.jsx'
// ---||-------------------------------------------------------------------

// ---| Authentication |---------------------------------------------------
import SignIn from '@/pages/authorization/signIn/index.jsx';
import SignUp from '@/pages/authorization/signUp/index.jsx';
import Badge from '@/pages/authorization/badge/index.jsx';
// ---||-------------------------------------------------------------------

// ---| Layouts |----------------------------------------------------------
import AuthorizationLayout from '@/UI/layouts/authentication.jsx'
import HomeLayout from '@/UI/layouts/home.jsx'
// ---||-------------------------------------------------------------------



export const routes=[
	// [Routes] ~ Users - Views	
	{
		path:"/signIn",
		element:<AuthorizationLayout children={<SignIn/>}/>
	},
	{
		path:"/signUp",
		element:<AuthorizationLayout children={<SignUp/>}/>
	},
	{
		path:"/badge",
		element:<AuthorizationLayout authorization={true} children={<Badge/>}/>
	},
	{
		path:"/postweb/users/",
		element:<HomeLayout children={<Users/>}/>
	},
	// [Routes] ~ Posts - Views
	{
		path:"/postweb/",
		element:<HomeLayout children={<h1>...funcionou...</h1>} />
	},
	{
		path:"/postweb/posts/",
		element:<HomeLayout children={<Posts/>}/>
	},	
	{
		path:"/postweb/posts/create",
		element:<HomeLayout children={<PostsCreate/>}/>
	},
	{
		path:"/postweb/posts/edit/:id",
		element:<HomeLayout children={<PostsEdit/>}/>
	},
	{
		path:"/postweb/posts/more/:id",
		element:<HomeLayout children={<PostsMore/>}/>
	}
]