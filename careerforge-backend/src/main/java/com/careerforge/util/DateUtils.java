package com.careerforge.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DateUtils {

    private static final DateTimeFormatter FORMATTER =
            DateTimeFormatter.ofPattern("dd-MM-yyyy");

    private DateUtils() {
    }

    public static String format(LocalDate date) {
        return date.format(FORMATTER);
    }

}