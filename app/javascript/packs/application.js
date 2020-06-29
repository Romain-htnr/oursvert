require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

import $ from 'jquery';
import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';

$( document ).ready(function() { $("#query").focus(); });
document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll();
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});

// $(function() {
//   $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//   initUpdateNavbarOnScroll();
// });
// initUpdateNavbarOnScroll();
