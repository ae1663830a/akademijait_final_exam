package lt.akademija.andrejo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lt.akademija.andrejo.domain.dto.DishDto;
import lt.akademija.andrejo.service.DishService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/dishes")
@Api(value = "Dishes")
@RestController
public class DishController {

    @Autowired
    private DishService dishService;

    private static final Logger logger = LoggerFactory.getLogger(ClientController.class);

    @GetMapping("/all")
    @ApiOperation(value = "Returns all flights that are currently in the list")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "page", dataType = "integer", paramType = "query", value = "Results page you want to retrieve (0..N)"),
            @ApiImplicitParam(name = "size", dataType = "integer", paramType = "query", value = "Number of records per page."),
            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Sorting criteria in the format: property(,asc|desc). "
                    + "Default sort order is ascending. " + "Multiple sort criteria are supported.")})
    public Page<DishDto> getClients(Pageable pageable) {
        logger.info("Returns all clients");
        return dishService.findAllDishs(pageable);
    }

    @ApiOperation(value = "Deletes client")
    @DeleteMapping("/delete/{id}")
    public void deleteClient(@PathVariable String id) {
        dishService.deleteDish(id);
    }

    @ApiOperation(value = "Registers client")
    @PostMapping("/create")
    public DishDto registerClient(@RequestBody DishDto dishDto) {
        return dishService.createDish(dishDto);
    }

    @ApiOperation(value = "Add dish to menu", notes = "Add dish to menu")
    @PostMapping(value = "/{dishId}/add/{menuId}")
    @ResponseStatus(HttpStatus.OK)
    public void addProvider(@PathVariable("dishId") final String serviceName,
                            @PathVariable("menuId") final Long providerName) {
        dishService.addToMenu(serviceName, providerName);
    }

    @ApiOperation(value = "Delete dish from menu", notes = "Deletes dish from menu")
    @DeleteMapping(value = "/{dishId}/delete/{menuId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteProvider(@PathVariable("dishId") final String dishId,
                               @PathVariable("menuId") final Long menuId) {
        dishService.removeFromMenu(dishId, menuId);
    }
}
