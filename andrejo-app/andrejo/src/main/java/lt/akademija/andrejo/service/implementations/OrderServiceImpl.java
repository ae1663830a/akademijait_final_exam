package lt.akademija.andrejo.service.implementations;

import lt.akademija.andrejo.domain.ClientOrder;
import lt.akademija.andrejo.repository.OrderRepository;
import lt.akademija.andrejo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public ClientOrder getOrder(Long clientId) {
        return orderRepository.getOne(clientId);
    }

    @Override
    public Page<ClientOrder> findAllOrders(Pageable pageable) {
        return orderRepository.findAll(pageable);
    }

    @Override
    public ClientOrder createOrder(ClientOrder client) {
        return orderRepository.save(client);
    }

    @Override
    public void deleteOrder(Long clientId) {
        orderRepository.delete(clientId);
    }

    @Override
    public void updateOrder(Long clientId, ClientOrder client) {
        orderRepository.save(client);
    }
}
