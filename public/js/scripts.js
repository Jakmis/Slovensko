    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    /*$("#vlajka").click(function(){
        const audio = new Audio("assets/music/Slovenská hymna - CELÁ NECENZÚROVANÁ.mp3");
        audio.play();
    })*/
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'assets/music/Slovenská hymna - CELÁ NECENZÚROVANÁ.mp3');
        
        audioElement.addEventListener('ended', function() {
            this.play();
        }, false);
        
        audioElement.addEventListener("canplay",function(){
            $("#length").text("Duration:" + audioElement.duration + " seconds");
            $("#source").text("Source:" + audioElement.src);
            $("#status").text("Status: Ready to play").css("color","green");
        });
        
        audioElement.addEventListener("timeupdate",function(){
            $("#currentTime").text("Current second:" + audioElement.currentTime);
        });
        
        $('#play').click(function() {
            audioElement.play();
            $("#status").text("Status: Playing");
            $.fn.visible = function() {
                return this.each(function() {
                    $(this).css("visibility", "visible"); 
                });  
            };
            $("#pause").visible();
            $("#restart").visible();
        });
        
        $('#pause').click(function() {
            audioElement.pause();
            $("#status").text("Status: Paused");
        });
        
        $('#restart').click(function() {
            audioElement.currentTime = 0;
        });
    })

    const heroes = [
        {
           "name":"Juraj Jánošík",
           "birth":"25. ledna 1688",
           "death":"17. března 1713",
           "biography":"Podle slovenského lidového podání byl Juro Jánošík obdařen magickými předměty (kouzelná valaška, čarovný opasek), které mu dodávaly nadpřirozené schopnosti. Okrádal především šlechtice, trestal panské dráby a ze svého lupu vyděloval část pro chudé, tedy bohatým bral a chudým dával. Pro svůj odpor k vrchnosti byl slovenskými obrozenci představován jako romantický hrdina bojující za slovenský národ proti maďarskému útlaku. Socialističtí badatelé jej vnímali jako bojovníka proti feudálnímu útlaku. Podle podhalských pověstí působil legendární zbojník i v Polsku.",

           "online":"https://cs.wikipedia.org/wiki/Juraj_J%C3%A1no%C5%A1%C3%ADk"
        },
        {
            "name":"Aurel Stodola",
            "birth":"11. května 1859",
            "death":"25. prosince 1942",
            "biography":"Aurel Stodolabyl byl slovenský fyzik, inženýr a vynálezce, zakladatel teorie parních a plynových turbín. Jeho výpočty a konstrukce poskytly základ celému odvětví švýcarského strojírenství. Narodil se 11. května 1859 v Liptovském Mikuláši, v části Vrbica-Hušták č. 26 (dle tehdejšího číslování) do evangelické rodiny majitele koželužské dílny Ondreje Stodoly a Anny, rozené Kováčové. Jako datum narození se v literatuře uvádí 10. květen 1859, liptovskomikulášská matrika však jednoznačně uvádí jako den narození až 11. květen. Týden po narození dostal při křtu jména Aurel Bohuslav. Lidovou školu vychodil v Liptovském Mikuláši. Navštěvoval pak německou reálku v Levoči, maturoval na Vyšší státní reálce v Košicích jako nejlepší student. Projevoval mimořádný talent pro matematiku a fyziku, ale miloval také hudbu, hrál na klavír a občas na varhany v Evangelickém kostele v Liptovském Mikuláši.",
            "online":"https://cs.wikipedia.org/wiki/Aurel_Stodola"
         },
         {
            "name":"Josef Maximilián Petzval",
            "birth":"6. ledna 1807",
            "death":"17. září 1891",
            "biography":"psáno též Pecval byl matematik, fyzik a vynálezce. Významné jsou především jeho teoretické výpočty v oblasti optiky a podíl na zdokonalení mnoha optických přístrojů. Narodil se na slovenské Spiši v rodině německého učitele pocházejícího z Moravy. Jeho národnostní příslušnost je nejasná, on sám ji nikdy v oficiálních dokumentech neuváděl. Do základní školy chodil v Kežmarku. V roce 1820 získal jeho otec místo v Levoči a Josef tam studoval na gymnáziu. Ve čtvrté třídě málem propadl z matematiky, ale později se vlastní pílí zlepšil a dokázal řešit nejsložitější příklady. Po jeho ukončení pracoval rok jako vychovatel v šlechtické rodině v maďarské Heveši. Vydělané peníze mu umožnily studium na univerzitě v Budapešti. Roku 1826 se zapsal na inženýrský institut, kde v roce 1828 obdržel inženýrský diplom. Na přímluvu profesora Wolfsteina získal místo městského inženýra a v rámci své funkce vypracoval návrh na vybudování kanálu na Dunaji, který měl ochránit Budapešť od opakujících se záplav. Jeho realizace byla městskou radou zamítnuta. Petzval se dal zapsat na filozofickou fakultu a v roce 1832 získal doktorát z matematiky. Na této univerzitě pak učil nejprve jako asistent a od roku 1835 jako profesor. Byl vynikající matematik, zabýval se hlavně teorií diferenciálních a algebraických rovnic.",
            "online":"https://cs.wikipedia.org/wiki/V%C3%A1clav_Havel"
         },
         {
            "name":"Samuel Mikovíny",
            "birth":"1700",
            "death":"23. března 1750",
            "biography":"byl slovenský inženýr-zeměměřič, kartograf a polyhistor. Narodil se v roce 1686 v Cinobani-Turíčkach (okres Lučenec). V roce 1719 se vyučil v Norimberku mědirytectví a později studoval na německých univerzitách v Altdorfu a Jeně (1721–1723), a nakonec kartografii na vojenské akademii ve Vídni. Krátce působil jako dvorní matematik saského knížete, v letech 1725 až 1735 byl stoličným matematikem-inženýrem Bratislavské stolice, věnoval se zejména melioračním pracím. V roce 1735 ho jmenovali profesorem báňské školy v Banské Štiavnici a inženýrem středoslovenských báňských měst.",
            "online":"https://cs.wikipedia.org/wiki/Jan_Amos_Komensk%C3%BD"
         },


     ];

