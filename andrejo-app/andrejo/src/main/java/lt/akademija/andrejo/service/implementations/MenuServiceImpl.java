package lt.akademija.andrejo.service.implementations;

import lt.akademija.andrejo.domain.Dish;
import lt.akademija.andrejo.domain.Menu;
import lt.akademija.andrejo.repository.DishRepository;
import lt.akademija.andrejo.repository.MenuRepository;
import lt.akademija.andrejo.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    MenuRepository menuRepository;

    @Autowired
    DishRepository dishRepository;

    @Override
    public Menu getMenu(Long menuId) {
        return menuRepository.getOne(menuId);
    }

    @Override
    public Page<Menu> findAllMenus(Pageable pageable) {
        return menuRepository.findAll(pageable);
    }

    @Override
    public Menu createMenu(Menu menu) {
        return menuRepository.save(menu);
    }

    @Override
    public void deleteMenu(Long menuId) {
        menuRepository.delete(menuId);
    }

    @Override
    public void updateMenu(Long menuId, Menu menu) {

    }

    @Override
    public void addDishToMenu(Long menuId, String dishId) {
        Dish dish = dishRepository.getOne(dishId);
        Menu menu = menuRepository.getOne(menuId);
        menu.addDish(dish);
        menuRepository.save(menu);
        dishRepository.save(dish);
    }

    @Override
    public void removeDishFromMenu(Long menuId, String dishId) {
        Dish dish = dishRepository.getOne(dishId);
        Menu menu = menuRepository.getOne(menuId);
        menu.removeDish(dish);
        dishRepository.save(dish);
        menuRepository.save(menu);
    }

    @Override
    public List<Dish> getDishesByMenu(Long serviceName) {

        Menu menu = menuRepository.getOne(serviceName);
        return menu.getDishList();

    }
}
