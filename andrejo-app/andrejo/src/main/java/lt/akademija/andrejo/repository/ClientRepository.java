package lt.akademija.andrejo.repository;

import lt.akademija.andrejo.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * @author ggrazevicius
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
