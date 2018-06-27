package lt.akademija.andrejo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Table(name = "menu")
public class Menu {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToMany
    @JsonIgnore
    private List<Dish> dishList = new ArrayList<>();


}
