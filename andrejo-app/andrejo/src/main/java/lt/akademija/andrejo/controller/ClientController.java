package lt.akademija.andrejo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lt.akademija.andrejo.domain.dto.ClientDto;
import lt.akademija.andrejo.service.ClientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/api/clients")
@Api(value = "Client")
@RestController
public class ClientController {

    @Autowired
    private ClientService clientService;

    private static final Logger logger = LoggerFactory.getLogger(ClientController.class);

    @GetMapping("/all")
    @ApiOperation(value = "Returns all clients that are currently in the list")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "page", dataType = "integer", paramType = "query", value = "Results page you want to retrieve (0..N)"),
            @ApiImplicitParam(name = "size", dataType = "integer", paramType = "query", value = "Number of records per page."),
            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Sorting criteria in the format: property(,asc|desc). "
                    + "Default sort order is ascending. " + "Multiple sort criteria are supported.") })
    public Page<ClientDto> getClients(Pageable pageable) {
        logger.info("Returns all clients");
        return clientService.findAllClients(pageable);
    }

    @ApiOperation(value = "Deletes client")
    @DeleteMapping("/delete/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
    }

    @ApiOperation(value = "Registers client")
    @PostMapping("/register")
    public ClientDto registerClient(@RequestBody ClientDto clientDto) {
        return clientService.createClient(clientDto);
    }

    @ApiOperation(value = "Add order to client", notes = "Adds order to client")
    @PostMapping(value = "/{clientId}/add")
    @ResponseStatus(HttpStatus.OK)
    public void addOrder(@PathVariable("clientId") final Long clientId,
                            @RequestBody final Long orderId) {
        clientService.addOrder(clientId, orderId);
    }

    @ApiOperation(value = "Delete order from client", notes = "Delete order from client")
    @DeleteMapping(value = "/{clientId}/delete")
    @ResponseStatus(HttpStatus.OK)
    public void removeOrder(@PathVariable("clientId") final Long menuId,
                               @RequestParam("orderId") final Long orderId) {
        clientService.removeOrder(menuId, orderId);
    }
}
