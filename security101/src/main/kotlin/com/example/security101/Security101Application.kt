package com.example.security101

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.invoke
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.provisioning.InMemoryUserDetailsManager
import org.springframework.security.provisioning.JdbcUserDetailsManager
import org.springframework.security.web.SecurityFilterChain
import javax.sql.DataSource

@SpringBootApplication
class Security101Application

fun main(args: Array<String>) {
	runApplication<Security101Application>(*args)
}

@Configuration
class SecurityConfiguration {
	@Bean
	fun filterChain(http: HttpSecurity): SecurityFilterChain {
		http.invoke {
			authorizeRequests {
				authorize("/admin.html", hasRole("ADMIN"))
				authorize(anyRequest, authenticated)
			}
			formLogin { }
			logout { }
		}
		return http.build()
	}

	@Bean
	fun users(dataSource: DataSource): UserDetailsService {
		return JdbcUserDetailsManager(dataSource)
//		val user = User.builder()
//			.username("user")
//			.password("{bcrypt}\$2a\$10\$hOYKi5u3crvY8L70VWcSOuslH3fB/.dJsUe9a7zIAGWfPDzMGi9KC")
//			.roles("USER")
//			.build()
//		val admin = User.builder()
//			.username("admin")
//			.password("{bcrypt}\$2a\$10\$hOYKi5u3crvY8L70VWcSOuslH3fB/.dJsUe9a7zIAGWfPDzMGi9KC")
//			.roles("USER", "ADMIN")
//			.build()
//		return InMemoryUserDetailsManager(user, admin)
	}
}