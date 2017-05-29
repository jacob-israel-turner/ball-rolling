#pragma strict

var rb : Rigidbody;
var speed : int;

function Start () {
	rb = GetComponent.<Rigidbody>();
}

function FixedUpdate () {
	var moveHorizontal : float = Input.GetAxis('Horizontal');
	var moveVertical : float = Input.GetAxis('Vertical');
	var movement : Vector3 = new Vector3(moveHorizontal, 0, moveVertical);
	rb.AddForce(movement * speed);
}
