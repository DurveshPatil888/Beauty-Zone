const tcheadingb = document.querySelectorAll('.tc-headingb div');
const herob = document.querySelectorAll('heroheading button');
const thirdcontainer = document.querySelectorAll('.third-container > div');
document.querySelector('.third-container .bridal').style.display = 'flex';

tcheadingb.forEach((heading) => {
  heading.addEventListener('click', () => {
    thirdcontainer.forEach((section) => {
      section.style.display = 'none';
    });
    const servicename = heading.classList[0];
    const targetclass = servicename.slice(0, -1);
    const targetservice = document.querySelector(
      `.third-container .${targetclass}`
    );

    if (targetservice) {
      targetservice.style.display = 'flex';
    }
  });
});
