package mygroup.tmngr.service;

import mygroup.tmngr.entity.ProductEntity;
import mygroup.tmngr.exception.ProductAlreadyExistException;
import mygroup.tmngr.exception.ProductNotFoundException;
import mygroup.tmngr.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProductService {
    @Autowired
    private ProductRepo productRepo;

    public ProductEntity registration(ProductEntity product) throws ProductAlreadyExistException {
        if(productRepo.findByProductname(product.getProductname()) != null) {
            throw new ProductAlreadyExistException("Товар с таким наименование уже существует");
        }
        return productRepo.save(product);
    }

    public ProductEntity getOne(Long id) throws ProductNotFoundException {
        ProductEntity product = productRepo.findById(id).get();

        if(product == null) {
            throw new ProductNotFoundException("Товар с указанным id не найден");
        }
        return product;
    }
    public ArrayList<ProductEntity> getAll() throws ProductNotFoundException {
        ArrayList<ProductEntity> products = (ArrayList<ProductEntity>) productRepo.findAll();

        if (products == null) {
            throw new ProductNotFoundException("Товары не найдены");
        }
        return products;
    }
}
