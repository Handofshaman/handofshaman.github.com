// ������� ������� ��������� � ������� ����� ����������� ����

var mainState {
	preload:function() {
	  //��� ������� ����������� � ����� ������.
	  //����� ����������� �������� � ����
	 
		game.load.image('bird','assets/bird.png'); // ��������� ������  �����
	},


	create:function(){
		// ��� ������� ���������� ����� ������� preload
		// ����� ����������� ��������� ����,������������ ������� � �.�
		game.stage.backgroundColor = "#71c5cf"; // ������ ������ ��� ���� �� �����
		game.physics.startSystem(Phaser.Physics.ARCADE); // ������������� ���������  ������ 
	    this.bird = game.add.sprite(100,245,'bird'); // ������������� ����� �� �=100 � y=245
		
		game.physics.arcade.enable(this.bird); // ��������� ����� ������.���������� ��� ���� ����� ��� ���������.
		this.bird.body.gravity.y = 1000; // ��������� ����� ���������� ����� ��� ������.
		
		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.add(this.jump,this);  // ��������� ����������� ������� ����� ����� �����
	},
	update:function(){
		//��� ������� ���������� ������ 60 ������	
		// ����� ����������� ������ ����
	   if (this.bird.y < 0 || this.bird.y > 490) // ���� ����� ������� ������� ������ ��� ������� ����� �� ������������� ����
			this.restartGame();
	
		
	},
	
	jump: function() {
		this.bird.body.velocity.y = -350; // ��������� ������������ ��������� �����
	
	}

	restartGame: function{
		game.state.start('main'); // ������������� ���.
	
	}
};

// �������������� ��������� � ������� ���� 400px �� 490px
var game = new Phaser.Game(400,490);

// ��������� mainState � �������� ��� main
game.state.add('main',mainState);

// ��������� mainState ����� ������ ����
game.state.start('main');