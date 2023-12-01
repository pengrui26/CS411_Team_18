package com.laioffer.twitch.model;


import java.util.List;


public record GameResponse(
        List<Game> data
) {
}
