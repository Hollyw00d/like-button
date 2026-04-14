import {useContext} from 'react';
import { LikeButtonContext } from './App';
import { HeartIcon, SpinnerIcon } from './Icons.jsx';

export default function Icon() {
   const  {isLoading} = useContext(LikeButtonContext);
   if(isLoading) {
      return <SpinnerIcon />;
   } 
   return <HeartIcon />;
}