package lt.akademija.andrejo.repository;

import lt.akademija.andrejo.domain.Dish;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DishRepository extends JpaRepository<Dish, String> {
}
