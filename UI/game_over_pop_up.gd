extends Control

@onready var label = $TextureRect/VBoxContainer/Label

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	label.text = Global.popup_result


func _on_button_pressed():
	get_tree().change_scene_to_file("res://UI/start_screen.tscn")
