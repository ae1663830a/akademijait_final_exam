package lt.akademija.andrejo.repository;

import lt.akademija.andrejo.domain.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}
