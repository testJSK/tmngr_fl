package mygroup.tmngr.service;

import mygroup.tmngr.entity.UserEntity;
import mygroup.tmngr.exception.UserAlreadyExistException;
import mygroup.tmngr.exception.UserNotFoundException;
import mygroup.tmngr.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserEntity registration(UserEntity user) throws UserAlreadyExistException {
        if(userRepo.findByUsername(user.getUsername()) != null) {
            throw new UserAlreadyExistException("Пользователь с таким именем уже существует");
        }
        return userRepo.save(user);
    }

    public UserEntity getOne(Long id) throws UserNotFoundException {
        UserEntity user = userRepo.findById(id).get();

        if(user == null) {
            throw new UserNotFoundException("Пользователь с указанным id не найден");
        }
        return user;
    }
    public ArrayList<UserEntity> getAll() throws UserNotFoundException {
        ArrayList<UserEntity> users = (ArrayList<UserEntity>) userRepo.findAll();

        if(users == null) {
            throw new UserNotFoundException("Пользователи не найдены");
        }
        return users;
    }
}
