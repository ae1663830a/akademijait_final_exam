package lt.akademija.andrejo.repository;

import lt.akademija.andrejo.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @author ggrazevicius
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Client findByFirstNameAndLastName(@Param("firstName") String firstName, @Param("lastName") String lastName);

}
