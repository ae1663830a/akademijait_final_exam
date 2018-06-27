package lt.akademija.andrejo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lt.akademija.andrejo.domain.Dish;
import lt.akademija.andrejo.domain.Menu;
import lt.akademija.andrejo.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/menu")
@Api(value = "Services")
public class MenuController {

    @Autowired
    MenuService menuService;

    @ApiOperation(value = "Get all", notes = "Returns list of menu")
    @GetMapping(value = "/all")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "page", dataType = "integer", paramType = "query", value = "Results page you want to retrieve (0..N)"),
            @ApiImplicitParam(name = "size", dataType = "integer", paramType = "query", value = "Number of records per page."),
            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Sorting criteria in the format: property(,asc|desc). "
                    + "Default sort order is ascending. " + "Multiple sort criteria are supported.")})
    public Page<Menu> getServices(Pageable pageable) {
        return menuService.findAllMenus(pageable);
    }

    @ApiOperation(value = "Get one by name", notes = "Returns one menu by name")
    @GetMapping(value = "/{name}")
    @ResponseStatus(HttpStatus.OK)
    public Menu getService(@PathVariable final Long name) {
        return menuService.getMenu(name);
    }

    @ApiOperation(value = "Create menu", notes = "Creates menu")
    @PostMapping(value = "/new")
    @ResponseStatus(HttpStatus.OK)
    public Menu createServices(@RequestBody @Valid final Menu menuDto) {
        return menuService.createMenu(menuDto);
    }

    @ApiOperation(value = "Updates menu", notes = "Updates menu")
    @PutMapping(value = "/update/{name}")
    @ResponseStatus(HttpStatus.OK)
    public void updateServices(@PathVariable("name") final Long name, @RequestBody @Valid final Menu menuDto) {
        menuService.updateMenu(name, menuDto);
    }

    @ApiOperation(value = "Deletes menu", notes = "Deletes menu")
    @DeleteMapping(value = "/delete/{name}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteServices(@PathVariable("name") final Long name) {
        menuService.deleteMenu(name);
    }

    @ApiOperation(value = "Add dish to menu", notes = "Adds dish to menu")
    @PostMapping(value = "/{menuId}/add/{dishId}")
    @ResponseStatus(HttpStatus.OK)
    public void addProvider(@PathVariable("menuId") final Long menuId,
                            @PathVariable("dishId") final String dishId) {
        menuService.addDishToMenu(menuId, dishId);
    }

    @ApiOperation(value = "Delete dish from menu", notes = "Deletes dish from menu")
    @DeleteMapping(value = "/{menuId}/delete/{dishId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteProvider(@PathVariable("menuId") final Long menuId,
                               @PathVariable("dishId") final String dishId) {
        menuService.removeDishFromMenu(menuId, dishId);
    }

    @ApiOperation(value = "List dish", notes = "Returns list of dishes")
    @GetMapping(value = "/{menuId}/all")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "page", dataType = "integer", paramType = "query", value = "Results page you want to retrieve (0..N)"),
            @ApiImplicitParam(name = "size", dataType = "integer", paramType = "query", value = "Number of records per page."),
            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Sorting criteria in the format: property(,asc|desc). "
                    + "Default sort order is ascending. " + "Multiple sort criteria are supported.")})
    public List<Dish> getServiceProviders(@PathVariable("menuId") final Long menuId) {
        return menuService.getDishesByMenu(menuId);
    }
}
