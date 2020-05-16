

$('#continue-button').click((e) => {
    e.preventDefault();
    document.location.href = "/fun-recognition";
});

function showPreviewImage(event) {

    var imageReader = new FileReader();

    imageReader.onload = function () {
       $("#preview-image").attr("src", imageReader.result);

    }

    imageReader.readAsDataURL(event.target.files[0]);

}

    $('.toast.info').toast('show');
    $('.process-image').click((e) => {
        e.preventDefault();

        $('.process-image').css("display", "none");
        $('.loader-screen').css("display", "inline-block");
        $('.output-data-screen').css("display", "none");

        var formPage = $('#upload-form')[0];
        var formData = new FormData(formPage);


        const uploadRecImage = $.ajax({
            url: '/recognize-emotion',
            method: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        });

        uploadRecImage.done((response) => {
            console.log(response);
            $('.process-image').css("display", "inline-block");
            $('.loader-screen').css("display", "none");
            $('.output-data-screen').css("display", "block");
            loadDataOnTheScreen(response);
        });

        uploadRecImage.fail((error) => {
            console.log(error);
            $('.toast-body.error').text(error.responseText);
            $('.toast.error').toast('show');

        });


    });

    function loadDataOnTheScreen(response) {
        $('.fir-emotion-name').text(response[0].emotionName);
        $('.sec-emotion-name').text(response[1].emotionName);
        $('.third-emotion-name').text(response[2].emotionName);
        $('.fir-emotion-res').text(response[0].confidence + "%");
        $('.sec-emotion-res').text(response[1].confidence + "%");
        $('.third-emotion-res').text(response[2].confidence + "%");
    }
