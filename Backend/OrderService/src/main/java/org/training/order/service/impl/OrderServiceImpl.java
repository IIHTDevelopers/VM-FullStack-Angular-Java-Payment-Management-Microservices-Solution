package org.training.order.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.training.order.exception.ResourceNotFound;
import org.training.order.external.PaymentService;
import org.training.order.external.UserService;
import org.training.order.mapper.OrderMapper;
import org.training.order.model.dto.OrderDto;
import org.training.order.model.dto.Response;
import org.training.order.model.dto.UserDto;
import org.training.order.model.entity.Order;
import org.training.order.repository.OrderRepository;
import org.training.order.service.OrderService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final OrderMapper orderMapper;

    private final UserService userService;
    private final PaymentService paymentService;


    @Override
    public Response addOrder(OrderDto orderDto) {

        ResponseEntity<UserDto> userById = userService.getUserById(orderDto.getUserId());
        if (userById.getBody() == null) {
            throw new ResourceNotFound();
        }
        Order dbOrder = orderRepository.save(orderMapper.toEntity(orderDto));
        orderDto.getPaymentDto().setOrderId(dbOrder.getId());
        orderDto.getPaymentDto().setUserId(orderDto.getUserId());
        // create order payment
        paymentService.createPayment(orderDto.getPaymentDto());

        return new Response("200", "Order successfully added.");
    }

    @Override
    public Page<OrderDto> getAllOrdersList(Pageable pageable) {
        Page<Order> ordersList = orderRepository.findAll(pageable);
        return ordersList.map(orderMapper::toDto);
    }

    @Override
    public List<OrderDto> getOrderDetailsByUserId(Long userId) {
        return orderRepository.findAllByUserId(userId).stream().map(orderMapper::toDto).toList();
    }

}
