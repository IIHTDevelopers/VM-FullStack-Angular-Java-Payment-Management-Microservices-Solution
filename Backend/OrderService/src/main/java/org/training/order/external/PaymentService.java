package org.training.order.external;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.training.order.model.dto.PaymentDto;


@FeignClient(name = "payment-service", url = "${payment.service.url}")
public interface PaymentService {

    @PostMapping("/api/payments/create")
    PaymentDto createPayment(@RequestBody PaymentDto payment);
}