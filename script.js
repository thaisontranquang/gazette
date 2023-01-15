const btnCloseNote = document.getElementById("noteclose");
const btnCloseMsg = document.getElementById("msgclose");
const btnCloseOp = document.getElementById("opennoteclose");
const btnCloseVideo = document.getElementById("videoclose");
const btnCloseInsta = document.getElementById("instaclose");
const btnCloseRetrans = document.getElementById("retransclose");
const btnCloseComm = document.getElementById("commclose");

const note = document.getElementById("note");
const msg = document.getElementById("msg");
const opennote = document.getElementById("opennote");
const video = document.getElementById("video");
const insta = document.getElementById("insta");
const retrans = document.getElementById("retrans");
const comm = document.getElementById("comm");

btnCloseNote.addEventListener("click", () => {
  note.style.display = "none";
});

btnCloseMsg.addEventListener("click", () => {
  msg.style.display = "none";
});

btnCloseOp.addEventListener("click", () => {
  opennote.style.display = "none";
});

btnCloseVideo.addEventListener("click", () => {
  video.style.display = "none";
});

btnCloseInsta.addEventListener("click", () => {
  insta.style.display = "none";
});

btnCloseRetrans.addEventListener("click", () => {
  retrans.style.display = "none";
});

btnCloseComm.addEventListener("click", () => {
  comm.style.display = "none";
});

//  draggable pour note
$(function () {
  $("#note").draggable();
});

/* click div to bring to front */
jQuery(function () {
  var maxz = jQuery("#note:last").css("zIndex");
  jQuery("#note").on("drag", function () {
    maxz++;
    jQuery(this).css("z-index", maxz);
  });

  /* fade in divs - set .post to opacity:0; */
  jQuery("#note").each(function (i) {
    jQuery(this)
      .delay(i++ * 500)
      .fadeTo(1000, 1)
      .css({ "margin-left": i * 10, "margin-top": i * 10 });
  });
});

//  draggable pour opennote

$(function () {
  $("#opennote").draggable();
});

/* click div to bring to front */
jQuery(function () {
  var maxz = jQuery("#opennote:last").css("zIndex");
  jQuery("#opennote").on("drag", function () {
    maxz++;
    jQuery(this).css("z-index", maxz);
  });

  /* fade in divs - set .post to opacity:0; */
  jQuery("#opennote").each(function (i) {
    jQuery(this)
      .delay(i++ * 500)
      .fadeTo(1000, 1)
      .css({ "margin-left": i * 10, "margin-top": i * 10 });
  });
});

//  draggable pour message

$(function () {
  $("#msg").draggable();
});

/* click div to bring to front */
jQuery(function () {
  var maxz = jQuery("#msg:last").css("zIndex");
  jQuery("#msg").on("drag", function () {
    maxz++;
    jQuery(this).css("z-index", maxz);
  });

  /* fade in divs - set .post to opacity:0; */
  jQuery("#msg").each(function (i) {
    jQuery(this)
      .delay(i++ * 500)
      .fadeTo(1000, 1)
      .css({ "margin-left": i * 10, "margin-top": i * 10 });
  });
});

//  draggable pour video

$(function () {
  $("#video").draggable();
});

/* click div to bring to front */
jQuery(function () {
  var maxz = jQuery("#video:last").css("zIndex");
  jQuery("#video").on("drag", function () {
    maxz++;
    jQuery(this).css("z-index", maxz);
  });

  /* fade in divs - set .post to opacity:0; */
  jQuery("#video").each(function (i) {
    jQuery(this)
      .delay(i++ * 500)
      .fadeTo(1000, 1)
      .css({ "margin-left": i * 10, "margin-top": i * 10 });
  });
});

//  draggable pour restranscription

$(function () {
  $("#retrans").draggable();
});

/* click div to bring to front */
jQuery(function () {
  var maxz = jQuery("#retrans:last").css("zIndex");
  jQuery("#retrans").on("drag", function () {
    maxz++;
    jQuery(this).css("z-index", maxz);
  });

  /* fade in divs - set .post to opacity:0; */
  jQuery("#retrans").each(function (i) {
    jQuery(this)
      .delay(i++ * 500)
      .fadeTo(1000, 1)
      .css({ "margin-left": i * 10, "margin-top": i * 10 });
  });
});

//  draggable pour insta

$(function () {
  $("#insta").draggable();
});

/* click div to bring to front */
jQuery(function () {
  var maxz = jQuery("#insta:last").css("zIndex");
  jQuery("#insta").on("drag", function () {
    maxz++;
    jQuery(this).css("z-index", maxz);
  });

  /* fade in divs - set .post to opacity:0; */
  jQuery("#insta").each(function (i) {
    jQuery(this)
      .delay(i++ * 500)
      .fadeTo(1000, 1)
      .css({ "margin-left": i * 10, "margin-top": i * 10 });
  });
});

//  draggable pour commentaires

$(function () {
  $("#comm").draggable();
});

/* click div to bring to front */
jQuery(function () {
  var maxz = jQuery("#comm:last").css("zIndex");
  jQuery("#comm").on("drag", function () {
    maxz++;
    jQuery(this).css("z-index", maxz);
  });

  /* fade in divs - set .post to opacity:0; */
  jQuery("#comm").each(function (i) {
    jQuery(this)
      .delay(i++ * 500)
      .fadeTo(1000, 1)
      .css({ "margin-left": i * 10, "margin-top": i * 10 });
  });
});
