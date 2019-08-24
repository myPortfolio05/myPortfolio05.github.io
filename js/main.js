$(document).ready(function(){
    $(window).resize(function(){
        if($(window).width() <= 1250){            
            $('.tabs').css('width', '100%');
            var alogo = $('#carslogo').detach();
            $('#auto img').after(alogo);
            var atext = $('#carstext').detach();
            $('#carslogo').after(atext);
            var fb1 = $('#prim').detach();
            $("#carstext").after(fb1);
            var fb2 = $('#seg').detach();
            $('#prim').after(fb2);
    
            var slogo = $("#shoplogo").detach();
            $("#store img").after(slogo);
            var stext = $("#shoptext").detach();
            $("#shoplogo").after(stext);
            var sb1 = $('#ter').detach();
            $('#shoptext').after(sb1);
            var sb2 = $("#quarta").detach();
            $("#ter").after(sb2);
            
            var coslogo = $('#spacelogo').detach();
            $("#space img").after(coslogo);
            var costext = $("#spacetext").detach();
            $("#spacelogo").after(costext);
            var cb1 = $("#cinco").detach();
            $("#spacetext").after(cb1);
            var cb2 = $("#seis").detach();
            $("#cinco").after(cb2);
            imgChange(100, 37);     
        }
        else if($(window).width() > 1250){
            var width = $('.proj').width() - 2.8;
            $('.tabs').css('width', width);

            var alogo = $('#carslogo').detach();
            $('.tabs').prepend(alogo);
            var atext = $('#carstext').detach();
            $('#carslogo').after(atext);
            var fb1 = $('#prim').detach();
            $("#carstext").after(fb1);
            var fb2 = $('#seg').detach();
            $('#prim').after(fb2);

            var slogo = $("#shoplogo").detach();
            $(".tabs").append(slogo);
            var stext = $("#shoptext").detach();
            $("#shoplogo").after(stext);
            var sb1 = $('#ter').detach();
            $('#shoptext').after(sb1);
            var sb2 = $("#quarta").detach();
            $("#ter").after(sb2);
            
            var coslogo = $('#spacelogo').detach();
            $(".tabs").append(coslogo);
            var costext = $("#spacetext").detach();
            $("#spacelogo").after(costext);
            var cb1 = $("#cinco").detach();
            $("#spacetext").after(cb1);
            var cb2 = $("#seis").detach();
            $("#cinco").after(cb2);
        }else{}
    }).resize();
    
    $('.language').click(function(){
        var lang = $('html').attr('lang');
        if(lang == 'ru'){
            $('html').attr('lang','en');
            $('.language a').replaceWith('<div class="language"><a>Ru</a></div>');   
            $('.textabout').replaceWith('<p class="textabout">My name is Vadim Rybko. '
            +'I`m studying in 4th year at <a id="onpu">ONPU ICS</a> and beginner in Front-End development. '
            +'In university study such technologies as Java 8, HTML5+CSS3, JavaScript. '
            +'In 2018th passed Front-End development courses, where studied in more detail HTML5, '
            +'CSS3, JavaScript ES6, jQuery, Bootstrap 4. After graduating the courses I trained my skills, '
            +'by task solving on <a id="freecode">freeCodeCamp</a> and made a few various projects. '
            +'Right now my goal is to find a job where I`ll can improve my skills, expand and deepen knowledges '
            +'in Front-End development and fill up my professional experience in a friendly team. '
            +'And new interesting projects as well.</p>');  
            $('.imgabout .univer a').replaceWith('<a href="https://opu.ua" target="_blank">Odessa National Polytechnic University</a>');
            $('#techno').replaceWith('<p id="techno">In the development of my projects use :</p>');
            $('#tools').replaceWith('<p id="tools">Work with such tools as :</p>');

            $('#auto').replaceWith('<div class="pages open" id="auto"><p>The website of the service station Auto-Focus (ru)</p><img src="img/icaros.PNG" alt=""></div>');
            $('#store').replaceWith('<div class="pages" id="store"><p>The online shop i.Store (ru)</p><img src="img/istorei.PNG" alt=""></div>');
            $('#space').replaceWith('<div class="pages" id="space"><p>The presentation site A Briefer History of Time (ru)</p><img src="img/ispace.PNG" alt=""></div>');            

            $('#carslogo').replaceWith('<p id="carslogo" class="techs mostrar">HTML5 CSS3 JavaScript jQuery Bootstrap4</p>');
            $('#shoplogo').replaceWith('<p id="shoplogo" class="techs">HTML5 CSS3 JavaScript jQuery Bootstrap4</p>');
            $('#spacelogo').replaceWith('<p id="spacelogo" class="techs">HTML5 CSS3 JavaScript jQuery Adobe-Photoshop</p>');

            $('#carstext').replaceWith('<p id="carstext" class="text show">'
            +'The project of the service station site with a wide range of technological services. '
            +'It contains a description of all goods and services, a work-time list, '
            +'an address with a mark on the map and contact information. '
            +'The responsive design of the site allows you to view it on computers, '
            +'laptops, and mobile devices with various formats and screen extensions.</p>');

            $('#shoptext').replaceWith('<p id="shoptext" class="text">'
            +'The project of the online store of different type goods. '
            +'The site contains a description of all the provided goods, '
            +'shared into sections: General, New, Popular. '
            +'A registration form and links to pages on social networks are also available. '
            +'The site is easy to open on various devices thanks to the responsive design, '
            +'counted for different screen sizes.</p>');

            $('#spacetext').replaceWith('<p id="spacetext" class="text">'
            +'The presentation site based on the book A Briefer History of Time by '
            +'Stephen Hawking and the science popular series Cosmos: A Spacetime Odyssey. '
            +'The project lists the main events in the history of the Universe in chronological order. '
            +'Description is accompanied by pictures with animation. '
            +'Links to sources with extended information are also provided. '
            +'The site has an adaptive design, developed for various devices with different screen extensions.</p>');

            $('.contacts .expl').replaceWith('<p class="expl">You can contact me by phone or write a messege</p>'); 
            
            $('#primeiro').attr('href',"https://wlad05rybko.github.io/index.html");
            $('#segundo').attr('href',"https://github.com/Wlad05Rybko/Wlad05Rybko.github.io");
            $('.seefile').removeClass('viver');
            $('#prim').addClass('viver');
            $('#seg').addClass('viver');
            
            $('button').empty();           
            $('button.visit').wrapInner('Visit Site');
            $('button.view').wrapInner('View Source');
            imgChange(60, 7);          
            textChange();
        }
        else if(lang=='en'){
            $('html').attr('lang','ru');
            $('.language a').replaceWith('<div class="language"><a>Eng</a></div>');
            $('.textabout').replaceWith('<p class="textabout">Меня зовут Вадим Рыбко. '
            +'Я студент 4-го курса <a id="onpu">ОНПУ ИКС</a> и начинающий Front-End разработчик. '
            +'В университете изучаю такие технологии как Java 8, HTML5+CSS3, JavaScript. '
            +'В 2018 году проходил курсы Front-End разработки, где более подробно изучил HTML5, '
            +'CSS3, JavaScript ES6, jQuery, Bootstrap 4. После окончания курсов тренировал навыки, '
            +'выполняя задания на <a id="freecode">freeCodeCamp</a> и сделал несколько проектов различной тематики. '
            +'Цель на данный момент - найти место работы, на котором смогу развивать свои умения, расширять и углублять '
            +'знания Front-End разработки и получить опыт работы в дружелюбной команде. '
            +'А также - новые интересные проекты.</p>');    
            $('.imgabout .univer a').replaceWith('<a href="https://opu.ua" target="_blank">Одесский национальный политехнический университет</a>');
            $('#techno').replaceWith('<p id="techno">В разработке своих проектов использую :</p>');
            $('#tools').replaceWith('<p id="tools">Работаю с такими инструментами как :</p>');

            $('#auto').replaceWith('<div class="pages open" id="auto"><p>Сайт автосервиса Auto-Focus</p><img src="img/icaros.PNG" alt=""></div>');
            $('#store').replaceWith('<div class="pages" id="store"><p>Интернет-магазин i.Store</p><img src="img/istorei.PNG" alt=""></div>');
            $('#space').replaceWith('<div class="pages" id="space"><p>Сайт-презентация Кратчайшая История Времени</p><img src="img/ispace.PNG" alt=""></div>');

            $('#carslogo').replaceWith('<p id="carslogo" class="techs mostrar">HTML5 CSS3 JavaScript jQuery Bootstrap4</p>');
            $('#shoplogo').replaceWith('<p id="shoplogo" class="techs">HTML5 CSS3 JavaScript jQuery Bootstrap4</p>');
            $('#spacelogo').replaceWith('<p id="spacelogo" class="techs">HTML5 CSS3 JavaScript jQuery Adobe-Photoshop</p>');
            
            $('#carstext').replaceWith('<p id="carstext" class="text show">'
            +'Проект сайта автосервиса широкого спектра технологических услуг. '
            +'Содержит в себе описание всех товаров и предоставляемых услуг, '
            +'график работы, адрес с отметкой на карте и контактную информацию. '
            +'Адаптивный дизайн сайта позволяет просматривать его на компьютерах, '
            +'ноутбуках, и мобильных устройствах с различными форматом и разрешением экрана.</p>');

            $('#shoptext').replaceWith('<p id="shoptext" class="text">'
            +'Проект интернет-магазина разных видов товаров. '
            +'На сайте присутствует описание предоставляемых товаров, '
            +'распределенных по разделам: Общее, Новинки, Популярное. '
            +'Также доступны форма регистрации и ссылки на страницы в соцсетях. '
            +'Сайт легко открывается на различных устройствах благодаря адаптивному дизайну, '
            +'рассчитанному под разные размеры экрана.</p>');

            $('#spacetext').replaceWith('<p id="spacetext" class="text">'
            +'Проект сайта-презентации, основанный на книге '
            +'Стивена Хокинга «Кратчайшая история времени» и научно-популярном фильме Cosmos: A Spacetime Odyssey. '
            +'В проекте перечислены основные события в истории Вселенной в хронологическом порядке. '
            +'Описание сопровождается картинками с анимацией. Также приведены ссылки на источники с расширенной информацией. '
            +'Сайт обладает адаптивным дизайном, рассчитанным на различные устройства с разным разрешением экрана.</p>');

            $('.contacts .expl').replaceWith('<p class="expl">Вы можете связаться со мной по телефону или написать сообщение</p>');
            $('#primeiro').attr('href',"https://wlad05rybko.github.io/index.html");
            $('#segundo').attr('href',"https://github.com/Wlad05Rybko/Wlad05Rybko.github.io");
            $('.seefile').removeClass('viver');
            $('#prim').addClass('viver');
            $('#seg').addClass('viver');

            $('button').empty();           
            $('button.visit').wrapInner('Посетить Сайт');
            $('button.view').wrapInner('Открыть Код');
            imgChange(70, 37);                              
            textChange();
        }else{}
    })
    $(window).scroll(function(){
        var scroller = $(this).scrollTop();
        $(".paratext").css("transform", "translateY("+ scroller/5 +"%)");
        var um = $('#um').offset().top;
        var dois = $('#dois').offset().top;
        var tres = $('#tres').offset().top;
            if(scroller >= um-10 && scroller < dois-10){
                $('[href="#um"]').css({color: "white", fontWeight: "bold"});                
                $('[href="#dois"]').css({color: "whitesmoke", fontWeight: "normal"});
                $('[href="#tres"]').css({color: "whitesmoke", fontWeight: "normal"});
                
            }else if(scroller >= dois-10 && scroller < tres-150){
                $('[href="#um"]').css({color: "whitesmoke", fontWeight: "normal"});                
                $('[href="#dois"]').css({color: "white", fontWeight: "bold"});
                $('[href="#tres"]').css({color: "whitesmoke", fontWeight: "normal"}); 
            }
            else if(scroller >= tres-150){
                $('[href="#um"]').css({color: "whitesmoke", fontWeight: "normal"});                
                $('[href="#dois"]').css({color: "whitesmoke", fontWeight: "normal"});
                $('[href="#tres"]').css({color: "white", fontWeight: "bold"}); 
            }else if(scroller < um){
                $('[href="#um"]').css({color: "whitesmoke", fontWeight: "normal"});                
                $('[href="#dois"]').css({color: "whitesmoke", fontWeight: "normal"});
                $('[href="#tres"]').css({color: "whitesmoke", fontWeight: "normal"}); 
            }else{}
    });
    $(".anchor").click(function(a){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 700);
        a.preventDefault();
        return false;
    });
    function imgChange(mr, mb){
        $('#onpu').hover(function(){
                $('.camp').css('display',"none"); 
                $('.univer').css('display','block');  
                $('.textabout').css('padding-right','100px');
                $('.imgabout').css('margin','-40px 85px 0 0');     
                $('.imgabout .univer a').css('padding-top','5px');      
            }
        );
        $('#freecode').hover(function(){
                $('.camp').css('display',"block"); 
                $('.univer').css('display','none');      
                $('.textabout').css('padding-right',mr+'px');
                $('.imgabout').css('margin','-50px 70px '+mb+'px 0');                    
            });
    }
    $('.mbars').click(function(){
        $('.mbars').toggleClass('abrir');
        if($('header ul').is( ':hidden' ) ) {
            $('header ul').show('slideToggle');   
        }else{
            $('header ul').hide('slideToggle');
        };
    });
    $('#switch').click(function(){
        $('body').toggleClass('dark');
        if($('body').hasClass('dark')){
            $('.parallax').css('background-image', 'url(https://myportfolio05.github.io/img/night.jpg)');
            $('button').css('box-shadow','0 1px 5px rgba(45, 120, 230, 0.5)'); 
            $('button').css('background-color','rgb(240, 240, 240)');
            $('button').css('color','rgb(3, 5, 20)');
            $('button').hover(
                function(){
                    $(this).css('color','rgb(248, 248, 248)');
                    $(this).css('background-color','rgb(28, 125, 170)');
                },
                function(){
                    $(this).css('color','rgb(3, 5, 20)');
                    $(this).css('background-color','rgb(240, 240, 240)');
                })
           } 
        else if($('body').not('dark')){
            $('.parallax').css('background-image', 'url(https://myportfolio05.github.io/img/day.jpg)');
            $('button').css('box-shadow','0 10px 15px rgba(45, 120, 230, 0.5)');
            $('button').css('color','rgb(248, 248, 248)');
            $('button').css('background-color','rgb(28, 125, 170)');
            $('button').hover(
                function(){
                    $(this).css('color','rgb(3, 5, 20)');
                    $(this).css('background-color','rgb(240, 240, 240)');
                },
                function(){
                    $(this).css('color','rgb(248, 248, 248)');
                    $(this).css('background-color','rgb(28, 125, 170)');
                })
          }else{}   
    });
    function textChange(){
        $('.proj .pages').click(function(){
            $('.proj .pages').removeClass('open');
            $('.proj .pages').eq($(this).index()).addClass('open');
            $('.techs').removeClass('mostrar');
            $('.techs').eq($(this).index()).addClass('mostrar')
            $('.text').removeClass('show');
            $('.text').eq($(this).index()).addClass('show');
            $('.fir').removeClass('viver');
            $('.fir').eq($(this).index()).addClass('viver');
            $('.sec').removeClass('viver');
            $('.sec').eq($(this).index()).addClass('viver');
        });
    }
    textChange();   
    imgChange(70, 37);     
})
