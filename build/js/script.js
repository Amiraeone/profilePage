// Set $ ​​instead of document
const $ = document;

// assign main menu item button to mainMenuItems Variable
const mainMenuItems = $.querySelectorAll('.main-menu-item');
// assign profile contents div tag to profileContent Variable
const profileContent = $.querySelectorAll('.profile-content');
// assign edit input icon I tag to editInputIcon Variable
const editInputIcon = $.querySelectorAll('.edit-input-icon');
// assign orders menu div tag to ordersMenu Variable
const ordersMenu = $.querySelector('.orders-menu');
// assign order menu item li tag to orderMenuItems Variable
const orderMenuItems = $.querySelectorAll('.order-menu-item');
// assign orders pages div tag to ordersPages Variable
const ordersPages = $.querySelectorAll('.orders-pages');
// assign orders page menu items div tag to ordersPageMenuItems Variable
const ordersPageMenuItems = $.querySelectorAll('.orders-page-menu-items');
// assign orders page menu btn div tag to ordersPageMenuBtn Variable
const ordersPageMenuBtn = $.querySelector('.orders-page-menu-btn');


// change profile content with main menu item button
mainMenuItems.forEach((item, index) => {
    item.addEventListener("click", function () {
        // reset colors of main Menu Items
        mainMenuItems.forEach(item => {
            item.classList.remove('text-white-50');
            item.style.color = 'white';
            item.firstElementChild.classList.replace('text-white-50', 'text-white');
        });
        // add color text-white-50 for clicked item
        item.classList.add('text-white-50');
        item.firstElementChild.classList.add('text-white-50');
        // hide all profile Content
        profileContent.forEach(e => {
            e.classList.add('!hidden');
        });
        profileContent[index].classList.replace('!hidden', '!flex');
    });
});

// declaration currentIcon
var currentIcon;

// change edit input icons for edit inputs in next to the inputs
editInputIcon.forEach(icon => {
    // assign target input tag to input Variable
    let input = $.getElementById(icon.id);
    if (input.value != "") {
        icon.classList.replace("bi-plus-lg", "bi-pencil-square");
        currentIcon = "bi-pencil-square";
    }
    icon.addEventListener("click", function () {
        // assign form for submit form
        let form = input.parentElement.parentElement.parentElement;
        if (icon.classList[1].valueOf() == "bi-check2-square") {
            (input.value != "") ? currentIcon = "bi-pencil-square" : currentIcon = "bi-plus-lg";
            // form.submit();
            icon.classList.replace("bi-check2-square", currentIcon);
            input.setAttribute('disabled', 'true');
        }
        else {
            (input.value != "") ? currentIcon = "bi-pencil-square" : currentIcon = "bi-plus-lg";
            icon.classList.replace(currentIcon, "bi-check2-square");
            input.removeAttribute('disabled');
        }
    });
    input.addEventListener("blur", function () {
        if (input.value == "") {
            currentIcon = "bi-plus-lg";
            icon.classList.replace("bi-check2-square", currentIcon);
            input.setAttribute('disabled', 'true');
        }
    });
});

// change orders page with orderMenuItems li tag
orderMenuItems.forEach((item, index) => {
    item.addEventListener("click", function () {
        orderMenuItems.forEach(item => {
            item.classList.remove('!text-[#7B74FF]');
            item.style.color = 'white';
        });
        item.classList.add('!text-[#7B74FF]');
        ordersPageMenuItems.forEach(item => {
            item.classList.remove('!bg-[#7B74FF]');
            item.style.backgroundColor = '#999999';
        })
        let ordersPageMenuItemsTarget = item.firstElementChild;
        ordersPageMenuItemsTarget.classList.add('!bg-[#7B74FF]');
        ordersPages.forEach(e => {
            e.classList.add('!hidden');
        });
        ordersPages[index].classList.remove('!hidden');
        ordersPages[index].classList.add('!flex');
    });
});

// add swiper for Current order part
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 50,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// progress in Current order part
const processingPoint = $.querySelectorAll(".processing-point");
const deliveryPoint = $.querySelectorAll(".delivery-point");
const progress = $.querySelectorAll('.progress');
progress.forEach((progress, index) => {
    // progress.classList.replace("w-0", "w-1/2");
    if (progress.classList.contains("w-1/2")) {
        processingPoint[index].classList.add('bg-emerald-400');
    } else if (progress.classList.contains("w-full")) {
        processingPoint[index].classList.add('bg-emerald-400');
        processingPoint[index].classList.replace("duration-1000", "duration-500");
        deliveryPoint[index].classList.add('bg-emerald-400');
    }
})

// add click event responsive orders page menu btn for show orders menu
ordersPageMenuBtn.addEventListener('click', function () {
    ordersPageMenuBtn.firstElementChild.classList.toggle("before:content-['\\F3FB']");
    ordersMenu.classList.toggle('orders-responsive-menu');
    orderMenuItems.forEach((item) => {
        item.addEventListener('click', function () {
            ordersPageMenuBtn.firstElementChild.classList.remove("before:content-['\\F3FB']");
            ordersMenu.classList.remove('orders-responsive-menu');
        })
    });
});

// counter of orders page and add not value img
setInterval(() => {
    ordersPages.forEach((item, index) => {
        let count = item.firstElementChild.childElementCount
        ordersPageMenuItems.forEach((item1 , index1) => {
            if (index == index1) {
                item1.innerHTML = count;
            }
        })
        if (count == 0 && item.innerHTML != `<img src="./build/img/not-exist.svg" alt="not value">`) {
            item.innerHTML = `<img src="./build/img/not-exist.svg" alt="not value">`;
            item.classList.replace('items-start' , 'items-center');
        } 
        else if (count != 0 && item.innerHTML == `<img src="./build/img/not-exist.svg" alt="not value">`) {
            item.innerHTML.firstElementChild.remove(`<img src="./build/img/not-exist.svg" alt="not value">`)
            item.firstElementChild.classList.replace('items-center' , 'items-start');
        }
    })
}, 300);

// set function for open parts sidebar of current products swiper slide
function openPartsSidebar(elm) {
    elm.nextElementSibling.classList.add("max-sm:block");
}

// set function for close parts sidebar of current products swiper slide
function closePartsSidebar(elm) {
    elm.parentElement.parentElement.parentElement.classList.remove("max-sm:block");
}