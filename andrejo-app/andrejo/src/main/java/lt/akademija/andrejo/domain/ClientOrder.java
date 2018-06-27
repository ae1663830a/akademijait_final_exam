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
@Table(name = "client")
public class ClientOrder {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Client client;

    @OneToMany
    @JsonIgnore
    private List<Dish> dishes = new ArrayList<>();
}
