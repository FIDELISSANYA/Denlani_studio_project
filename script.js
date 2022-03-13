$(document).ready(function () {
    $('#design').click(function () {
        $("#d").toggle(1000);
        $('#design').toggle(1000);
    })
    $('#des').click(function () {
        $('#design').show();
        $('#d').hide()
    })
    $('#development').click(function () {
        $("#n").toggle(1000);
        $('#development').toggle(1000);
    })
    $('#dev').click(function () {
        $('#development').show();
        $('#n').hide()
    })
    $('#management').click(function () {
        $("#k").toggle(1000);
        $('#management').toggle(1000);
    })
    $('#man').click(function () {
        $('#management').show();
        $('#k').hide()
    })
    $("form").submit(function (event) {
        let message = $('#message').val();
        // let name = $('#name').val();
        // let email = $('#email').val();

        // $('..form-control').text(name);
        // $('.form-control').text(email);
        $('.btn').text(message);

        event.preventDefault();
        alert('We have received your email')
    })
})