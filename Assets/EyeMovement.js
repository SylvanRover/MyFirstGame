function Update () {

            

////////////////////

    //mouse scrolling

    

    var mousePosX = Input.mousePosition.x;

    var mousePosY = Input.mousePosition.y;

    var scrollDistance : int = 5;

    var scrollSpeed : float = 70;
    
 

	if (Input.GetMouseButton(0))
		{
	//Horizontal camera movement

    if (mousePosX < scrollDistance)

        //horizontal, left

        { 

        transform.Translate(-0.1, 0, 0);

        } 

    if (mousePosX >= Screen.width - scrollDistance)

        //horizontal, right

        { 

        transform.Translate(0.1, 0, 0);

        } 

 

    //Vertical camera movement

    if (mousePosY < scrollDistance)

        //scrolling down

        {

        transform.Translate(0, -0.1, 0);

        } 

    if (mousePosY >= Screen.height - scrollDistance)

        //scrolling up

        {

        transform.Translate(0, 0.1, 0);

        }
        
        }

    

    ////////////////////

    //zooming

    var Eye : GameObject = GameObject.Find("Eye");

    

    //

    if (Input.GetAxis("Mouse ScrollWheel") > 0 && Eye.camera.orthographicSize > 1)

        {

        Eye.camera.orthographicSize = Eye.camera.orthographicSize - 1;

        }

    

    //

    if (Input.GetAxis("Mouse ScrollWheel") < 0 && Eye.camera.orthographicSize < 5)

        {

        Eye.camera.orthographicSize = Eye.camera.orthographicSize + 1;

        }

 

    //default zoom

    if (Input.GetKeyDown(KeyCode.Mouse2))

        {

        Eye.camera.orthographicSize = 3
       ;

        }
        
    
    if (transform.position.x < -9) 
    
    {
	
		transform.position.x = -9;

	}
	
	if (transform.position.x > 9) 
    
    {
	
		transform.position.x = 9;

	}
	
	if (transform.position.y < -9) 
    
    {
	
		transform.position.y = -9;

	}
	
	if (transform.position.y > 9) 
    
    {
	
		transform.position.y = 9;

	}

        

}