import { NotificationProvider } from '@/app/contexts/NotificationContext.tsx'
import { AuthProvider } from '@/app/contexts/AuthContext.tsx';
import { CookiesProvider } from 'react-cookie';

export const ApplyProviders=({children})=>
(
	<CookiesProvider>
		<AuthProvider>
			<NotificationProvider>
				{children}
			</NotificationProvider>
		</AuthProvider>
	</CookiesProvider>
)