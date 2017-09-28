package main

func doSomething() {
    m.Lock()
	url := cache["key"]
	http.Get(url)
	m.Unlock()
}