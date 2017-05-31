#pragma strict
import UnityEngine.UI;

var rb : Rigidbody;
var speed : int;
var count : int;
var countText : Text;
var winText : Text;
var numberOfItems : int = 12;

function Start () {
	rb = GetComponent.<Rigidbody>();
	count = 0;
	winText.text = "";
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
	if (count >= numberOfItems) {
		handleWin();
	}
}

function handleWin() {
	Debug.Log('WINNING');
	var score = Mathf.Floor((numberOfItems / Time.time) * 1000) + (600 * numberOfItems);
	winText.text = "You Win! Score: " + score;
}
