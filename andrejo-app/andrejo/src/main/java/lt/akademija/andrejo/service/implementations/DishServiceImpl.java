package lt.akademija.andrejo.service.implementations;

import lt.akademija.andrejo.domain.Dish;
import lt.akademija.andrejo.domain.dto.DishDto;
import lt.akademija.andrejo.repository.DishRepository;
import lt.akademija.andrejo.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DishServiceImpl implements DishService {

    @Autowired
    DishRepository dishRepository;

    @Override
    public Dish getDish(String dishId) {
        return dishRepository.getOne(dishId);
    }

    @Override
    public Page<DishDto> findAllDishs(Pageable pageable) {
        return dishRepository.findAll(pageable)
                .map(DishDto::toDto);
    }

    @Override
    public DishDto createDish(DishDto dishDto) {
       dishRepository.save(DishDto.fromDto(dishDto));
       return dishDto;
    }

    @Override
    public void deleteDish(String dishId) {
        dishRepository.delete(dishId);
    }

    @Override
    public void updateDish(String dishId, DishDto dishDto) {
        Dish services = dishRepository.getOne(dishId);
        if (services != null) {
            Dish fromDto = DishDto.updateFromDto(dishDto);
            fromDto.setName(dishId);
            dishRepository.save(fromDto);
        }
    }
}
