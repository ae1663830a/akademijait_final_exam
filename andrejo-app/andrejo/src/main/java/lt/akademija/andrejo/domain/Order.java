package lt.akademija.andrejo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Table(name = "client")
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE })
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    @JsonIgnore
    private Client client;

    @ManyToMany
    @JoinTable(
            name = "order_dish",
            joinColumns=@JoinColumn(name = "order", referencedColumnName = "id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "dish", referencedColumnName = "name", nullable = false)
    )
    @JsonIgnore
    private List<Dish> dishes = new ArrayList<>();


}
