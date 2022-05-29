import './style.css';
console.log('init', $, $('.add-sample'));

// $('button').on('tap', function(){
//     console.log('....');
// })

$('.add-sample').on('tap', function() {
    $('.tester .drop').animate({
        opacity: 1,
        bottom: '10px',
        transform: 'scale(0.5)',
    }, 'slow', 'linear', function(){
        $('.tester .drop').hide();
        $('.sample').animate({
            opacity: 1,
            transform: 'scale(1.5)'
        });
    });
});

$('.add-anti').on('tap', function(){
    $('.samples').animate({
        opacity: 1,
        left: '120px',
    }, 'slow', 'linear', function(){
        $('.samples-item').addClass('with-anti');
    })
});

$('.pass-test').on('tap', function(){
    $('.samples').animate({
        left: '200px',
    }, 'slow', 'linear', function(){
        $('.line-one').show();
    });
});

$('.pass-ctrl').on('tap', function(){
    $('.samples.green').animate({
        left: '230px',
    }, 'slow', 'linear', function(){
        $('.line-two').show();
    });
});
