extends Control

@onready var option_button = $HBoxContainer/VBoxContainer/OptionButton
@onready var line_edit = $HBoxContainer/VBoxContainer/LineEdit

@onready var required_dog = $HBoxContainer/VBoxContainer2/Required_dog
@onready var required_bet = $HBoxContainer/VBoxContainer2/Required_bet

# Called when the node enters the scene tree for the first time.
func _ready():
	Global.bet_dog = -1
	Global.bet_amount = 0

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


func _on_button_pressed():
	Global.bet_dog = option_button.get_selected_id()
	
	if Global.bet_dog == -1:
		required_dog.visible = true
	if Global.bet_amount == 0:
		required_bet.visible = true
	if Global.bet_dog != -1 and Global.bet_amount != 0:
		get_tree().change_scene_to_file("res://World/world.tscn")
	


func _on_line_edit_text_changed(new_text):
	Global.bet_amount = int(new_text)
	print(Global.bet_amount)


func _on_option_button_item_selected(index):
	print(option_button.get_selected_id())
