/* global $, _ */

(function(){

  'use strict';

  var Clock = function(){
		var now;
		this.now = moment();
  };

  Clock.prototype.display = function( secs ){
		this.now.add( 'seconds', 1 );
		$('.time').text( this.now.format( 'YYYY MMMM DD HH:mm:ss' ));

		var sec_one, sec_ten;
		sec_one = 9 - ( this.now.seconds() % 10 );
		sec_ten = 5 - ( Math.floor(this.now.seconds() / 10));

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
  timer = new Timer( clock );
  timer.run();

}());
