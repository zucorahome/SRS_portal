$(document).ready(function(){


$('.addPlanButton').click(function(){
	$('.plan-registration-box').show(1000);
	$(this).css("background","#D9D8D6");
	$("html, body").animate({ scrollTop: 640 }, "slow")
})


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
	$('.new-planAdd-title p::before').show(700);
	$('.new-planAdd-detail').show(1000);
	$('.addItem-modal').hide("slow");
	$("html, body").animate({ scrollTop: 750 }, "slow")

});

$('.planRegis-mainSubmit-button').bind('click',{key:'.mainSubmit-modal-container'},openModal);

$('.mainSubmit-modal').find('.close-modal').bind('click',{key:'.mainSubmit-modal-container'},closeModal);

$('.remove-planRegis').bind('click',{key:'.remove-planModal-container'},openModal);

$('.remove-planModal').find('.close-modal').bind('click',{key:'.remove-planModal-container'},closeModal);

$('.contact-form-button').bind('click',{key:'.shipping-locations-modal'},openModal);

let shippingCross = $('.shipping-locations-form').find('.purple-background h2');

shippingCross.bind('click',{key:'.shipping-locations-modal'},closeModal);



});