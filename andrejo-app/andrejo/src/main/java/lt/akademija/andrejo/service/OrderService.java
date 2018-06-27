package lt.akademija.andrejo.service;

import lt.akademija.andrejo.domain.ClientOrder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService {

    ClientOrder getOrder(Long clientId);
    Page<ClientOrder> findAllOrders(Pageable pageable);
    ClientOrder createOrder(ClientOrder client);
    void deleteOrder(Long clientId);
    void updateOrder(Long clientId, ClientOrder client);
//    void addOrder(OrderOrder clientOrder);
}
