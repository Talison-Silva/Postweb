import { authorizationJWT } from '@/helpers/authorizationJWT.ts';
import { uploadImage } from '@/utils/upload-image.ts';
import { Infra } from '@/api/infra/mariadb.ts';
import jwt from 'jsonwebtoken';



class InfraUsers extends Infra {	
	model="Users";

	geted(token,filters)
	{
		return authorizationJWT( async(decode) => {
			return await this.get({...filters})
		},token)
	}

	myAccount(token)
	{
		return authorizationJWT( async(decode) => {
			return await this.get({
				id:decode.sub
			})
		},token)
	}

	async authenticate(data)
	{
		const [account]=await this.get({
			email:data.email
		})

		if(account && account.password===data.password)
		{		
			const token=await jwt.sign({sub: account.id},process.env.SECRET,{
            	expiresIn: '3600s'
            })
			
			return {token:token,client:account};
		}else{
			return 500
		}
	}

	async register(data)
	{		
		if(data.photo){
			data.photo=await uploadImage(data.photo,'photo-perfil')
		}
		
		console.log('register-service :: ',data)
		var hasUser=await this.get({email:data.email})
		
		if(hasUser.length===1)
		{
			return 409
		}
		else
		{			
			return await this.post(data)
		}
	}
}

export default new InfraUsers();