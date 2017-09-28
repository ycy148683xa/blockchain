package main

import (
    "time"
	"runtime"
)

func test() {
    c := make(chan int)
	
	for i := 0; i < 10; i++ {
	    go func() {
		    <-c 
		}()
	}
}

func main() {
    test()
	
	for {
	    time.Sleep(time.Second)
		runtime.GC()
	}
}

