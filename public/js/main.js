/* global $, _ */

(function(){

  'use strict';

  var Clock = function(){
		var now;
		this.now = moment();
  };

  Clock.prototype.display = function( tick ){
		if( tick ){ this.now.add( 'seconds', 1 ); }



    var year, year_one, year_ten, year_hundred, year_thousands;
    year = this.now.year();
    year_one = 9 - ( year % 10 );
    year_ten = 9 - ( Math.floor( year / 10 ) % 10 );
    year_hundred = 9 - ( Math.floor( year / 100 ) % 10 );
    year_thousands = 9 - ( Math.floor( year / 1000 ) % 10 );

    $('.year .thousand').css('top', '-'+year_thousands+'em');
    $('.year .hundred').css('top', '-'+year_hundred+'em');
    $('.year .ten').css('top', '-'+year_ten+'em');
    $('.year .one').css('top', '-'+year_one+'em');



    var month;
    month = this.now.month();

    $('.month').css('top', '-'+month+'em');



    var day, day_one, day_ten;
    day = this.now.date();
    day_one = 9 - ( day % 10 );
    day_ten = 3 - ( Math.floor( day / 10 ));

    $('.day .ten').css('top', '-'+day_ten+'em');
    $('.day .one').css('top', '-'+day_one+'em');



    var hours, hour_one, hour_ten;
    hours = this.now.hours();
    min_one = 9 - ( hours % 10 );
    min_ten = 2 - ( Math.floor( hours / 10 ));

    $('.hour .ten').css('top', '-'+min_ten+'em');
    $('.hour .one').css('top', '-'+min_one+'em');



    var mins, min_one, min_ten;
    mins = this.now.minutes();
    min_one = 9 - ( mins % 10 );
    min_ten = 5 - ( Math.floor( mins / 10 ));

    $('.minute .ten').css('top', '-'+min_ten+'em');
    $('.minute .one').css('top', '-'+min_one+'em');



		var secs, sec_one, sec_ten;
    secs = this.now.seconds();
		sec_one = 9 - ( secs % 10 );
		sec_ten = 5 - ( Math.floor( secs / 10 ));

		$('.second .ten').css('top', '-'+sec_ten+'em');
		$('.second .one').css('top', '-'+sec_one+'em');
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

    if( this.elapsed === Math.round( this.elapsed )){
			this.output.display( this.elapsed );
    }

    var diff = (new Date().getTime() - this.start) - this.time;
    window.setTimeout(_.bind(this.tick,this), (100 - diff));
	};

	Timer.prototype.run = function(){
		window.setTimeout(_.bind(this.tick,this), 100);
	};

  var clock, timer;
  clock = new Clock();
  clock.display();
  timer = new Timer( clock );
  timer.run();

}());
