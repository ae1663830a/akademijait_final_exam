package lt.akademija.andrejo.service.implementations;

import lt.akademija.andrejo.domain.Client;
import lt.akademija.andrejo.domain.dto.ClientDto;
import lt.akademija.andrejo.repository.ClientRepository;
import lt.akademija.andrejo.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    ClientRepository clientRepository;

    @Override
    public Client getClient(Long clientId) {
        return clientRepository.getOne(clientId);
    }

    @Override
    public Page<ClientDto> findAllClients(Pageable pageable) {
        return clientRepository.findAll(pageable)
                .map(ClientDto::toDto);
    }

    @Override
    public ClientDto createClient(ClientDto clientDto) {
       clientRepository.save(ClientDto.fromDto(clientDto));
       return clientDto;
    }

    @Override
    public void deleteClient(Long clientId) {
        clientRepository.delete(clientId);
    }

    @Override
    public void updateClient(Long clientId, ClientDto clientDto) {
        Client services = clientRepository.getOne(clientId);
        if (services != null) {
            Client fromDto = ClientDto.updateFromDto(clientDto);
            fromDto.setId(clientId);
            clientRepository.save(fromDto);
        }
    }
}
