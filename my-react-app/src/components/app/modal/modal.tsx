import './modal.css';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updModalActive,
  updUserAuth,
} from '../../../additional/consts/actions';
import { formValidation } from '../../../additional/functions/form_validation';

function Modal() {
  const [nameInput, setNameInput] = useState('');
  const [passInput, setPassInput] = useState('');

  const dispatch = useDispatch();

  const boundUpdModalActive = () => dispatch(updModalActive(false));

  const submitData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = formValidation(nameInput, passInput);
    if (response) {
      dispatch(updUserAuth(response));
      boundUpdModalActive();
      localStorage.setItem('user', 'true');
    } else alert('Неправильные данные');
  };
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          onClick={boundUpdModalActive}
          type="button"
          className="modal__content__btn-close"
        >
          &#10008;
        </button>
        <form
          onSubmit={(event) => submitData(event)}
          className="modal__content__form"
        >
          <div className="content__form-block">
            <div className="form-block__text">Логин</div>
            <input
              onChange={(event) => setNameInput(event.target.value)}
              className="form-block__input"
            />
          </div>
          <div className="content__form-block">
            <div className="form-block__text">Пароль</div>
            <input
              onChange={(event) => setPassInput(event.target.value)}
              type="password"
              className="form-block__input"
            />
          </div>
          <button className="content__form-btn" type="submit">
            Войти
          </button>
          <p>Логин : admin ; пароль : 123</p>
        </form>
      </div>
    </div>
  );
}

export { Modal };
