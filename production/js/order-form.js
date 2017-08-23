var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target),
    inp = $('.order-form__input'),
    trigger = 0,
    request = ajaxForm(form);

    inp.each( function(e){
        var $this = $(this);
        inp.addClass('valid');

        if ($this.hasClass("valid")) {
            if ($this.val() === "" || $this.val() === " ") {
                $this.css("border", "2px solid red");
                return trigger = 1;
            }; 
        };
    });

    if (trigger === 0) {
        request.done(function(msg) {
            var mes = msg.mes,
            status = msg.status;
            if (status === 'OK') {
                alert(mes);
                // $('[data-fancyform-success]').fancybox(); // срабатывает только со второго раза!!!
                // $('.form-popup__close').on('click', function(e){
                //     e.preventDefault();
                //     $.fancybox.close();
                //     $('#form').get(0).reset();
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
        });
    } else {
        alert('Хочешь кушать? Заполни все поля, пожалуйста!');
    }   
};

var ajaxForm = function (form) {
    var url = form.attr('action'),
    data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });
};

$('#form').on('submit', submitForm);
