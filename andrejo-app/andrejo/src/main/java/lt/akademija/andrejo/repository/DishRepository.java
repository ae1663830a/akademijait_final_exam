package lt.akademija.andrejo.repository;

import lt.akademija.andrejo.domain.Dish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DishRepository extends JpaRepository<Dish, String> {

    @Query("select distinct d from Dish d join d.menus m where m.id =:menuId")
    Page<Dish> findByMenu(@Param("menuId") Long menuId, Pageable pageable);
}
