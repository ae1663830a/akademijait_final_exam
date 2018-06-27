package lt.akademija.andrejo.service;

import lt.akademija.andrejo.domain.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService {

    Order getOrder(Long clientId);
    Page<Order> findAllOrders(Pageable pageable);
    Order createOrder(Order client);
    void deleteOrder(Long clientId);
    void updateOrder(Long clientId, Order client);
//    void addOrder(OrderOrder clientOrder);
}
