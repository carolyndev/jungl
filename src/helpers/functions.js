const isSafari = navigator.userAgent.indexOf('Safari') !== -1;
const isIphone = navigator.userAgent.indexOf('iPhone') !== -1;

export const toggleFooterList = (e) => {
  if (e.key === 'Enter' || e.type === 'click') {
    e.target.lastElementChild.classList.toggle('expanded');
    e.target.nextElementSibling.classList.toggle('expanded');
  } else return;
};

export const checkSafariMobile = () => {
  // if (isSafari && isIphone && document.body.classList.contains('open')) {
  if (document.body.classList.contains('open')) {
    document.addEventListener('touchmove', (e) => e.preventDefault(), {
      passive: false,
    });

    // document.ontouchmove = (e) => e.preventDefault();
    console.log('touchmove false');
  } else {
    document.addEventListener('touchmove', (e) => true, {
      passive: false,
    });
    // document.ontouchmove = (e) => true;
    console.log('touchmove true');
  }
};

export const removeScrollBlock = () => {
  document.body.classList.remove('open');
  document.documentElement.classList.remove('open');
};
console.log(document);
