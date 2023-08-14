package main

import (
	"net/http"
)

func main() {
        fs := http.FileServer(http.Dir("./dist"))
        http.Handle("/", fs)
        http.Handle("/test", http.StripPrefix("/test", fs))
        http.ListenAndServe("localhost:3000", nil)
}