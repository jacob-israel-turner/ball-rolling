#pragma strict

var offset : Vector3;
public var player : GameObject;

function Start () {
//	player = gameObject.GetComponent("Player");
	offset = transform.position - player.transform.position;
}

function LateUpdate () {
	transform.position = player.transform.position + offset;
}
