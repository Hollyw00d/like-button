/*
Create a Like button which appearance changes based on the following states:


The heart and spinner icons are provided for your convenience. The focus of this question is on the handling of the various states, not so much on being pixel perfect. As for colors, you can use #f00 for the red and #888 for the gray.

Requirements
In the button's default state, when it is clicked, it goes into the loading state and a request is made to the provided back end API which has a 50% chance of succeeding/failing.

Success response: If the request was successful, the button changes to the "Liked" state.
Failure response: Otherwise it returns to the "Default"/"Hovered" state depending on whether the cursor is still over the button. The error message from the back end API should be shown below the button.
If the user clicks on a button in the "Liked" state, the reverse happens.

Plan:
1. Use Math.round(Math.random()); to get 50% change of succeeding

2. Use CSS to make rounded corners, and hover state

3. Use <HeartIcon /> and <SpinnerIcon /> for icons
*/
import {useState, createContext} from 'react';
import LikeButton from './LikeButton.jsx';
import './App.css';

export const LikeButtonContext = createContext(null);

export default function App() {
   const [stateObj, setStateObj] = useState({
      isActive: false,
      isError: false,
      isLoading: false,
      lastAction: null
   });
      
   const handleIsActive = e => {
      e.preventDefault();
      if (stateObj.isLoading) return;

      const action = stateObj.isActive ? 'unlike' : 'like';
      const isFailure = Math.round(Math.random()) === 1;

      setStateObj(prev => ({
         ...prev,
         isLoading: true,
         lastAction: action
      }));

      setTimeout(() => {
         if(isFailure) {
            setStateObj(prev => ({
               ...prev,
               isError: true,
               isLoading: false      
            }));
         } else {   
            setStateObj(prev => ({
               ...prev,
               isActive: !prev.isActive,
               isError: false,
               isLoading: false      
            }));            
         }
      }, 1000);
   };

   return (
      <LikeButtonContext value={stateObj}>
         <form action={stateObj.isActive ? 'unlike' : 'like'} method="post">
            <LikeButton handleIsActive={handleIsActive} />
         </form>
      </LikeButtonContext>
   );
}