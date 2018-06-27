package lt.akademija.andrejo.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lt.akademija.andrejo.domain.Client;
import org.springframework.beans.BeanUtils;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class ClientDto {
    private String firstName;
    private String lastName;
    private boolean drinkAlcohol;
    private boolean nutsAlergy;
    private boolean milkAlergy;

    public static ClientDto toDto(Client client) {
        ClientDto dto = new ClientDto();
        BeanUtils.copyProperties(client, dto);
        return dto;
    }

    public static Client fromDto(ClientDto clientDto) {
        Client client = new Client();
        BeanUtils.copyProperties(clientDto, client);
        return client;
    }

    public static Client updateFromDto(ClientDto clientDto) {
        Client client = new Client();
        client.setFirstName(clientDto.getFirstName());
        client.setLastName(clientDto.getLastName());
        client.setDrinkAlcohol(clientDto.isDrinkAlcohol());
        client.setMilkAlergy(clientDto.isMilkAlergy());
        client.setNutsAlergy(clientDto.isNutsAlergy());
        return client;
    }
}
