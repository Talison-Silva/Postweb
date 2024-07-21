import { authorizationJWT } from '@/helpers/authorizationJWT.ts';
import { UsersModel } from '@/api/models/users/index.ts';
import { toSeparateID } from '@/utils/toSeparateID.ts';
import { uploadImage } from '@/utils/upload-image.ts';
import { MariaDB } from '@/api/database/mariadb.ts';
import jwt from 'jsonwebtoken';


export class InfraUsers extends MariaDB
{	
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
		if(data.photo)
		{
			data.photo=await uploadImage(data.photo,'photo-perfil')
		}
		
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