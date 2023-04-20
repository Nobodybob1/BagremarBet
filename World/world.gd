extends Node2D


@onready var game_over_pop_up = $CanvasLayer/GameOverPopUp

@export var dog: PackedScene
var num_dogs = 5
var cnt = 1
var rng = RandomNumberGenerator.new()
var print_once = 0
# Called when the node enters the scene tree for the first time.
func _ready():
	game_over_pop_up.visible = false
	randomize()
	
	for i in range(num_dogs):
		var location = Vector2.ZERO
		location.x = 32
		location.y = i*128 + 96
		instance_dog(dog, location)
		cnt+=1


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if not Global.podium.is_empty():
		if Global.podium.size() == num_dogs and print_once == 0:
			
			if Global.podium[0] == Global.bet_dog:
				Global.popup_result = "You won!"
				
			else:
				Global.popup_result = "Better luck next time!"
				#print("winner is: ", Global.podium[0])
			game_over_pop_up.visible = true
			print_once = 1
		


func instance_dog(node, location):
	var node_instance = node.instantiate()
	var speed = rng.randf_range(230.0, 330.0)
	var accel = rng.randf_range(80.0, 130.0)
	node_instance.SPEED = speed
	node_instance.acceleration = accel
	node_instance.start_num = cnt
	add_child(node_instance)
	node_instance.global_position = location 
