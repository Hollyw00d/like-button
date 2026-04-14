import {useContext} from 'react';
import { LikeButtonContext } from './App';

export default function ResultMsg() {
   const {isError, isLoading, lastAction} = useContext(LikeButtonContext);
   let resultMsg = null;
   if(isError && !isLoading) {
      resultMsg = <>Unknown error during attempted {lastAction}. Please try again later!</>;
   } else if(!isError && !isLoading && lastAction) {
      resultMsg = <>Successful {lastAction}!</>;
   }

   return <div role="alert" aria-live="polite">{resultMsg}</div>;
}