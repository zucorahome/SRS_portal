$(document).ready(function(){


$('.addPlanButton').click(function(){
	$('.plan-registration-box').show(1000);
	$(this).css("background","#D9D8D6");
	$("html, body").animate({ scrollTop: 640 }, "slow")
})


$('.new-planAdd-title p').click(function(){
	$('.new-planAdd-detail').toggle(1000);
	$(this).find('.change-icon').toggleClass('fa-plus-square fa-minus-square');
});

function openModal(className){
    $(className.data.key).removeClass('non-visible');
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
    function closeModal(className){
    $(className.data.key).addClass('non-visible');
  }

$('.addItemModal-button').bind('click',{key:'.addItem-modal'},openModal);
let cross = $('.addItem-form').find('.purple-background h2');
cross.bind('click',{key:'.addItem-modal'},closeModal);

$('.addItem-save').click(function(){
	//$('.new-planAdd-title p::before').show(700);
	$('.new-planAdd-detail').show(1000);
	$('.addItem-modal').addClass('non-visible');
	$("html, body").animate({ scrollTop: 750 }, "slow")

});

// Plan registration add plan function

$('.planRegis-mainSubmit-button').bind('click',{key:'.mainSubmit-modal-container'},openModal);

$('.mainSubmit-modal').find('.close-modal').bind('click',{key:'.mainSubmit-modal-container'},closeModal);

//For removing plan registrtation form details and closing the modal
$('.remove-planRegis').bind('click',{key:'.remove-planModal-container'},openModal);

$('.remove-planModal').find('.close-modal').bind('click',{key:'.remove-planModal-container'},closeModal);

// Retailer Profile screen function for opening shipping location modal and closing
$('.location-form-button').bind('click',{key:'.shipping-locations-modal'},openModal);
//editing the shiiping location data. the form should populate with entered data
$('.shipping-location-edit').bind('click',{key:'.shipping-locations-modal'},openModal);

let shippingCross = $('.shipping-locations-form').find('.purple-background h2');

shippingCross.bind('click',{key:'.shipping-locations-modal'},closeModal);

//Contact form  

$('.contact-form-button').bind('click',{key:'.contacts-form-modal'},openModal);
$('.contact-form-edit').bind('click',{key:'.contacts-form-modal'},openModal);
let contactFormClose = $('.contacts-form').find('.purple-background h2');
contactFormClose.bind('click',{key:'.contacts-form-modal'},closeModal);


//order entry

$('.orderEntry-add-button').bind('click',{key:'.editOrder-modal-container'},openModal);

let orderAddButton = $('.editOrder-modal').find('.purple-background h2');

orderAddButton.bind('click',{key:'.editOrder-modal-container'},closeModal);


});