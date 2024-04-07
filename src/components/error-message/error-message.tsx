import { useAppSelector } from '../../hooks';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className='error-message'>{error.toString()}</div>
    : null;

}

export default ErrorMessage;
