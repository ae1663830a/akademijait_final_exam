package lt.akademija.andrejo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @author ggrazevicius
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Table(name = "client")
public class Client implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Long id;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private boolean drinkAlcohol;
    @NotNull
    private boolean nutsAlergy;
    @NotNull
    private boolean milkAlergy;

    @OneToMany(mappedBy = "client", orphanRemoval = true)
    @JsonIgnore
    private List<Order> orders = new ArrayList<>();

    void addOrder(Order order) {
        orders.add(order);
    }

    void removeOrder(Order order) {
        orders.remove(order);
    }
}
