$(document).ready(function() {

    // if (window.location.search == "?test") {
        $(".container").hide();
        var val_def =$("#input-username").val();
        var title = $(".container").find("h1").html();
        var roomSpeakers = $(".container").find("#roomSpeakers").html();
        var roomDate = $(".container").find(".roomDate").html();
        if (roomDate.length<5) {
            roomDate = "РќРµ Р·Р°РїР»Р°РЅРёСЂРѕРІР°РЅРѕ";
        }
        var countdown = $(".container").find(".countdown").html();
        var dateTZ = $(".container").find(".dateTZ").html();
        var polit = $(".container").find(".text-grey").html();
	var phoneHtml; var emailHtml;
	var butInner;
	if ( $( "#input-userphone" ).length && $( "#input-userphone" ).hasClass('iti__tel-input') ) {
		phoneHtml = "block";
	} else phoneHtml = "none";
	
	if ( $( "#input-useremail" ).length && $( "#input-useremail" ).parents(".input-group").hasClass('hidden') ) {
		emailHtml = "none";
	} else emailHtml = "block";
	if (window.location.href.indexOf("PP_diagnostic_new") > -1) butInner = "Р’РѕР№С‚Рё";
		else butInner = "Р’РѕР№С‚Рё РЅР° СЃРµРјРёРЅР°СЂ";
 
        html = '<div class="bizon" style="  background: url(https://uk-tools.ru/bizon/bg.jpg); "> <div class="bizon_main"> <div class="bizon_lf"> <div class="bizon_img"><img src="https://uk-tools.ru/bizon/img.png" alt=""></div> </div> <div class="bizon_rg"> <div class="bizon_form"> <p class="bizon_t1">'+title+'</p> <div class="bizon_it"> <p class="bizon_it_t1">Р’РµРґСѓС‰РёРµ РІРµР±РёРЅР°СЂР°</p> <p class="bizon_it_t2">'+roomSpeakers+'</p> </div> <div class="bizon_it"> <p class="bizon_it_t1">Р”Р°С‚Р° РїСЂРѕРІРµРґРµРЅРёСЏ</p> <div class="bizon_it_line"> <p class="bizon_it_t2">'+roomDate+'</p> <p class="bizon_it_t3">'+dateTZ+'</p> <p class="bizon_it_t3">'+countdown+'</p> </div> </div> <div class="bizon_form_box"> <div class="bizon_form_box_list bizon_form_box_list_col"> <div class="bizon_form_box_item name_inp"> <p class="bizon_form_t1">Р’РІРµРґРёС‚Рµ РІР°С€Рµ РёРјСЏ</p> <div class="bizon_input"><input type="text" name="name" class="name_inp" placeholder="РРјСЏ" required=""></div> </div> <div class="bizon_form_box_item email_inp" style="display: '+emailHtml+';"> <p class="bizon_form_t1">Р’РІРµРґРёС‚Рµ РІР°С€ Email</p> <div class="bizon_input"><input type="text" name="name" class="name_inp" placeholder="E-mail" required=""></div> </div> <div class="bizon_form_box_item phone_inp" style="display: '+phoneHtml+';"> <p class="bizon_form_t1">Р’РІРµРґРёС‚Рµ РІР°С€ РўРµР»РµС„РѕРЅ</p> <div class="bizon_input"><input type="text" name="name" class="name_inp" placeholder="РўРµР»РµС„РѕРЅ" required=""></div> </div> <div class="bizon_form_box_item"> <button class="btns"> '+butInner+' </button> </div> </div> <div class="polits"> <p class="text-grey" > '+polit+' </p> </div> </div> </div> </div> </div> </div>';
        $('.container').before(html);
        $(".bglayer").remove();

        if ($(".input-group.group:not(.hidden)").length>1) {
            $(".bizon_form_box_list").removeClass("bizon_form_box_list_col")
        }
        if ($(".input-group.group:not(.hidden) #input-useremail").length>0) {
            $(".email_inp").show();
        }
        if ($(".input-group.group:not(.hidden) #input-userphone").length>0) {
            $(".phone_inp").show();
        }
        $(document).on('input', ".name_inp input" , function() {
            var name = $(this).val();
            $("#input-username").val(name);
       });
       $(document).on('input', ".email_inp input" , function() {
        var name = $(this).val();
        $("#input-useremail").val(name);
       });
       $(document).on('input', ".phone_inp input" , function() {
        var name = $(this).val();
        $("#input-userphone").val(name);
       });

       $(document).on('click', ".btns" , function() {
         $("#btnLogin").trigger("click");
         if ($(".alert-danger").text().length>3) {
            $(".bizon_form").append('<div class="alert alert-danger autherror">'+$(".alert-danger").html()+'</div>')
         }
       });
    // }
 
});
