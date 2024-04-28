const item = document.querySelectorAll('.aside .asideItemsHolder')

item.forEach(el => {
  el.addEventListener('click', (event)=> {
    const parent = event.target.closest('.asideItemsHolder')
    parent.classList.add('highlight')
    item.forEach(otherElement => {
      if (otherElement !== parent) {
        otherElement.classList.remove("highlight");
      }
    });
  })
});
