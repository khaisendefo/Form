const defaultSelect = () => {
  const element = document.querySelector('.contact__form-select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};
defaultSelect();

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);