import {UserIcon ,ArrowLeftEndOnRectangleIcon} from '@heroicons/react/24/outline';
import logOut from '@/app/services/logout.ts';

export default [
    {
      name:'profile',
      icon:UserIcon,
      method:()=>{}
    },
    {
      name:'logout',
      icon:ArrowLeftEndOnRectangleIcon,
      method:logOut
    }
]