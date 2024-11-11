import {join} from 'path';

export const uploadImage=async(image,classification):string =>
{
	var name: string = Date.now() + '.' + image.name.split('.')[1]
	var dirUpload: string = join(import.meta.dirname,'../','assets','upload',classification,name)

	await image.mv(dirUpload, err => err?console.error(err):null)

	return name;
}