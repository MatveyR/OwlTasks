package net.insomnia.backend.rest;

import net.insomnia.backend.models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("api/v1/users")
public class UserRestController {
    private List<User> USERS = Stream.of(
            new User(0L, "igand", "igand1953"),
            new User(1L, "insomnic76", "123pass"),
            new User(2L, "shibanuto73", "qwerty")
    ).collect(Collectors.toList());

    @GetMapping
    public List<User> getAll() {
        return USERS;
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable Long id) {
        return USERS.stream().filter(user -> user.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
