package lt.akademija.andrejo.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lt.akademija.andrejo.domain.Dish;
import org.springframework.beans.BeanUtils;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DishDto {
    private String name;
    private boolean hasNuts;
    private boolean hasMilk;

    public static DishDto toDto(Dish dish) {
        DishDto dto = new DishDto();
        BeanUtils.copyProperties(dish, dto);
        return dto;
    }

    public static Dish fromDto(DishDto dishDto) {
        Dish dish = new Dish();
        BeanUtils.copyProperties(dishDto, dish);
        return dish;
    }

    public static Dish updateFromDto(DishDto dishDto) {
        Dish dish = new Dish();
        dish.setName(dishDto.getName());
        dish.setHasMilk(dishDto.isHasMilk());
        dish.setHasNuts(dishDto.isHasNuts());
        return dish;
    }
}
