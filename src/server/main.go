package main

import (
	"net/http"
)

func main() {
        // ignorePaths := [...]string{
        //         "/",
        //         "/assets/index-07ef3f25.js",
        //         "/assets/index-959dcb22.css",
        //         "/vite.svg",
        // }
        // fileServer := http.FileServer(http.Dir("./dist"))
        staticFiles := http.FileServer(http.Dir("./dist/assets"))
        http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
                // for _,path := range ignorePaths{
                //         if (r.URL.Path == path){
                //                 fileServer.ServeHTTP(w,r)
                //                 return
                //         }
                // }
                http.ServeFile(w, r, "./dist/index.html")
        })
        http.Handle("/assets/",http.StripPrefix("/assets/",staticFiles))
        http.ListenAndServe("localhost:3000", nil)
}