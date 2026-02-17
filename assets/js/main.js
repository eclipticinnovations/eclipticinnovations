(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      /* ================================
       Mobile Menu Js Start
    ================================ */
    
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

       $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "19920",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

     $documentOn.on("click", ".mean-expand", function () {
        let icon = $(this).find("i");

        if (icon.hasClass("fa-plus")) {
            icon.removeClass("fa-plus").addClass("fa-minus"); 
        } else {
            icon.removeClass("fa-minus").addClass("fa-plus"); 
        }
    });

    /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        // Open offcanvas
        $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");

        // Hide sticky item
        $(".sidebar-sticky-item").fadeOut().removeClass("active");
        });

        // Close offcanvas
        $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");

        // Show sticky item
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");

        // Show sticky item when overlay clicked
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Offcanvas Link Click (Optional)
        ================================ */

        $(".offcanvas a").on("click", function () {
        $(".sidebar-sticky-item").fadeIn().addClass("active");
    });

    
      /* ================================
       Sticky Header Js Start
    ================================ */

       $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      


      ////////////////////////////////////////////////////
	// 05. Search Js
	$(".search_btn").on("click", function () {
		$(".search_popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
		$("body").addClass("overflow-hidden");
	});

	$(".search_close_btn").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
		$("body").removeClass("overflow-hidden");
	});
	$(".search-popup-overlay").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(this).removeClass("search-popup-overlay-open");
		$("body").removeClass("overflow-hidden");
	});

      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }

      /* ================================
       Parallaxie Js Start
    ================================ */

      if ($('.parallaxie').length && $(window).width() > 991) {
          if ($(window).width() > 768) {
              $('.parallaxie').parallaxie({
                  speed: 0.55,
                  offset: 0,
              });
          }
      }

      /* ================================
      Hover Active Js Start
    ================================ */

    $(".counter-box, .service-card-item, .choose-list li, .feature-box-style-3, .about-wrapper-5 .about-icon-item, .service-box-style-5, .counter-box-style-5, .work-process-box-style-4, .contact-info-box").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".counter-box, .service-card-item, .choose-list li, .feature-box-style-3, .about-wrapper-5 .about-icon-item, .service-box-style-5, .counter-box-style-5, .work-process-box-style-4, .contact-info-box").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);

    

    /* ================================
     Scrolldown Js Start
    ================================ */
    $("#scrollDown").on("click", function () {
        setTimeout(function () {
            $("html, body").animate({ scrollTop: "+=1000px" }, "slow");
        }, 1000);
    });



    /* ================================
      Brand Slider Js Start
    ================================ */

   if ($('.brand-slider').length > 0) {
    const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 6,
            },
            1199: {
                slidesPerView: 5.5,
            },
            991: {
                slidesPerView: 4.5,
            },
            767: {
                slidesPerView: 3.3,
            },
            575: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1.3,
            },
        },
    });
   }


    /* ================================
      Testimonial Slider Js Start
    ================================ */

   if ($('.testimonial-slider').length > 0) {
    const TestimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
      Testimonial Slider-2 Js Start
    ================================ */

   if ($('.testimonial-slider-2').length > 0) {
    const TestimonialSlider2 = new Swiper(".testimonial-slider-2", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
      Testimonial Slider Js Start
    ================================ */

   if ($('.testimonial-slider-4').length > 0) {
    const TestimonialSlider4 = new Swiper(".testimonial-slider-4", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
             1399: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
      Testimonial Slider-2 Js Start
    ================================ */

   if ($('.news-slider').length > 0) {
    const NewsSlider = new Swiper(".news-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dot2",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
      Service Slider Js Start
    ================================ */

   if ($('.service-slider').length > 0) {
    const ServiceSlider = new Swiper(".service-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1399: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
      Service Slider-3 Js Start
    ================================ */

   if ($('.service-slider-3').length > 0) {
    const ServiceSlider3 = new Swiper(".service-slider-3", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1399: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   document.querySelectorAll('.tw-hover-btn').forEach(btn => {
    const circle = btn.querySelector('.tw-btn-circle-dot');

    btn.addEventListener('mouseenter', e => {
        const r = btn.getBoundingClientRect();
        circle.style.left = e.clientX - r.left + 'px';
        circle.style.top = e.clientY - r.top + 'px';

        circle.style.width = '20px';
        circle.style.height = '20px';
        circle.offsetHeight; // force reflow
    });

    btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        circle.style.left = e.clientX - r.left + 'px';
        circle.style.top = e.clientY - r.top + 'px';
    });

    btn.addEventListener('mouseenter', () => {
        circle.style.width = '300%';
        circle.style.height = '300%';
    });

    btn.addEventListener('mouseleave', () => {
        circle.style.width = '20px';
        circle.style.height = '20px';
    });
});

/* ================================
    Marquee-Group Js Start
    ================================ */

if (document.querySelectorAll(".marquee-group").length) {
    const marqueegroup = document.querySelectorAll(".marquee-group");

    marqueegroup.forEach((box) => {
        const hoverImg = box.querySelector(".hover-image");
        if (!hoverImg) return;

        box.addEventListener("mousemove", (event) => {
        const rect = box.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hoverImg.style.opacity = "1";
        hoverImg.style.visibility = "visible";
        hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(10deg)`;
        });

        box.addEventListener("mouseleave", () => {
        hoverImg.style.opacity = "0";
        hoverImg.style.visibility = "hidden";
        hoverImg.style.transform = `translateY(-50%) rotate(10deg)`;
        });
    });
    }

   /* ================================
    Project Slider Js Start
    ================================ */

    if($('.project-slider').length > 0) {
         const ProjectSlider = new Swiper(".project-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1399: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }
 
   //>>box Slider Start <<//
      if($('.box-slider').length > 0) {
        const BoxSlider = new Swiper(".box-slider", {
            slidesPerView: 'auto',
            spaceBetween: 20,
            freemode: true,
            centeredSlides: true,
            loop: true,
            speed: 6000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
        });
    }

    //>>box Slider2 Start <<//
    if($('.box-slider-2').length > 0) {
        const BoxSlider2 = new Swiper(".box-slider-2", {
            slidesPerView: 'auto',
            spaceBetween: 20,
            freemode: true,
            centeredSlides: true,
            loop: true,
            speed: 6000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
        });
    }

    /* ================================
      Custom Accordion Js Start
    ================================ */

   if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {
            var outerBox = $(this).closest('.accordion-box');
            var target = $(this).closest('.accordion');
            var accBtn = $(this);
            var accContent = accBtn.next('.acc-content');

            if (target.hasClass('active-block')) {
                // Already open, so close it
                accBtn.removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                // Close all others
                outerBox.find('.accordion').removeClass('active-block');
                outerBox.find('.acc-btn').removeClass('active');
                outerBox.find('.acc-content').slideUp(300);

                // Open clicked one
                accBtn.addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

    /* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /* ================================
        Back To Top Button Js Start
    ================================ */
    $windowOn.on('scroll', function() {
        var windowScrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if (windowScrollTop + windowHeight >= documentHeight - 10) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    });

    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /* ================================
       Search Popup Toggle Js Start
    ================================ */

    // if ($(".search-toggler").length) {
    //     $(".search-toggler").on("click", function(e) {
    //         e.preventDefault();
    //         $(".search-popup").toggleClass("active");
    //         $("body").toggleClass("locked");
    //     });
    // }
	
    /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

     /* ================================
       Sticky Js Start
    ================================ */


    /* ================================
       Text Anim Js Start
    ================================ */

   if ($(".text-anim").length) {
        let staggerAmount = 0.03,
            translateXValue = 20,
            delayValue = 0.1,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll(".text-anim");

        animatedTextElements.forEach(element => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });

            // ScrollTrigger দিয়ে section এ ঢুকলে animation শুরু হবে
            ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                onEnter: () => {
                    gsap.from(animationSplitText.chars, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        ease: easeType,
                    });
                },
            });
        });
    }

    if($('.tz-itm-title').length) {
		var txtheading = $(".tz-itm-title");

    if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-itm-anim') ){
          gsap.set(el.split.chars, {
            opacity: .3,
            x: "-7",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

    // image animation
    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset"
        }
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
        });
        tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
        });
    });


    gsap.registerPlugin(ScrollTrigger);

    // 992px এর উপরে স্ক্রল পিন চালু হবে
    ScrollTrigger.matchMedia({
    
    "(min-width: 1199px)": function () {
        let projectPanels = document.querySelectorAll('.project-panel');

        projectPanels.forEach((section) => {
        gsap.to(section, {
            scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: "top 10%",
            end: "bottom 65%",
            endTrigger: ".project-panel-area",
            pinSpacing: false,
            markers: false
            }
        });
        });
    },

    // 991px এবং নিচে - সব ScrollTrigger বন্ধ
    "(max-width: 1199px)": function () {
        ScrollTrigger.getAll().forEach(st => st.kill());
    }

    });


  /* ==================================================
    Image Scale
    ================================================== */
   var width = $(window).width();

    if (width > 1023) {
        if (document.querySelectorAll(".scale-animation").length > 0) {

            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray(".scale-animation").forEach(function (section) {

                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        scrub: 3,
                        start: "top 90%",
                        end: "bottom 70%",
                    },
                })
                .from(section, {
                    scale: 0.8,
                    opacity: 0,
                    transformOrigin: "center bottom",
                    duration: 1.5,
                    ease: "power2.out",
                })
                .to(section, {
                    scale: 1,
                    opacity: 1,
                    transformOrigin: "center bottom",
                    duration: 1.2,
                    ease: "power2.out",
                });
            });
        }
    }

  if ($('.full-img-wrap3').length > 0) {
        // Check window width
        if (window.innerWidth > 1399) {
            ScrollTrigger.create({
                trigger: ".full-img-wrap3",
                start: "top 0",
                end: "bottom 0%",
                pin: ".full-img3",
                pinSpacing: false,
            });
        }
    }


    // ScrollTrigger register করতে ভুলবেন না
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".tp_fade_anim").forEach((item) => {
        let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
            tp_duration_value = item.getAttribute("data-duration") || 0.75,
            tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
            tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
            tp_delay_value = item.getAttribute("data-delay") || 0.15,
            tp_ease_value = item.getAttribute("data-ease") || "power2.out";

        let tp_anim_setting = {
            opacity: 0,
            ease: tp_ease_value,
            duration: tp_duration_value,
            delay: tp_delay_value,
            x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
            y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
        };

        // Scroll এ animate হবে
        if (tp_onscroll_value == 1) {
            tp_anim_setting.scrollTrigger = {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reset",
            };
        }

        gsap.from(item, tp_anim_setting);
    });

     /* ==================================================
     Hero  Image 
    ================================================== */
    const hero = document.querySelector('.hero-image');

    if (hero) {
        const heroImg = hero.querySelector('img');
        const box = hero.querySelector('.box');
        const videoCircle = hero.querySelector('.video-circle');

        hero.addEventListener('mousemove', (e) => {
            const { width, height, left, top } = hero.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            const moveX = (x - width / 2) / width * 30;
            const moveY = (y - height / 2) / height * 30;

            if(heroImg) heroImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            if(box) box.style.transform = `translate(${moveX/2}px, ${moveY/2}px)`;
            if(videoCircle) videoCircle.style.transform = `translate(${moveX/3}px, ${moveY/3}px)`;
        });

        hero.addEventListener('mouseleave', () => {
            if(heroImg) heroImg.style.transform = 'translate(0,0) scale(1)';
            if(box) box.style.transform = 'translate(0,0)';
            if(videoCircle) videoCircle.style.transform = 'translate(0,0)';
        });
    }

    /* ==================================================
     Text Anim  Image 
    ================================================== */
    const textAnims = document.querySelectorAll('.text-anims');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // একবার হলে আর observe করবে না
        }
    });
    }, { threshold: 0.5 }); // 50% দেখা গেলে trigger

    textAnims.forEach(el => observer.observe(el));


    // Create mask divs for each wrapper
		
        document.querySelectorAll(".tp-clip-anim").forEach(wrapper => {
        const img = wrapper.querySelector(".tp-anim-img[data-animate='true']");
        if (!img) return;
        const url = img.src;

        // ensure wrapper position relative
        wrapper.style.position = "relative";

        // IntersectionObserver
        const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
        wrapper.querySelectorAll(".mask").forEach(m => m.remove());

            // Create 9 masks
            for (let i = 0; i < 9; i++) {
                const mask = document.createElement("div");
                mask.className = `mask mask-${i + 1}`;
                Object.assign(mask.style, {
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    inset: "0"
                });
                wrapper.appendChild(mask);
            }

            // observer stop
            obs.unobserve(entry.target);
        }
    });
        }, { threshold: 0.2 });

        observer.observe(wrapper);
        });

        // scale animation 
        var scale = document.querySelectorAll(".scale");
        var image = document.querySelectorAll(".scale img");
        scale.forEach((item) => {
            gsap.to(item, {
            scale: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: "bottom top",
                toggleActions: 'play reverse play reverse'
            }
            });
        });
        image.forEach((image) => {
            gsap.set(image, {
            scale: 1.3,
            });
            gsap.to(image, {
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: "bottom top",
                toggleActions: 'play reverse play reverse'
            }
            });
        })


        // Project-card-wrapper-4 animation 
        gsap.utils.toArray(".project-card-wrapper-4 .project-card-items-4").forEach((element, index, array) => {
        if (index === array.length - 1) return;

            const delay = parseFloat(element.getAttribute("data-ani-delay")) || 0;
            gsap.to(element, {
                scale: .6,
                opacity: 0,
                duration: 2,
                delay: delay,
                scrollTrigger: {
                    trigger: element,
                    start: "top 15%",
                    end: "bottom 15%",
                    scrub: 2,
                    pin: true,
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    
    }); // End Document Ready Function




     /* ================================
       Preloader Js Start
    ================================ */

     function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();

    
  })(jQuery); // End jQuery

