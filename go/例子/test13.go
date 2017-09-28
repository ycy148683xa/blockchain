package main

func main() {
    c := make(chan int, 2)
	
	var recv <-chan int = c
	
	close(recv)
}