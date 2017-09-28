package main

func main() {
    c := make(chan int, 3)
	
	c <- 10
	c <- 20
	
	close(c)
	
	for i := 0; i < cap(c)+1; i++ {
	    x, ok := <-c
		println(i, ":", ok, x)
	}
	
	//c <- 30
	/*
	var d chan int = nil
	d <- 30
	go func() {
	    //<-d
	}()
	*/
	
	//close(c)
	
	var e chan int 
	close(e)
}