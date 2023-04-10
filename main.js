$('#upload-costum').change(function(e){
    let photo = URL.createObjectURL(e.target.files[0])
    $('.image>img').fadeIn('fast').attr('src',photo)
})