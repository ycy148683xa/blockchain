package main

import (
    "sync"
)

type cache struct {
    sync.Mutex
	data []int
}

func (c *cache) count() int {
    //c.Lock()
	n := len(c.data)
	//c.Unlock()
	
	return n
}

func (c *cache) get() int {
    c.Lock()
	defer c.Unlock()
	
	var d int
	if n := c.count(); n > 0 {
	    d = c.data[0]
		c.data = c.data[1:]
	}
	
	return d
}

func main() {
    c := cache {
	    data: []int{1, 2, 3, 4},
	}
	
	println(c.get())
}