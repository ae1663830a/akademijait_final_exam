package lt.akademija.andrejo.controller;

import io.swagger.annotations.ApiOperation;
import lt.akademija.andrejo.repository.ClientRepository;
import lt.akademija.andrejo.domain.Client;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    private static final Logger logger = LoggerFactory.getLogger(ClientController.class);

    @GetMapping("/api/clients")
    @ApiOperation(value = "Returns all flights that are currently in the list")
    public List<Client> getClients() {
        logger.info("Returns all clients");
        return clientRepository.findAll();
    }

    @DeleteMapping("/api/clients/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientRepository.delete(id);
    }

    @PostMapping("/api/clients")
    public Client registerClient(@RequestBody Client client) {
        return clientRepository.save(client);
    }
}
