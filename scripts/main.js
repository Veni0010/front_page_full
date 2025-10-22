// document.querySelectorAll('.accordion-header').forEach(header => {
//   header.addEventListener('click', () => {
//     const currentlyOpen = document.querySelector('.accordion-content.open');

//     if (currentlyOpen && currentlyOpen !== header.nextElementSibling) {
//       currentlyOpen.style.maxHeight = null;
//       currentlyOpen.classList.remove('open');
//     }

//     const content = header.nextElementSibling;

//     if (content.classList.contains('open')) {
//       content.style.maxHeight = null;
//       content.classList.remove('open');
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//       content.classList.add('open');
//     }
//   });
// });
// document.querySelectorAll('.accordion-header').forEach(header => {
//   header.addEventListener('click', () => {
//     const item = header.closest('.accordion-item');
//     const content = header.nextElementSibling;
//     const currentlyOpenItem = document.querySelector('.accordion-item.open');

//     if (currentlyOpenItem && currentlyOpenItem !== item) {
//       currentlyOpenItem.querySelector('.accordion-content').style.maxHeight = null;
//       currentlyOpenItem.classList.remove('open');
//     }

//     if (item.classList.contains('open')) {
//       content.style.maxHeight = null;
//       item.classList.remove('open');
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//       item.classList.add('open');
//     }
//   });
// });
document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})


  // Ждём, пока DOM полностью загрузится
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open");
    const closeBtn = document.querySelector(".modal_btn_clouse");
    const modalWind = document.querySelector(".modal_wind");
    const modalBac = document.querySelector(".modal_bac");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });


  document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})


  // Ждём, пока DOM полностью загрузится
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open3");
    const closeBtn = document.querySelector(".modal_btn_clouse3");
    const modalWind = document.querySelector(".modal_wind3");
    const modalBac = document.querySelector(".modal_bac3");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });



   document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})


  // Ждём, пока DOM полностью загрузится
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open2");
    const closeBtn = document.querySelector(".modal_btn_clouse2");
    const modalWind = document.querySelector(".modal_wind2");
    const modalBac = document.querySelector(".modal_bac2");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });


   document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open1");
    const closeBtn = document.querySelector(".modal_btn_clouse1");
    const modalWind = document.querySelector(".modal_wind1");
    const modalBac = document.querySelector(".modal_bac1");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });


     document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open5");
    const closeBtn = document.querySelector(".modal_btn_clouse5");
    const modalWind = document.querySelector(".modal_wind5");
    const modalBac = document.querySelector(".modal_bac5");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });
       document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open6");
    const closeBtn = document.querySelector(".modal_btn_clouse6");
    const modalWind = document.querySelector(".modal_wind6");
    const modalBac = document.querySelector(".modal_bac6");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });
     document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open8");
    const closeBtn = document.querySelector(".modal_btn_clouse8");
    const modalWind = document.querySelector(".modal_wind8");
    const modalBac = document.querySelector(".modal_bac8");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });

    document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open9");
    const closeBtn = document.querySelector(".modal_btn_clouse9");
    const modalWind = document.querySelector(".modal_wind9");
    const modalBac = document.querySelector(".modal_bac9");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open10");
    const closeBtn = document.querySelector(".modal_btn_clouse10");
    const modalWind = document.querySelector(".modal_wind10");
    const modalBac = document.querySelector(".modal_bac10");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open11");
    const closeBtn = document.querySelector(".modal_btn_clouse11");
    const modalWind = document.querySelector(".modal_wind11");
    const modalBac = document.querySelector(".modal_bac11");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open12");
    const closeBtn = document.querySelector(".modal_btn_clouse12");
    const modalWind = document.querySelector(".modal_wind12");
    const modalBac = document.querySelector(".modal_bac12");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open13");
    const closeBtn = document.querySelector(".modal_btn_clouse13");
    const modalWind = document.querySelector(".modal_wind13");
    const modalBac = document.querySelector(".modal_bac13");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open14");
    const closeBtn = document.querySelector(".modal_btn_clouse14");
    const modalWind = document.querySelector(".modal_wind14");
    const modalBac = document.querySelector(".modal_bac14");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open15");
    const closeBtn = document.querySelector(".modal_btn_clouse15");
    const modalWind = document.querySelector(".modal_wind15");
    const modalBac = document.querySelector(".modal_bac15");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });
  window.addEventListener('load', () => {
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) &&
                    pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }

        // первый запуск после загрузки
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
});
const video = document.getElementById('bgVideo');
  const soundButton = document.getElementById('soundToggle');
  const volumeSlider = document.getElementById('volumeSlider');
  
  soundButton.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      soundButton.textContent = '🔊';
      volumeSlider.style.display = 'block';
    } else {
      video.muted = true;
      soundButton.textContent = '🔇';
      volumeSlider.style.display = 'none';
    }
  });
  
  volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
  });
