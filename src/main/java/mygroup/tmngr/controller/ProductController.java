package mygroup.tmngr.controller;

import mygroup.tmngr.entity.ProductEntity;
import mygroup.tmngr.exception.ProductAlreadyExistException;
import mygroup.tmngr.exception.ProductNotFoundException;
import mygroup.tmngr.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductService productService;
//    @CrossOrigin(origins = "**/api/*")
    @GetMapping("/all")
    public ResponseEntity getProducts() {
        try {
            return ResponseEntity.ok(productService.getAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }

    @GetMapping
    public ResponseEntity getOneProduct(@RequestParam Long id) {
        try {
            return ResponseEntity.ok(productService.getOne(id));
        } catch (ProductNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }

    @PostMapping
    public ResponseEntity registration(@RequestBody ProductEntity product) {
        try {
            productService.registration(product);
            return ResponseEntity.ok("Товар успешно добавлен");
        } catch (ProductAlreadyExistException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }
}
