package lt.akademija.andrejo.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.BeanUtils;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DishDto {
    private String name;
    private boolean hasNuts;
    private boolean hasMilk;

    public static DishDto toDto(DishDto dish) {
        DishDto dto = new DishDto();
        BeanUtils.copyProperties(dish, dto);
        return dto;
    }

    public static DishDto fromDto(DishDto dishDto) {
        DishDto dish = new DishDto();
        BeanUtils.copyProperties(dishDto, dish);
        return dish;
    }

    public static DishDto updateFromDto(DishDto dishDto) {
        DishDto dish = new DishDto();
        dish.setName(dishDto.getName());
        dish.setHasMilk(dishDto.isHasMilk());
        dish.setHasNuts(dishDto.isHasNuts());
        return dish;
    }
}
