package dev.mesh.recruitment.servises;

public class PositionNotFoundException extends RuntimeException {
    public PositionNotFoundException(String s) {
        super(s);
    }
}
