// Создаем главный контейнер в котором будет запускаться игра

var mainState {
	preload:function() {
	  //Эта функция выполняется в самом начале.
	  //Здесь загружаются картинки и звук
	 
		game.load.image('bird','assets/bird.png'); // Загружаем спрайт  птицы
	},


	create:function(){
		// Эта функция вызывается после функции preload
		// Здесь загружаются настройки игры,отображаются спрайты и т.п
		game.stage.backgroundColor = "#71c5cf"; // Меняем задний фон игры на синий
		game.physics.startSystem(Phaser.Physics.ARCADE); // Устанавливаем настройки  физики 
	    this.bird = game.add.sprite(100,245,'bird'); // Устанавливаем птицу на х=100 и y=245
		
		game.physics.arcade.enable(this.bird); // Добавляем птице физику.Необходимо для того чтобы она двигалась.
		this.bird.body.gravity.y = 1000; // Добавляем птице гравитацию чтобы она падала.
		
		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.add(this.jump,this);  // Добавляем возможность прыгать когда нажат спейс
	},
	update:function(){
		//Эта функция вызывается каждые 60 секунд	
		// Здесь расположена логика игры
	   if (this.bird.y < 0 || this.bird.y > 490) // Если птица взлетит слишком высоко или слишком низко то перезапускать игру
			this.restartGame();
	
		
	},
	
	jump: function() {
		this.bird.body.velocity.y = -350; // добавляем вертикальное ускорение птице
	
	}

	restartGame: function{
		game.state.start('main'); // Перезапускаем игу.
	
	}
};

// Инициализируем фреймворк и создаем поле 400px на 490px
var game = new Phaser.Game(400,490);

// Добавляем mainState и называем его main
game.state.add('main',mainState);

// Запускаем mainState чтобы начать игру
game.state.start('main');