export const toggleMenu = (e) => {
  if (e.key === 'Enter' || e.type === 'click') {
    e.target.classList.toggle('open');
    e.target.nextElementSibling.classList.toggle('open');
    document.body.classList.toggle('open');
  } else return;
};

export const toggleFooterList = (e) => {
  if (e.key === 'Enter' || e.type === 'click') {
    e.target.lastElementChild.classList.toggle('expanded');
    e.target.nextElementSibling.classList.toggle('expanded');
  } else return;
};
