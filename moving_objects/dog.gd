extends CharacterBody2D


@export var SPEED = 300.0
@export var acceleration = 100.0
const JUMP_VELOCITY = -400.0

var start_num = 0
var direction = 1
# Get the gravity from the project settings to be synced with RigidBody nodes.
#var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")
var gravity = 0

func _physics_process(delta):
	# Add the gravity.
	if not is_on_floor():
		velocity.y += gravity * delta

	# Handle Jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	#var direction = Input.get_axis("ui_left", "ui_right")
	
	if position.x >= 1152 - 16:
		if direction != 0:
			Global.podium.append(start_num)
		direction = 0
		
	if direction:
		velocity.x = move_toward(velocity.x, direction * SPEED, acceleration * delta)
		#velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
	
	move_and_slide()
