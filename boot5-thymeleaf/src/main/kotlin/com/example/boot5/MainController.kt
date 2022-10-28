package com.example.boot5

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

data class Product(
    val name: String,
    val price: Int
)

@Controller
class MainController {
    @GetMapping("/")
    fun index(model: Model): String {
        model.addAttribute("name", "Vlad")
        model.addAttribute(
            "products",
            listOf(
                Product("Apple", 3),
                Product("Strawberry", 5),
                Product("Potato", 1)
            )
        )
        return "index"
    }
}