package lt.akademija.andrejo.repository;

import lt.akademija.andrejo.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
