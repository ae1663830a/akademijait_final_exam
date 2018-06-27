package lt.akademija.andrejo.service;

import lt.akademija.andrejo.domain.Dish;
import lt.akademija.andrejo.domain.dto.DishDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DishService {

    Dish getDish(String dishId);
    Page<DishDto> findAllDishs(Pageable pageable);
    DishDto createDish(DishDto dish);
    void deleteDish(String dishId);
    void updateDish(String dishId, DishDto dish);
}
