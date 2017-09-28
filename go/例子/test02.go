package main

import (
    "fmt"
	"runtime"
	"time"
)

func main() {
    for i := 0; i < 2; i++ {
	    go func(x int) {
		    for n := 0; n < 2; n++ {
			    fmt.Printf("%c: %d", 'a'+x, n)
				time.Sleep(time.Millisecond)
			}
		}(i)
	}
	
	runtime.Goexit()
	println("main exit.")
}