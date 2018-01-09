/*Function that shows the password when checked*/
$(document).ready(function () {
    $("#chkShowPassword").bind("click", function () {
        var txtPassword = $("#txtPassword");
        if ($(this).is(":checked")) {
            txtPassword.after('<input onchange = "PasswordChanged(this);" id = "txt_' + txtPassword.attr("id") + '" type = "text" value = "' + txtPassword.val() + '" />');
            txtPassword.hide();
        } else {
            txtPassword.val(txtPassword.next().val());
            txtPassword.next().remove();
            txtPassword.show();
        }
    });
});

$(document).ready(function PasswordChanged(txt) {
    $(txt).prev().val($(txt).val());
});
/*Function that shows the password when checked End*/

/*Function that checks strength of password*/
$(document).ready(function () {
    $('#txtPassword').keyup(function () {
        $('.line').html(checkStrength($('#txtPassword').val()))
    })

    function checkStrength(password) {
        var enabledLinkClassName = "enabledLink";
        var strength = 0

        if (password.length < 7) {
            $('#enableLink').removeAttr('href');
        } else if (password.length > 7) {
            strength += 1;
            $('#enableLink').addClass(enabledLinkClassName);
            $('#enableLink').attr('href', 'form-construct-2.html');
        } else {
            $('#enableLink').removeClass(enabledLinkClassName);
        }

        //If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1

        //If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

        //If value is less than 2

        if (strength < 2) {
            $('.line').removeClass('line-yellow line-green');
            $('.line').addClass('line-red');
        } else if (strength == 2) {
            $('.line').removeClass('line-red line-green');
            $('.line').addClass('line-yellow');
        } else {
            $('.line').removeClass('line-yellow line-green');
            $('.line').addClass('line-green');
        }
    }
});

/*$(document).ready(function () {
 $('#passWord').keyup(function () {
 $('.smartfon-container').html(showInformation($('#passWord').val()))



 })
 });*/

$(document).ready(function () {
    var password = $('#passWord');
    password.keyup(function () {
        console.log()

        if (password.val().length == 4) {
            $('.main-container').addClass('hide');
            $('.main-container-two').removeClass('hide');
        }
    });
});

/*Show text, animate and*/

/*Safe logging*/
$(document).ready(function () {
    var newMessage = $('#new-message');
    var clientMessage = $('#client-message');
    var verifyMessage = $('#verify');
    var messageIcon = $('.message-icon');
    var exitIcon = $('.fa-times');
    var warningMessage = $('#warning');
    var congratsMessage = $('.congrats-message');

    clientMessage.hide();
    verifyMessage.hide();
    exitIcon.hide();
    warningMessage.hide();
    congratsMessage.hide();

    messageIcon.click(function () {
        newMessage.hide();
        clientMessage.show();
        verifyMessage.show(2000);
        exitIcon.show(1000);
    });

    exitIcon.click(function () {
        clientMessage.hide();
        verifyMessage.hide();
        exitIcon.hide();
        messageIcon.hide(2000);
        congratsMessage.show(2000);



    });

    verifyMessage.click(function () {
        clientMessage.hide();
        verifyMessage.hide();
        exitIcon.hide();
        messageIcon.hide();
        warningMessage.show(2000);

    });

});

/*Tools */
$(document).ready(function () {

    var toolsParagraphs = [1, 2, 3, 4, 5, 6];

    /*    toolsParagraphs[0] = $('.first-paragraph');
     toolsParagraphs[1] = $('.second-paragraph');
     toolsParagraphs[2] = $('.third-paragraph');
     toolsParagraphs[3] = $('.fourth-paragraph');
     toolsParagraphs[4] = $('.fifth-paragraph');
     toolsParagraphs[5] = $('.sixth-paragraph');*/
    var red = $('.red-style');
    var first = $('.first-paragraph');
    var second = $('.second-paragraph');
    var third = $('.third-paragraph');
    var fourth = $('.fourth-paragraph');
    var fifth = $('.fifth-paragraph');
    var messageTools = $('.message-tools');
    var count = 0;

    first.hide();
    second.hide();
    third.hide();
    fourth.hide();
    fifth.hide();
    messageTools.hide();

    first.show(2000);
    second.show(2000);
    third.show(2000);
    fourth.show(2000);
    fifth.show(2000);

    first.click(function () {
        alert('Ten element jest niezbędny do uruchomienia bankowości mobilnej na urządzeniu mobilnym');
    });

    second.click(function () {
        second.hide(2000);
    });


    third.click(function () {
        third.hide(2000);
    });

    fourth.click(function () {
        fourth.hide(2000);
    });

    fifth.click(function () {
        alert('Ten element jest niezbędny do uruchomienia bankowości mobilnej na urządzeniu mobilnym');
    });

    $('.second-paragraph, .third-paragraph, .fourth-paragraph').click(function () {
        count++;
        if (count == 3) {
            $('.show-paragraphs').hide(2000);
            $('#tools').hide(2000);
            messageTools.show(2000);
        }
    });

});
/*Tools End*/

