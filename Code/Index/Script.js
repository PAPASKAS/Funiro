let current_slide_intro = 0
let name_box_info = ['Bohauss', 'Mohauss', 'Nohauss', 'Hohauss']
let description_box_info = ['Luxury big sofa 2-seat', 'Luxury mini sofa 3-seat', 'Luxury bigbon sofa 4-seat', 'Luxury bigger sofa 1-seat']
let price_box_info = ['Rp 17.000.000', 'Rp 25.000.000', 'Rp 127.000.000', 'Rp 1.000.000']

document.querySelectorAll(".intro .nav-slider span")[0].style.border = "1px solid var(--primary)"

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