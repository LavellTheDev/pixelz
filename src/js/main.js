 //Get all carousels on the page
 const carousels = document.querySelectorAll('.infiniteCarousel');

 //Loop thorugh each carousel
 carousels.forEach(carousel => {
    //Get the inner div of each carousel
    const carouselInner = carousel.querySelector('.infiniteCarousel div');
    //Get the inner content (images) from the carousel
    const carouselContent = Array.from(carouselInner.children);
    //Loop through each item (image)
    carouselContent.forEach(item =>{
        //Duplicate each item
        const duplicateItem = item.cloneNode(true);
        //append the duplicated item to the carousel
        carouselInner.appendChild(duplicateItem);
        //add carousel animation
        carouselInner.style.animation = "move 12s linear infinite";
    });
 });