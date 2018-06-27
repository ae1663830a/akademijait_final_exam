package lt.akademija.andrejo.service;

import lt.akademija.andrejo.domain.Client;
import lt.akademija.andrejo.domain.dto.ClientDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ClientService {

    Client getClient(Long clientId);
    Page<ClientDto> findAllClients(Pageable pageable);
    ClientDto createClient(ClientDto client);
    void deleteClient(Long clientId);
    void updateClient(Long clientId, ClientDto client);
    void addOrder(Long clientId, Long orderId);
    void removeOrder(Long clientId, Long orderId);

}
