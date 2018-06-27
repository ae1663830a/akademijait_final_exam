//package lt.akademija.andrejo.controller;
//
//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiImplicitParam;
//import io.swagger.annotations.ApiImplicitParams;
//import io.swagger.annotations.ApiOperation;
//import lt.akademija.lastexam.domain.dto.ProviderDto;
//import lt.akademija.lastexam.domain.dto.ServicesDto;
//import lt.akademija.lastexam.service.ServiceService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//
//@RestController
//@RequestMapping("/api/menu")
//@Api(value = "Services")
//public class MenuController {
//
//    @Autowired
//    Me menuService;
//
//    @ApiOperation(value = "Get all", notes = "Returns list of menu")
//    @GetMapping(value = "/all")
//    @ResponseStatus(HttpStatus.OK)
//    @ApiImplicitParams({
//            @ApiImplicitParam(name = "page", dataType = "integer", paramType = "query", value = "Results page you want to retrieve (0..N)"),
//            @ApiImplicitParam(name = "size", dataType = "integer", paramType = "query", value = "Number of records per page."),
//            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Sorting criteria in the format: property(,asc|desc). "
//                    + "Default sort order is ascending. " + "Multiple sort criteria are supported.")})
//    public Page<ServicesDto> getServices(Pageable pageable) {
//        return menuService.getServices(pageable);
//    }
//
//    @ApiOperation(value = "Get one by name", notes = "Returns one menu by name")
//    @GetMapping(value = "/{name}")
//    @ResponseStatus(HttpStatus.OK)
//    public ServicesDto getService(@PathVariable final String name) {
//        return menuService.getService(name);
//    }
//
//    @ApiOperation(value = "Create menu", notes = "Creates menu")
//    @PostMapping(value = "/new")
//    @ResponseStatus(HttpStatus.OK)
//    public String createServices(@RequestBody @Valid final ServicesDto menuDto) {
//        return menuService.createService(menuDto);
//    }
//
//    @ApiOperation(value = "Updates menu", notes = "Updates menu")
//    @PutMapping(value = "/update/{name}")
//    @ResponseStatus(HttpStatus.OK)
//    public String updateServices(@PathVariable("name") final String name, @RequestBody @Valid final ServicesDto menuDto) {
//        return menuService.updateService(name, menuDto);
//    }
//
//    @ApiOperation(value = "Deletes menu", notes = "Deletes menu")
//    @DeleteMapping(value = "/delete/{name}")
//    @ResponseStatus(HttpStatus.OK)
//    public void deleteServices(@PathVariable("name") final String name) {
//        menuService.deleteService(name);
//    }
//
//    @ApiOperation(value = "Add provider to service", notes = "Adds provider to service")
//    @PostMapping(value = "/{serviceName}/add/{providerName}")
//    @ResponseStatus(HttpStatus.OK)
//    public void addProvider(@PathVariable("serviceName") final String serviceName,
//                            @PathVariable("providerName") final String providerName) {
//        menuService.addProvider(serviceName, providerName);
//    }
//
//    @ApiOperation(value = "Delete provider from service", notes = "Deletes provider from service")
//    @DeleteMapping(value = "/{serviceName}/delete/{providerName}")
//    @ResponseStatus(HttpStatus.OK)
//    public void deleteProvider(@PathVariable("serviceName") final String serviceName,
//                               @PathVariable("providerName") final String providerName) {
//        menuService.removeProvider(serviceName, providerName);
//    }
//
//    @ApiOperation(value = "List service providers", notes = "Returns list of service providers")
//    @GetMapping(value = "/{serviceName}/all")
//    @ResponseStatus(HttpStatus.OK)
//    @ApiImplicitParams({
//            @ApiImplicitParam(name = "page", dataType = "integer", paramType = "query", value = "Results page you want to retrieve (0..N)"),
//            @ApiImplicitParam(name = "size", dataType = "integer", paramType = "query", value = "Number of records per page."),
//            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Sorting criteria in the format: property(,asc|desc). "
//                    + "Default sort order is ascending. " + "Multiple sort criteria are supported.")})
//    public Page<ProviderDto> getServiceProviders(@PathVariable("serviceName") final String serviceName, Pageable pageable) {
//        return menuService.getServiceProviders(serviceName, pageable);
//    }
//}
