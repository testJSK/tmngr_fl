package mygroup.tmngr.repository;

import mygroup.tmngr.entity.ProductEntity;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepo extends CrudRepository<ProductEntity, Long> {
    ProductEntity findByProductname(String productname);
}
