<?php

/**
 * Enqueue scripts.
 */
function load_scripts()
{
    //styles
    wp_enqueue_style('style-fancybox', get_template_directory_uri() .
        '/assets/css/jquery.fancybox.min.css', [], '1.0', 'all');

    wp_enqueue_style('swiper-css', get_template_directory_uri() .
        '/assets/css/swiper.css', [], '1.0', 'all');

    wp_enqueue_style('style', get_template_directory_uri() .
        '/assets/css/app.css', [], '1.0', 'all');

    //JS
    wp_enqueue_script('jquery-js', get_template_directory_uri() .
        '/assets/js/jquery.js', [], '1.0', true);

    wp_enqueue_script('fancybox-js', get_template_directory_uri() .
        '/assets/js/jquery.fancybox.min.js', [], '1.0', true);

    wp_enqueue_script('swiper-js', get_template_directory_uri() .
        '/assets/js/swiper.js', [], '1.0', true);

    wp_enqueue_script('app-index-js', get_template_directory_uri() .
        '/assets/js/app.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'load_scripts');