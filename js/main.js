/* global $, _ */

(function(){

  'use strict';

  var Clock = function(){
		var now;
		this.now = moment();
  };

  Clock.prototype.display = function( tick ){
		if( tick ){ this.now.add( 'seconds', 1 ); }

    $('.bing').removeClass('bing');


    var year, year_one, year_ten, year_hundred, year_thousands;
    year = this.now.year();
    year_one = 9 - ( year % 10 );
    year_ten = 9 - ( Math.floor( year / 10 ) % 10 );
    year_hundred = 9 - ( Math.floor( year / 100 ) % 10 );
    year_thousands = 9 - ( Math.floor( year / 1000 ) % 10 );

    $('.year .thousand').css('top', '-'+year_thousands+'em');
    $($('.year .thousand li').get( year_thousands )).addClass('bing');
    $('.year .hundred').css('top', '-'+year_hundred+'em');
    $($('.year .hundred li').get( year_hundred )).addClass('bing');
    $('.year .ten').css('top', '-'+year_ten+'em');
    $($('.year .ten li').get( year_ten )).addClass('bing');
    $('.year .one').css('top', '-'+year_one+'em');
    $($('.year .one li').get( year_one )).addClass('bing');



    var month;
    month = this.now.month();

    $('.month').css('top', '-'+month+'em');
    $($('.month li').get( month )).addClass('bing');




    var day, day_one, day_ten;
    day = this.now.date();
    day_one = 9 - ( day % 10 );
    day_ten = 3 - ( Math.floor( day / 10 ));

    $('.day .ten').css('top', '-'+day_ten+'em');
    $($('.day .ten li').get( day_ten )).addClass('bing');
    $('.day .one').css('top', '-'+day_one+'em');
    $($('.day .one li').get( day_one )).addClass('bing');



    var hours, hour_one, hour_ten;
    hours = this.now.hours();
    hour_one = 9 - ( hours % 10 );
    hour_ten = 2 - ( Math.floor( hours / 10 ));

    $('.hour .ten').css('top', '-'+hour_ten+'em');
    $($('.hour .ten li').get( hour_ten )).addClass('bing');
    $('.hour .one').css('top', '-'+hour_one+'em');
    $($('.hour .one li').get( hour_one )).addClass('bing');



    var mins, min_one, min_ten;
    mins = this.now.minutes();
    min_one = 9 - ( mins % 10 );
    min_ten = 5 - ( Math.floor( mins / 10 ));

    $('.minute .ten').css('top', '-'+min_ten+'em');
    $($('.minute .ten li').get( min_ten )).addClass('bing');
    $('.minute .one').css('top', '-'+min_one+'em');
    $($('.minute .one li').get( min_one )).addClass('bing');



		var secs, sec_one, sec_ten;
    secs = this.now.seconds();
		sec_one = 9 - ( secs % 10 );
		sec_ten = 5 - ( Math.floor( secs / 10 ));

		$('.second .ten').css('top', '-'+sec_ten+'em');
    $($('.second .ten li').get( sec_ten )).addClass('bing');
		$('.second .one').css('top', '-'+sec_one+'em');
    $($('.second .one li').get( sec_one )).addClass('bing');
  };

  var Timer = function( output ){
		this.start = new Date().getTime();
		this.time = 0;
		this.elapsed = 0.0;
		this.output = output;
  };

	Timer.prototype.tick = function(){
    this.time += 100;

    this.elapsed = Math.floor(this.time / 100) / 10;

    if( this.elapsed === Math.round( this.elapsed ) && !window.hidden ){
			this.output.display( this.elapsed );
    }

    var diff = (new Date().getTime() - this.start) - this.time;
    window.setTimeout(_.bind(this.tick,this), (100 - diff));
	};

	Timer.prototype.run = function(){
		window.setTimeout(_.bind(this.tick,this), 100);
	};

  if( window.location.host == "d-pixie.github.io" ){
    $('.fork-me').fadeIn();
  }

  var clock, timer;
  clock = new Clock();
  clock.display();
  timer = new Timer( clock );
  timer.run();

}());
