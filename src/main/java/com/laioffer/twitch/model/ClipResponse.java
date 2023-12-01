package com.laioffer.twitch.model;


import java.util.List;


public record ClipResponse(
        List<Clip> data
) {
}
