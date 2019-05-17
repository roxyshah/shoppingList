$(function() {
    const btnSumbit = $('#js-shopping-list-form button[type="submit"]');
    const txtItem = $('#shopping-list-entry');

    btnSumbit.click(event => {
        event.preventDefault();
        
        const ulList = $('ul.shopping-list');
        
        //console.log(txtItem.val());
        //console.log(ulList);
        //clone and change word to txtItem.val()
        const getChild1 = ulList.children('li').first();
        //console.log(getChild1);
        const newChild = getChild1.clone(true, true);
        const itemName = newChild.find('span.shopping-item');
        
        itemName.text(txtItem.val());

        ulList.append(newChild);
    });


    const btnCheck = $('ul.shopping-list li button.shopping-item-toggle');

    btnCheck.click(event => {
        event.preventDefault();
        const itemName = $(event.currentTarget).parent().siblings('span.shopping-item');
        itemName.toggleClass('shopping-item__checked');
    });

    const btnDelete = $('ul.shopping-list li button.shopping-item-delete');
    
    btnDelete.click(event => {
        event.preventDefault();

        const itemDelete = $(event.currentTarget).parent().parent();
        itemDelete.remove();
       
    });




});