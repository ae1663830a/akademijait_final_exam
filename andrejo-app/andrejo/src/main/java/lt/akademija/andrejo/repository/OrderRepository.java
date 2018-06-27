package lt.akademija.andrejo.repository;

import lt.akademija.andrejo.domain.ClientOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<ClientOrder, Long> {
}
