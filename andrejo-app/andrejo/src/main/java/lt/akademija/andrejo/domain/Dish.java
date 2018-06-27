package lt.akademija.andrejo.domain;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

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

    @ManyToOne
    @JoinColumn(name = "in_menu")
    private Menu menu;

}
