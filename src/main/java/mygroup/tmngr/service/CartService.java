package mygroup.tmngr.service;

import mygroup.tmngr.entity.CartEntity;
import mygroup.tmngr.exception.ProductAlreadyExistException;
import mygroup.tmngr.repository.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class CartService {
//    @Autowired
//    private CartRepo cartRepo;
//
//    public CartEntity registration(CartEntity cart) throws ProductAlreadyExistException {
//        if(cartRepo.findByToken(cart.getToken()) !== null) {
//            throw new ProductAlreadyExistException("Корзина с таким токеном уже есть");
//        }
//        return cartRepo.save(cart);
//    }
}
