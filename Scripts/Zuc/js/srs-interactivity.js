$(document).ready(function(){


$('.addPlanButton').click(function(){
	$('.plan-registration-box').toggle(1000);
	$(this).css("background","#D9D8D6");
})


function openModal(className,form){
    $(className.data.key).removeClass('non-visible');
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
    function closeModal(className){
    $(className.data.key).addClass('non-visible');
  }

$('.addItemModal').bind('click',{key:'.addItem-modal'},openModal);
let cross = $('.addItem-form').find('.purple-background h2');
cross.bind('click',{key:'.addItem-modal'},closeModal);

});