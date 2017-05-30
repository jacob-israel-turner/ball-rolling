#pragma strict
import UnityEngine.UI;

var rb : Rigidbody;
var speed : int;
var count : int;
var countText : Text;

function Start () {
	rb = GetComponent.<Rigidbody>();
	count = 0;
	updateCount();
}

function FixedUpdate () {
	var moveHorizontal : float = Input.GetAxis('Horizontal');
	var moveVertical : float = Input.GetAxis('Vertical');
	var movement : Vector3 = new Vector3(moveHorizontal, 0, moveVertical);
	rb.AddForce(movement * speed);
}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.CompareTag('pick_up')) {
		other.gameObject.SetActive(false);
		count++;
		updateCount();
	}
}

function updateCount() {
	countText.text = "Count: " + count.ToString();
}