/*Safe Smartfon*/
$(document).ready(function () {
    var count = 0;
    $('.smartfon-info').hide();
    $('.icon-1-hidden').hide();
    $('.icon-4-hidden').hide();
    $('.icon-5-hidden').hide();
    $('.icon-9-hidden').hide();
    $('.icon-13').hide();

    /*hiding clicks*/
    $('.icon-1').click(function () {
        $('.icon-1').hide(2000);
        $('.icon-1-hidden').show(2000);
    });

    $('.icon-4').click(function () {
        $('.icon-4').hide(2000);
        $('.icon-4-hidden').show(2000);
    });

    $('.icon-5').click(function () {
        $('.icon-5').hide(2000);
        $('.icon-5-hidden').show(2000);
    });

    $('.icon-9').click(function () {
        $('.icon-9').hide(2000);
        $('.icon-9-hidden').show(2000);
    });
    /*alert clicks*/
    $('.alert-show').click(function () {
        alert('Ta aplikacja nie wpływa na bezpieczeństwo korzystania z bankowości mobilnej !')
    });
    /*hide labels*/
    $('.label-1, .label-2, .label-3, .label-4, .label-5, .label-6, .label-7, .label-8, .label-9, .label-10, .label-11, .label-12, .label-13').hide();
    /*mouseover label*/

    $('.icon-1').mouseenter(function () {
        $('.label-1').show();
    });
    $('.icon-1').mouseleave(function () {
        $('.label-1').hide();
    });

    $('.icon-2').mouseenter(function () {
        $('.label-2').show();
    });

    $('.icon-2').mouseleave(function () {
        $('.label-2').hide();
    });

    $(' .icon-3').mouseenter(function () {
        $('.label-3').show();
    });

    $('.icon-3').mouseleave(function () {
        $('.label-3').hide();
    });

    $('.icon-4').mouseenter(function () {
        $('.label-4').show();
    });

    $('.icon-4').mouseleave(function () {
        $('.label-4').hide();
    });

    $(' .icon-5').mouseenter(function () {
        $('.label-5').show();
    });

    $('.icon-5').mouseleave(function () {
        $('.label-5').hide();
    });

    $(' .icon-6').mouseenter(function () {
        $('.label-6').show();
    });

    $('.icon-6').mouseleave(function () {
        $('.label-6').hide();
    });

    $(' .icon-7').mouseenter(function () {
        $('.label-7').show();
    });

    $('.icon-7').mouseleave(function () {
        $('.label-7').hide();
    });

    $(' .icon-8').mouseenter(function () {
        $('.label-8').show();
    });

    $('.icon-8').mouseleave(function () {
        $('.label-8').hide();
    });

    $('.icon-9').mouseenter(function () {
        $('.label-9').show();
    });

    $('.icon-9').mouseleave(function () {
        $('.label-9').hide();
    });

    $(' .icon-10').mouseenter(function () {
        $('.label-10').show();
    });

    $('.icon-10').mouseleave(function () {
        $('.label-10').hide();
    });

    $(' .icon-11').mouseenter(function () {
        $('.label-11').show();
    });

    $('.icon-11').mouseleave(function () {
        $('.label-11').hide();
    });

    $(' .icon-12').mouseenter(function () {
        $('.label-12').show();
    });

    $('.icon-12').mouseleave(function () {
        $('.label-12').hide();
    });

    $(' .icon-13').mouseenter(function () {
        $('.label-13').show();
    });

    $('.icon-13').mouseleave(function () {
        $('.label-13').hide();
    });

  
    
    $('.icon-1,.icon-4,.icon-5,.icon-9').click(function () {
        count++;
        if(count ==2){
             $('.icon-13').show();
        }else if (count == 8) {
            $('.main-icons-container').hide(2000);
            $('.smartfon-info').show(2000);
        
        }
    });
});
/*Safe Smartfon-End*/

/*Using*/
$(document).ready(function () {
    var count = 0;

    $('.container-hide').hide();

    $('.first-par, .second-par, .third-par, .fourth-par, .fifth-par, .sixth-par').click(function () {
        alert('To jest dobra praktyka działania !');
    });

    $('.seventh-par').click(function () {
        $('.seventh-par').hide(2000);
    });

    $('.eight-par').click(function () {
        $('.eight-par').hide(2000);
    });

    $('.ninth-par').click(function () {
        $('.ninth-par').hide(2000);
    });

    $('.tenth-par').click(function () {
        $('.tenth-par').hide(2000);
    });

    $('.eleventh-par').click(function () {
        $('.eleventh-par').hide(2000);
    });

    $('.twelth-par').click(function () {
        $('.twelth-par').hide(2000);
    });

    $('.thirteenth-par').click(function () {
        $('.thirteenth-par').hide(2000);
    });


    $('.seventh-par,.eight-par,.ninth-par,.tenth-par,.eleventh-par,.twelth-par, .thirteenth-par').click(function () {
        count++;
        if (count == 7) {
            $('.using').hide(2000);
            $('.container-hide').show(3000);
            $('.congrats').show(3000);
        }
    });

});
/*Using end*/
