let current_slide_intro = 0
let name_box_info = ['Bohauss', 'Mohauss', 'Nohauss', 'Hohauss']
let description_box_info = ['Luxury big sofa 2-seat', 'Luxury mini sofa 3-seat', 'Luxury bigbon sofa 4-seat', 'Luxury bigger sofa 1-seat']
let price_box_info = ['Rp 17.000.000', 'Rp 25.000.000', 'Rp 127.000.000', 'Rp 1.000.000']

document.querySelectorAll(".intro .nav-slider span")[0].style.border = "1px solid var(--primary)"
document.querySelectorAll(".intro .nav-slider div")[0].style.background = "var(--primary)"

slider_intro_next('.intro .move-slider' , '20')

function slider_intro_next(link, gap){
    let quantity_slide = document.querySelectorAll(link + "> span").length
    let slide_width = document.querySelector(link + "> span").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
    }else{
        quantity_slide-=1
    }

    document.querySelectorAll(".intro .nav-slider span")[current_slide_intro].style.border = "1px solid #F9F1E7"
    document.querySelectorAll(".intro .nav-slider div")[current_slide_intro].style.background = "var(--gray5)"

    if(current_slide_intro  < quantity_slide){
        current_slide_intro ++
    }else{
        current_slide_intro  = 0
    } 

    document.querySelectorAll(".intro .nav-slider span")[current_slide_intro].style.border = "1px solid var(--primary)"
    document.querySelectorAll(".intro .nav-slider div")[current_slide_intro].style.background = "var(--primary)"
    

    document.querySelector(".intro .info-box h4").innerHTML = name_box_info[current_slide_intro]
    document.querySelector(".intro .info-box > p").innerHTML = description_box_info[current_slide_intro]
    document.querySelector(".intro .info-box div p").innerHTML = price_box_info[current_slide_intro]

    document.querySelector(link).style.right = slide_width * current_slide_intro  + gap * current_slide_intro  + "px"
}

function  slider_intro_prev(link, gap){
    let quantity_slide = document.querySelectorAll(link + "> span").length
    let slide_width = document.querySelector(link + "> span").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
    }else{
        quantity_slide-=1
    }
    
    document.querySelectorAll(".intro .nav-slider span")[current_slide_intro].style.border = "1px solid #F9F1E7"
    document.querySelectorAll(".intro .nav-slider div")[current_slide_intro].style.background = "var(--gray5)"

    if(current_slide_intro > 0){
        current_slide_intro--
    }else{
        current_slide_intro = quantity_slide
    }

    document.querySelectorAll(".intro .nav-slider span")[current_slide_intro].style.border = "1px solid var(--primary)"
    document.querySelectorAll(".intro .nav-slider div")[current_slide_intro].style.background = "var(--primary)"
    

    document.querySelector(".intro .info-box h4").innerHTML = name_box_info[current_slide_intro]
    document.querySelector(".intro .info-box > p").innerHTML = description_box_info[current_slide_intro]
    document.querySelector(".intro .info-box div p").innerHTML = price_box_info[current_slide_intro]

    document.querySelector(link).style.right = slide_width * current_slide_intro  + gap * current_slide_intro  + "px"
}





//our products
function product_over(n){
    document.querySelectorAll(".our-products .product .label")[n].style.display = "none"
    document.querySelectorAll(".our-products .mouse-over-button")[n].style.display = "grid"
}
function product_out(n){
    document.querySelectorAll(".our-products .product .label")[n].style.display = "flex"
    document.querySelectorAll(".our-products .mouse-over-button")[n].style.display = "none"
}




//tips-trick
let current_slide_tips_trick = 0
document.querySelectorAll(".tips-trick .nav-slider span")[0].style.border = "1px solid var(--primary)"
document.querySelectorAll(".tips-trick .nav-slider div")[0].style.background = "var(--primary)"

