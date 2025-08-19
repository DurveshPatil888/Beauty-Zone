const tcheadingb = document.querySelectorAll('.tc-headingb div');
const thirdcontainer = document.querySelectorAll('.third-container > div');
document.querySelector('.third-container .bridal').style.display = 'flex'; //by defualt web open krtach bridal disayla hav adhi

tcheadingb.forEach((heading) => {
  heading.addEventListener('click', () => {
    thirdcontainer.forEach((section) => {
      section.style.display = 'none'; //jeva click krel button vr teva sagd content hide houn jayil adhi
    });
    const servicename = heading.classList[0]; //ji class adhi lavliye te ghetoy
    const targetclass = servicename.slice(0, -1); //last character B la remove krto
    const targetservice = document.querySelector(
      //je service havay to section select krto
      `.third-container .${targetclass}`
    );

    if (targetservice) {
      targetservice.style.display = 'flex'; //tr to section disun jato
    } //je click kelay tech section disel fakt
  });
});

//animation for second left container
const texts = document.querySelectorAll('.sctext div'); //left side vale sagde points texts madhe takle
let index = 0; //je text show kraychay tyacha number

function showNextText() {
  //sagde texts hide krto fakt current (index) vala show krto

  texts.forEach((t) => (t.style.opacity = 0));

  texts[index].style.opacity = 1;

  index = (index + 1) % texts.length; //circular rotation chalat rahil last nantr prt pahila
}

// adhi call kra
showNextText();

setInterval(showNextText, 2000); //pratek 2s madhe text change hot
//Why U Choose Us ?
document.addEventListener('DOMContentLoaded', () => {
  //DOMContentLoaded he Wait krto jo pryant HTML purn load nahi hun jaat (css img sahi wait nahi krnar)
  const observer = new IntersectionObserver((entries) => {
    //IntersectionObserver ye js ch built-in-class ahe je najar thevto like watchman browser chya API cha ek special object ahe
    entries.forEach((entry) => {
      //observer ha 1/1 element check krel
      if (entry.isIntersecting) {
        //screen cha element viewport madhe aala ahe ka ?
        entry.target.classList.add('show'); //mg tyala visible kra
      }
    });
  });

  document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
});

//service image and tyachya content sathi

const observer = new IntersectionObserver((entries) => {
  //navin IntersectionObserver create kela
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); //jr element screen var aal tr visible houn jayil
    } else {
      entry.target.classList.remove('show'); // part hidden houn jayil
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right'); //ye select kart ki services che images ani texts left/right ne slide krnar
hiddenElements.forEach((el) => observer.observe(el)); //oberver tyanna watch krto
