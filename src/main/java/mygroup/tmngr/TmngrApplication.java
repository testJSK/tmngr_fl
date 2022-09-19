package mygroup.tmngr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;
@Configuration
@SpringBootApplication
public class TmngrApplication {

	public static void main(String[] args) {
		SpringApplication.run(TmngrApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/**")
						.allowedOrigins("*"
								,"http://localhost:3000"
								,"http://10.0.2.15:8080"
								,"http://127.0.0.1:8080"
						)
						.allowedHeaders("*")
				;
//								"http://localhost:3000/");
//								"http://10.0.2.15:3000/");
//								"http://127.0.0.1:3000/");

			}
		};
	}
}
