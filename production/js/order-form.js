var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target),
    inp = $('.order-form__input'),
    trigger = 0;

    inp.each( function(e){
        var $this = $(this);
        inp.addClass('valid');

        if ($this.hasClass("valid")) {
            if ($this.val() === "" || $this.val() === " ") {
                $this.css("border", "2px solid red");
                return trigger = 1;
            }; 
        }
    })

    var ajaxForm = function (form) {

        var url = form.attr('action'),
        data = form.serialize();

        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'JSON'
        }).done(function(msg) {
            var mes = msg.mes,
            status = msg.status;
            if (status === 'OK') {
                alert(mes);

                // $('[data-fancyform-success]').fancybox();
                // $('.form-popup__close').on('click', function(e){
                //     e.preventDefault();
                //     $.fancybox.close();
                // });
                $('#form').get(0).reset();
            } else{
                alert('<p class="error">' + mes + '</p>');

                // $('[data-fancyform-error]').fancybox();
                // $('.form-popup__close').on('click', function(e){
                //     e.preventDefault();
                //     $.fancybox.close();
                // });
            }
        }).fail(function(jqXHR, textStatus) {
            alert("Request failed: " + textStatus + ' - будешь голодным');

            // $('[data-fancyform-error]').fancybox();
            // $('.form-popup__close').on('click', function(e){
            //     e.preventDefault();
            //     $.fancybox.close();
            // });
        });
    }

    if (trigger === 0) {
        ajaxForm(form);
    } else {
        alert('Хочешь кушать? Заполни все поля, пожалуйста!');
    }
}
$('#form').on('submit', submitForm);
