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
@Table(name = "dish")
public class Dish implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String name;
    private boolean hasNuts;
    private boolean hasMilk;

    @ManyToMany
    @JoinTable(
            name = "menu_dish",
            joinColumns=@JoinColumn(name = "dish", referencedColumnName = "name", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "menu", referencedColumnName = "id", nullable = false)
    )
    @JsonIgnore
    private List<Menu> menus = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "order_dish",
            joinColumns=@JoinColumn(name = "dish", referencedColumnName = "name", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "order", referencedColumnName = "id", nullable = false)
    )
    @JsonIgnore
    private List<Order> orders = new ArrayList<>();

}