function tips_trick_next(link, gap){
    let quantity_slide = document.querySelectorAll(link + "> span").length
    let slide_width = document.querySelector(link + "> span").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
    }else{
        quantity_slide-=1
    }

    document.querySelectorAll(".tips-trick .nav-slider span")[current_slide_tips_trick].style.border = "1px solid #FFFFFF"
    document.querySelectorAll(".tips-trick .nav-slider div")[current_slide_tips_trick].style.background = "var(--gray5)"

    if(current_slide_tips_trick  < quantity_slide){
        current_slide_tips_trick ++
    }else{
        current_slide_tips_trick  = 0
    } 

    document.querySelectorAll(".tips-trick .nav-slider span")[current_slide_tips_trick].style.border = "1px solid var(--primary)"
    document.querySelectorAll(".tips-trick .nav-slider div")[current_slide_tips_trick].style.background = "var(--primary)"

    document.querySelector(link).style.right = slide_width * current_slide_tips_trick  + gap * current_slide_tips_trick  + "px"
}

function tips_trick_prev(link, gap){
    let quantity_slide = document.querySelectorAll(link + "> span").length
    let slide_width = document.querySelector(link + "> span").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
        console.log("4")
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
        console.log("3")
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
        console.log("2")
    }else{
        quantity_slide-=1
        console.log("1")
    }
    
    document.querySelectorAll(".tips-trick .nav-slider span")[current_slide_tips_trick].style.border = "1px solid #FFFFFF"
    document.querySelectorAll(".tips-trick .nav-slider div")[current_slide_tips_trick].style.background = "var(--gray5)"

    if(current_slide_tips_trick > 0){
        current_slide_tips_trick--
    }else{
        current_slide_tips_trick = quantity_slide
    }

    document.querySelectorAll(".tips-trick .nav-slider span")[current_slide_tips_trick].style.border = "1px solid var(--primary)"
    document.querySelectorAll(".tips-trick .nav-slider div")[current_slide_tips_trick].style.background = "var(--primary)"

    document.querySelector(link).style.right = slide_width * current_slide_tips_trick  + gap * current_slide_tips_trick  + "px"
}




let current_slide_inspirations = 0
document.querySelectorAll(".inspirations-slider-wrapper .slide")[0].style.height = "582px"
nav_slider_inspirations('.inspirations-slider-wrapper', current_slide_inspirations, 1)  

function inspirations_slider(link, gap){
    let quantity_slide = document.querySelectorAll(link + " span").length
    let slide_width = document.querySelector(link + " img").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
    }else{
        quantity_slide-=1
    }

    document.querySelectorAll(link + " .slide")[current_slide_inspirations].style.height = "486px"

    nav_slider_inspirations('.inspirations-slider-wrapper', current_slide_inspirations, 0)

    if(current_slide_inspirations < quantity_slide){
        current_slide_inspirations++
    }else{
        current_slide_inspirations = 0
    } 

    nav_slider_inspirations('.inspirations-slider-wrapper', current_slide_inspirations, 1)
    info_box_inspirations('.inspirations-slider-wrapper',current_slide_inspirations)

    document.querySelectorAll(link + " .slide")[current_slide_inspirations].style.height = "582px"

    document.querySelector(link).style.right = slide_width * current_slide_inspirations + gap * current_slide_inspirations + "px"
}

function nav_slider_inspirations(link,current_slide,choice){
    if(choice === 0 ){
        document.querySelectorAll(link + ' .nav-slider span')[current_slide].style.border = "1px solid rgba(255,255,255,0)"
        document.querySelectorAll(link + ' .nav-slider div')[current_slide].style.background = "var(--gray5)"
    }else{
        document.querySelectorAll(link + ' .nav-slider span')[current_slide].style.border = "1px solid var(--primary)"
        document.querySelectorAll(link + ' .nav-slider div')[current_slide].style.background = "var(--primary)"
    }
}

let number_box_info_inspirations = [01,02,03,01]
let name_box_info_inspirations = ['Bed Room','Kitchen','Chest of Drawers','Bed Room']
let philosophy_box_info_inspirations = ['Inner Peace','Purity','Comfort','Inner Peace']
function info_box_inspirations(link,current_slide){
    document.querySelector(link + ' .info-box h4').innerHTML = philosophy_box_info_inspirations[current_slide]
    document.querySelector(link + ' .info-box p:first-of-type').innerHTML = number_box_info_inspirations[current_slide]
    document.querySelector(link + ' .info-box p:last-of-type').innerHTML = name_box_info_inspirations[current_slide]
}