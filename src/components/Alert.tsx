import { useAppContext } from '@providers/AppProvider';

const Alert: React.FC  = () => {
   const { alert } = useAppContext();
   return (<>
      {alert && (
         <div className={`alert alert-${alert?.type}`}>
            <button type="button" className="alert__close btn__close"></button>
            {alert?.msg}
         </div>
      )}
   </>)
}
export default Alert;