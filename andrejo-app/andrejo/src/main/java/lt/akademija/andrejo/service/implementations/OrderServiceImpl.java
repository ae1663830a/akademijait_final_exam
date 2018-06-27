package lt.akademija.andrejo.service.implementations;

import lt.akademija.andrejo.domain.Dish;
import lt.akademija.andrejo.domain.Order;
import lt.akademija.andrejo.repository.OrderRepository;
import lt.akademija.andrejo.service.DishService;
import lt.akademija.andrejo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    DishService dishService;

    @Override
    public Order getOrder(Long clientId) {
        return orderRepository.getOne(clientId);
    }

    @Override
    public Page<Order> findAllOrders(Pageable pageable) {
        return orderRepository.findAll(pageable);
    }

    @Override
    public Order createOrder(Order client) {
        return orderRepository.save(client);
    }

    @Override
    public void deleteOrder(Long clientId) {
        orderRepository.delete(clientId);
    }

    @Override
    public void updateOrder(Long clientId, Order client) {
        orderRepository.save(client);
    }

    @Override
    public void addDish(Long orderId, String dishId) {
        Dish dish = dishService.getDish(dishId);
        Order order = orderRepository.getOne(orderId);
        order.getDishes().add(dish);
        orderRepository.save(order);
    }

    @Override
    public void removeDish(Long orderId, String dishId) {
        Dish dish = dishService.getDish(dishId);
        Order order = orderRepository.getOne(orderId);
        order.getDishes().remove(dish);
        orderRepository.save(order);
    }
}
