package com.laioffer.twitch.model;


import java.util.List;


public record VideoResponse(
        List<Video> data
) {
}
