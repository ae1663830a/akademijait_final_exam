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
@Table(name = "menu")
public class Menu implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Long id;

    @ManyToMany
    @JoinTable(
            name = "menu_dish",
            joinColumns=@JoinColumn(name = "menu", referencedColumnName = "id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "dish", referencedColumnName = "name", nullable = false)
    )
    @JsonIgnore
    private List<Dish> dishList = new ArrayList<>();

    public void addDish(Dish dish) {
        dishList.add(dish);
    }

    public void removeDish(Dish dish) {
        dishList.remove(dish);
    }
}
