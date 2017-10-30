$(function($){

    function submitForm (form) {

        var inp = $('.order-form__input'),
            pops = $('.popup'),
            popsText = $('.form-popup__text'),
            trigger = 0;
            
        function popUp() {
            pops.addClass('active');
            $('.form-popup__close').on('click', function(e){
                e.preventDefault();
                pops.removeClass('active');
            });
        }

        inp.each( function(e) {
            var $this = $(this);
            inp.addClass('valid');
            if ($this.hasClass("valid")) {
                if ($this.val() === "" || $this.val() === " ") {
                    $this.css("border", "2px solid red");
                    function focusInp() { $this.css("border", "none") }
                    $this.on('focus', focusInp);
                    return trigger = 1;
                }
            };
        });

        if (trigger === 0) {
            var request = ajaxForm(form);

            request.done(function(msg) {
                var mes = msg.mes,
                status = msg.status;
                if (status === 'OK') {
                    popsText.text('Сообщение успешно отправлено!');                   
                    popUp();
                    $('#form').get(0).reset();
                } else {
                    popsText.text(mes);
                    popUp();
                }
            }).fail(function(jqXHR, msg) {
                popsText.text('На сервере произошла ошибка!')
                popUp();
            });
        } else {
            popUp();
        }
    };

    function ajaxForm (form) {
        var url = form.attr('action'),
        data = form.serialize();

        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'JSON'
        });
    };

    $('#form').submit(function(e) {
        e.preventDefault();
        var form = $(this);
        submitForm(form);
    })
});

