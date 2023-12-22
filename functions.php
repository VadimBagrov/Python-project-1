<?php

define( 'R_IMG_DIR' , 'http://localhost:8888/wp-content/uploads/2023/12');

add_action( 'wp_enqueue_scripts', function() {
  wp_enqueue_style( 'fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap' );
  wp_enqueue_style( 'slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' );
  wp_enqueue_style( 'fonts-googleapis', 'https://fonts.googleapis.com' );
  wp_enqueue_style( 'fonts-googlestatic', 'https://fonts.gstatic.com' );
  wp_enqueue_style( 'style', get_template_directory_uri() . "/assets/css/style.min.css" );

  wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
	wp_enqueue_script( 'jquery' );
  wp_enqueue_script( 'slick-js', 'https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js');
	wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), 'null' , true);
});

add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');

?>