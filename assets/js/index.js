$(document).ready(function(){

    $("#img-account").attr("src","./assets/img/user.png");
    $("#img-account-compare").attr("src","./assets/img/user-compare.png");

    $('#accountTitle').text('Tata liquid fund - Regular (G)');
    $('#accountCompareTitle').text('Nippon India Arbitrage fund (G)');

    $('#fund-status').html('<div class="label-blue">Equity</div>');
    $('#fund-compare-status').html('<div class="label-red">Equity</div>');

    $('#sip-amount').text('2323/month');
    $('#sip-compare-amount').text('2323/month');

    $('#3y-return').text('6.65%');
    $('#3y-compare-return').text('6.65%');

    $("#3y-return").before('<svg class="arrow-green" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>');
    $('#3y-compare-return').before('<svg class="arrow-red" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>');
});