/*    heroes.forEach((hero)=>{
        $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
    });


    function fillPersonCard(heroes, person) {
        let hero = heroes.find(item => {return item.name === person});
        $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
        $(".card-title").text(hero.name);
        $(".card-text").text(hero.biography);
        $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
       
        $(".gallery").empty();

    }

    
    $("#postavy li:first").addClass('active');

    fillPersonCard(heroes[0].name);

  
    $("#postavy li").on("click", function(){
  
        $("#postavy li").removeClass("active");
  
        $(this).addClass("active");        
    
        let person = $(this).text();
   
        $("#portret").slideUp(1000, function(){

            fillPersonCard(person);
        });

        $("#portret").slideDown(1000);
    });
 */

    function heroesBlock(heroes) {
        heroes.forEach((hero) => {
           $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
        });
        $("#postavy li:first").addClass('active');
        fillPersonCard(heroes, heroes[0].name);
        $("#postavy li").on("click", function () {    
           $("#postavy li").removeClass("active");
           $(this).addClass("active"); 
           let person = $(this).text();
           $("#portret").slideUp(1000, function () {
              fillPersonCard(heroes, person);
           });
           $("#portret").slideDown(1000);
        });
     }
     function fillPersonCard(heroes, person) {
        let hero = heroes.find(item => {
           return item.name === person
        });
        $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
        $(".card-title").text(hero.name);
        $(".card-text").text(hero.biography);
        $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
     }
    
    fetch('js/characters.json')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(json =>{
            console.log(json);
            heroesBlock(json);
        })
        .catch(function (error) {
            console.log('Chyba: \n', error);
        });

})(jQuery);

