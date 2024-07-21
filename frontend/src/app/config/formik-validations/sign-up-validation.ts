import * as Yup from 'yup';

export default Yup.object(
	{
		username:Yup.string().required('este campo é obrigatório'),
		email:Yup.string().email('o email deve conter um @exemple.com').required('este campo é obrigatório'),
		password:Yup.string().required('este campo é obrigatório'),
		biography:Yup.string().required('este campo é obrigatório')
	}
);
