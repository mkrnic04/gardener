


//Facts
var arrFacts = [
    {
        delay: '0.1s',
        header: '1234',
        span: 'Happy Clients'
    },
    {
        delay: '0.3s',
        header: '1234',
        span: 'Garden Complated'
    },
    {
        delay: '0.5s',
        header: '1234',
        span: 'Dedicated Staff'
    },
    {
        delay: '0.7s',
        header: '1234',
        span: 'Awards Achieved'
    }

]

var divFacts = document.getElementById('facts');

function createFact(objFact){
    let fact = `<div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="${objFact.delay}">
                    <h1 class="display-4 text-white" data-toggle="counter-up">${objFact.header}</h1>
                    <span class="fs-5 fw-semi-bold text-light">${objFact.span}</span>
                </div>`
    return fact;
};

for(let objFact of arrFacts){
    divFacts.innerHTML += createFact(objFact)
}





//Services
var arrServices = [
    {
        imgService:{
            src: 'img/service-1.jpg',
            alt: 'Service 1'
        },
        
        imgIcon:{
            src: 'img/icon/icon-3.png',
            alt: 'Icon 1'
        },

        header: 'Naslov 1',
        text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.'
    },
    {
        imgService:{
            src: 'img/service-2.jpg',
            alt: 'Service 2'
        },
        
        imgIcon:{
            src: 'img/icon/icon-6.png',
            alt: 'Icon 2'
        },

        header: 'Naslov 2',
        text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.'
    },
    {
        imgService:{
            src: 'img/service-3.jpg',
            alt: 'Service 2'
        },
        
        imgIcon:{
            src: 'img/icon/icon-5.png',
            alt: 'Icon 3'
        },

        header: 'Naslov 3',
        text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
        
    },
    {
        imgService:{
            src: 'img/service-4.jpg',
            alt: 'Service 4'
        },
        
        imgIcon:{
            src: 'img/icon/icon-4.png',
            alt: 'Icon 4'
        },

        header: 'Naslov 4',
        text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.'
    },
    {
        imgService:{
            src: 'img/service-5.jpg',
            alt: 'Service 5'
        },
        
        imgIcon:{
            src: 'img/icon/icon-8.png',
            alt: 'Icon 5'
        },

        header: 'Naslov 5',
        text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.'
    },
    {
        imgService:{
            src: 'img/service-6.jpg',
            alt: 'Service 6'
        },
        
        imgIcon:{
            src: 'img/icon/icon-2.png',
            alt: 'Icon 6'
        },

        header: 'Naslov 6',
        text: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
        
    }
]

var divServices = document.getElementById('services');

function createService(objService){
    let service = `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="service-item rounded d-flex h-100">
                            <div class="service-img rounded">
                                <img class="img-fluid" src="${objService.imgService.src}" alt="${objService.imgService.alt}"/>
                            </div>
                            <div class="service-text rounded p-5">
                                <div class="btn-square rounded-circle mx-auto mb-3">
                                    <img class="img-fluid" src="${objService.imgIcon.src}" alt="${objService.imgIcon.alt}">
                                </div>
                                <h4 class="mb-3">${objService.header}</h4>
                                <p class="mb-4">${objService.text}</p>
                                <a class="btn btn-sm" href=""><i class="fa fa-plus text-primary me-2"></i>Read More</a>
                            </div>
                        </div>
                    </div>`;
    return service;
}


for(let objService of arrServices){
    divServices.innerHTML += createService(objService);
}






//Projects
var arrProjects = [
    {
        delay: '0.1s',

        imgProject:{
            src: 'img/service-1.jpg',
            alt: 'Project 1'
        },

        header: 'Naslov 1'
    },

    {
        delay: '0.3s',

        imgProject:{
            src: 'img/service-2.jpg',
            alt: 'Project 2'
        },

        header: 'Naslov 2'
    },

    {
        delay: '0.5s',

        imgProject:{
            src: 'img/service-3.jpg',
            alt: 'Project 3'
        },

        header: 'Naslov 3'
    },

    {
        delay: '0.1s',

        imgProject:{
            src: 'img/service-4.jpg',
            alt: 'Project 4'
        },

        header: 'Naslov 4'
    },

    {
        delay: '0.3s',

        imgProject:{
            src: 'img/service-5.jpg',
            alt: 'Project 5'
        },

        header: 'Naslov 5'
    },

    {
        delay: '0.5s',

        imgProject:{
            src: 'img/service-6.jpg',
            alt: 'Project 6'
        },

        header: 'Naslov 6'
    }

   
];

var divProjects = document.getElementById('projects');

function createProject(objProject){
    let project = `<div class="col-lg-4 col-md-6 portfolio-item wow fadeInUp" data-wow-delay="${objProject.delay}">
                        <div class="portfolio-inner rounded">
                            <img class="img-fluid" src="${objProject.imgProject.src}" alt="${objProject.imgProject.alt}">
                            <div class="portfolio-text">
                                <h4 class="text-white mb-4">${objProject.header}</h4>
                                <div class="d-flex">
                                    <a class="btn btn-lg-square rounded-circle mx-2" href="${objProject.imgProject.src}" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                    <a class="btn btn-lg-square rounded-circle mx-2" href=""><i class="fa fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>`
    return project;
}

for(let objProject of arrProjects){
    divProjects.innerHTML += createProject(objProject);
}






//Team
var arrTeam = [

    {
        delay: '0.1s',

        img:{
            src: 'img/team-1.jpg',
            alt: 'Team 1'
        },

        header: 'Doris Jordan',
        text: 'Landscape Designer js'
    },

    {
        delay: '0.3s',

        img:{
            src: 'img/team-2.jpg',
            alt: 'Team 2'
        },

        header: 'Johnny Ramirez',
        text: 'Garden Designer js'
    },

    {
        delay: '0.5s',

        img:{
            src: 'img/team-3.jpg',
            alt: 'Team 3'
        },

        header: 'Diana Wagner',
        text: 'Senior Gardener js'
    },

   
];

var divTeam = document.getElementById('team');

function createTeam(objTeam){
    let team = `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="${objTeam.img.src}">
                        <div class="team-item rounded">
                            <img class="img-fluid" src="${objTeam.img.src}" alt="${objTeam.img.alt}">
                            <div class="team-text">
                                <h4 class="mb-0">${objTeam.header}</h4>
                                <p class="text-primary">${objTeam.text}</p>
                                <div class="team-social d-flex">
                                    <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>`
    return team;
}

for(let objTeam of arrTeam){
    divTeam.innerHTML += createTeam(objTeam);
}














(function ($) {


    
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter - cifre
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   
    // Portfolio isotope and filter
   /*var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });*/
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

