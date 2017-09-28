package main

func main() {
    var a, b chan int
	
	a = make(chan int, 2)
	var recv <-chan int = a
	var send chan<- int = a 
	
	b = (chan int)(recv)
	b = (chan int)(send)
}