$(document).ready(function(){
  // The sidebar toggle
  $('#sidebar-toggle-wrapper').click(function(){
    $('#sidebar-toggle').toggleClass('open');
    $('#sidebar').toggleClass('open');
    $(this).toggleClass('open');
  });

  // Ability to accept new input;
  let canAcceptNewInput = true;
  $(document).keyup(function(){
    canAcceptNewInput = true;
  });

  // Is used to limit someone holding down a
  // hotkey and spamming the system with inputs.
  function processingHotkey() {
    canAcceptNewInput = false;
  }

  // Everything to deal with the Delete functionality.
  function deleteFN() {
    let sel = $('.selected');
    $('#' + sel.attr('line-target')).remove();
    sel.find('.node').each(function() {
      // Remove the linking lines.
      let attr = $(this).attr('line-target');
      if (typeof attr !== typeof undefined && attr !== false) {
        $('#' + attr).remove();
      }
    });
    sel.remove();
    targets = ['body'];
  }

  // On click perform deleteFN().
  $('#delete').click(function(){
    deleteFN();
  });

  // Hotkey Management.
  $(document).bind('keydown', 'alt+d', function(){
    if (canAcceptNewInput) {
      deleteFN();
      processingHotkey();
    }
  });
  // --------------------------------------------------

  // Everything to have to do with the Delete and Raise functionality.
  function deleteAndRaiseFN() {
    let sel = $('#' + $('.selected').attr('id'));
    let pos = sel.offset();
    let subTree = sel.detach();
    $('#' + sel.attr('line-target')).remove();
    subTree.appendTo('body');
    sel.css({
      'top' : pos.top,
      'left' : pos.left
    });
    calc_all_lines('#' + sel.attr('id'));
  }

  // On click perform deleteAndRaiseFN().
  $('#delete-and-raise').click(function(){
    deleteAndRaiseFN();
  });

  // Hotkey Management.
  $(document).bind('keydown', 'alt+r', function(){
    if (canAcceptNewInput) {
      deleteAndRaiseFN();
      processingHotkey();
    }
  });
  // --------------------------------------------------

  // Everything having to do with the Swap Theme functionality.
  function swapThemeFN() {
    let isAcademic = false;
    $('body').toggleClass('academic-theme');
    $('body').children('.node').each(function() {
      calc_all_lines('#' + $(this).attr('id'));
    });
    isAcademic = $('body').hasClass('academic-theme');
    if (isAcademic) {
      if (wasPresentationMode) {
        $('body').addClass('presentation-mode')
      }
    } else {
      $('body').removeClass('presentation-mode')
    }
  }

  // On click perform swapThemeFN().
  $('#swap-theme').click(function(){
    swapThemeFN();
  });

  // Hotkey Management.
  $(document).bind('keydown', 'alt+s', function(){
    if (canAcceptNewInput) {
      swapThemeFN();
      processingHotkey();
    }
  });
  // --------------------------------------------------

  // Everything having to do with the
  // Toggle Presentation Mode functionality.
  let wasPresentationMode = false;

  function togglePresentationModeFN() {
    if ($('body').hasClass('academic-theme')) {
      $('body').toggleClass('presentation-mode');
      wasPresentationMode = $('body').hasClass('presentation-mode');
    }
  }

  // On click perform togglePresentationModeFN().
  $('#toggle-presentation-mode').click(function(){
    togglePresentationModeFN();
  });

  // Hotkey Management.
  $(document).bind('keydown', 'alt+m', function(){
    if (canAcceptNewInput) {
      togglePresentationModeFN();
      processingHotkey();
    }
  });
  // --------------------------------------------------
});
