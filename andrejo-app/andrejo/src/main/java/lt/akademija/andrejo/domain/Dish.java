package lt.akademija.andrejo.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Table(name = "dish")
public class Dish {

    @Id
    private String name;
    private boolean hasNuts;
    private boolean hasMilk;

}
