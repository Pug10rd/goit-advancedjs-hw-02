import { iziToast } from './config/iziToast';
import 'izitoast/dist/css/iziToast.min.css';

const FULFILLED = 'fulfilled';

const snackbarRefs = {
  form: document.querySelector('.form'),
};

const iziToastOptions = {
  resolved: {
    progressBarColor: '#326101',
    backgroundColor: '#59A10D',
  },
  rejected: {
    progressBarColor: '#B51B1B',
    backgroundColor: '#E00000',
  },
};

const promiseRun = (duration, isFulfilled) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isFulfilled
        ? resolve(`✅ Fulfilled promise in ${duration}ms`)
        : reject(`❌ Rejected promise in ${duration}ms`);
    }, duration);
  });
};

const onFormSubmit = evt => {
  evt.preventDefault();

  const form = evt.currentTarget;

  const duration = form.elements.delay.value;
  const isFulfilled = form.elements.state.value === FULFILLED;

  promiseRun(duration, isFulfilled)
    .then(message => {
      iziToast.show({ ...iziToastOptions.resolved, message });
    })
    .catch(message => {
      iziToast.show({ ...iziToastOptions.rejected, message });
    });

  form.reset();
};

snackbarRefs.form.addEventListener('submit', onFormSubmit);
