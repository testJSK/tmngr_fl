package mygroup.tmngr.exception;

public class ProductAlreadyExistException extends Exception{
    public ProductAlreadyExistException(String message) {
        super(message);
    }
}
