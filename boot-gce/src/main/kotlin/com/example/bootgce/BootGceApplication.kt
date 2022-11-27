package com.example.bootgce

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
class BootGceApplication

fun main(args: Array<String>) {
	runApplication<BootGceApplication>(*args)
}

@RestController
class MainController {
	@GetMapping("/")
	fun index() =
		"Hello World xyz!"
}