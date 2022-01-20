const isSafari = navigator.userAgent.indexOf('Safari') !== -1;
const isIphone = navigator.userAgent.indexOf('iPhone') !== -1;

export const toggleMenu = (e) => {
  if (e.key === 'Enter' || e.type === 'click') {
    e.target.classList.toggle('open');
    e.target.nextElementSibling.classList.toggle('open');
    document.body.classList.toggle('open');
    document.documentElement.classList.toggle('open');
  } else return;
};

export const toggleFooterList = (e) => {
  if (e.key === 'Enter' || e.type === 'click') {
    e.target.lastElementChild.classList.toggle('expanded');
    e.target.nextElementSibling.classList.toggle('expanded');
  } else return;
};

export const checkSafariMobile = () => {
  if (isSafari && isIphone && document.body.classList.contains('open')) {
    document.ontouchmove = (e) => e.preventDefault();
  } else {
    document.ontouchmove = (e) => true;
  }
};
