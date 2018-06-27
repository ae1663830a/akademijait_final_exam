package lt.akademija.andrejo.controller;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lt.akademija.andrejo.domain.Order;
import lt.akademija.andrejo.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/orders")
@Api(value = "Orders")
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    private static final Logger logger = LoggerFactory.getLogger(ClientController.class);

    @GetMapping("/all")
    @ApiOperation(value = "Returns all orders")
    @ResponseStatus(HttpStatus.OK)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "page", dataType = "integer", paramType = "query", value = "Results page you want to retrieve (0..N)"),
            @ApiImplicitParam(name = "size", dataType = "integer", paramType = "query", value = "Number of records per page."),
            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Sorting criteria in the format: property(,asc|desc). "
                    + "Default sort order is ascending. " + "Multiple sort criteria are supported.")})
    public Page<Order> findAllOrders(Pageable pageable) {
        logger.info("Returns all orders");
        return orderService.findAllOrders(pageable);
    }

    @ApiOperation(value = "Deletes order")
    @DeleteMapping("/delete/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }

    @ApiOperation(value = "Create order")
    @PostMapping("/create")
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    @ApiOperation(value = "Add dish to order", notes = "Adds dish to order")
    @PostMapping(value = "/{orderId}/add")
    @ResponseStatus(HttpStatus.OK)
    public void addDish(@PathVariable("orderId") final Long orderId,
                            @RequestParam final String dishId) {
        orderService.addDish(orderId, dishId);
    }

    @ApiOperation(value = "Delete dish from order", notes = "Deletes dish from order")
    @DeleteMapping(value = "/{orderId}/delete")
    @ResponseStatus(HttpStatus.OK)
    public void deleteDish(@PathVariable("orderId") final Long orderId,
                               @RequestParam("dishId") final String dishId) {
        orderService.removeDish(orderId, dishId);
    }

}
