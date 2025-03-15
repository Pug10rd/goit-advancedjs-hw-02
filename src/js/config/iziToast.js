import iziToast from 'izitoast';

iziToast.settings({
  timeout: 3000,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',

  iconColor: '#FFF',
  color: '#FFF',

  close: true,
  position: 'topRight',

  messageColor: '#FFF',
  messageSize: '16px',

  progressBar: true,

  progressBarEasing: 'linear',
});

export { iziToast };
