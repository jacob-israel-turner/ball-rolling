#pragma strict

function Start () {
	
}

function Update () {
	transform.Rotate(new Vector3(15, 30, 45) * Time.deltaTime);
}
