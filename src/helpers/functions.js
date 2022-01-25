const isSafari = navigator.userAgent.indexOf('Safari') !== -1;
const isIphone = navigator.userAgent.indexOf('iPhone') !== -1;

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
