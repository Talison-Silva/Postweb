import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { ApplyProviders } from '@/app/contexts/ApplyProviders.tsx';
import { routes } from "@/app/routes/routes.tsx";


export const AppRoutes=({})=>
{	
	const applyRoute= ({path,element})=>(<Route exact path={String(path)} element={element}/>);

	return(
		<Router>
		<ApplyProviders>
			<Routes>				
				{routes.map(applyRoute)}				
			</Routes>
		</ApplyProviders>
		</Router>
	)
}