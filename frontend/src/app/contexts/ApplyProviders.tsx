import { AlertProvider } from '@/app/contexts/AlertContext.tsx'
import { AuthProvider } from '@/app/contexts/AuthContext.tsx';
import { CookiesProvider } from 'react-cookie';

export const ApplyProviders=({children})=>
(
	<CookiesProvider>
		<AuthProvider>
			<AlertProvider>
				{children}
			</AlertProvider>
		</AuthProvider>
	</CookiesProvider>
)