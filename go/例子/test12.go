package main

func main() {
    c := make(chan int, 2)
	
	var send chan<- int = c
	var recv <-chan int = c
	
	<-send
	recv <- 1
}