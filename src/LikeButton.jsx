import Icon from "./Icon";
import ResultMsg from "./ResultMsg";

export default function LikeButton({handleIsActive}) {
   const { isActive } = useContext(LikeButtonContext);
   return (
      <>
         <button type="submit" className={`like-btn ${isActive ? 'active' : ''}`} onClick={handleIsActive}><Icon /> Like</button>
         <ResultMsg />
      </>
   );
}