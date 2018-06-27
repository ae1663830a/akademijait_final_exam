package lt.akademija.andrejo.domain;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * @author ggrazevicius
 */
@Entity
@NamedQueries({
        @NamedQuery(name = "findAllClients", query = "select client from Client client")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Table(name = "client")
public class Client {

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

}
