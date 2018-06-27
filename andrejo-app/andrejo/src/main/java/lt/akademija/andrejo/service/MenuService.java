package lt.akademija.andrejo.service;

import lt.akademija.andrejo.domain.Dish;
import lt.akademija.andrejo.domain.Menu;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MenuService {

    Menu getMenu(Long menuId);
    Page<Menu> findAllMenus(Pageable pageable);
    Menu createMenu(Menu menu);
    void deleteMenu(Long menuId);
    void updateMenu(Long menuId, Menu menu);
    void addDishToMenu(Long menuId, String dishId);
    void removeDishFromMenu(Long menuId, String dishId);
    Page<Dish> getDishesByMenu(Long serviceName, Pageable pageable);
}
