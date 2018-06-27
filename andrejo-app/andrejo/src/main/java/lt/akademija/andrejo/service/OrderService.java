package lt.akademija.andrejo.service;

import lt.akademija.andrejo.domain.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService {

    Order getOrder(Long clientId);
    Page<Order> findAllOrders(Pageable pageable);
    Order createOrder(Order order);
    void deleteOrder(Long orderId);
    void updateOrder(Long orderId, Order client);
    void addDish(Long orderId, String dishId);
    void removeDish(Long orderId, String dishId);
}
