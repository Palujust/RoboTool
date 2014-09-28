
jsPlumb.ready(function() {
  jQuery("body").mousedown(function(e){ e.preventDefault(); }) //prevents text selection
  jsPlumb.setContainer($('#editor'));
 
  var i = 0;
 
  $('#editor').dblclick(function(e) {
    var newState = $('<div>').attr('id', 'state' + i).addClass('block');
    jsPlumb.draggable(newState, {
      containment: 'parent'
    });
     
    newState.dblclick(function(e) {
      jsPlumb.detachAllConnections($(this));
      $(this).remove();
      e.stopPropagation();
    });

    
    
    var title = $('<div>').addClass('title').text('State ' + i);
    var connect = $('<div>').addClass('connect');
    var placement = {
      'top': e.pageY,
      'left': e.pageX
    }
    newState.css(placement);
    
    newState.append(title);
    newState.append(connect);
    
    $('#editor').append(newState);
 
    jsPlumb.makeTarget(newState, {
      anchor: 'Continuous',
    });
    
    jsPlumb.makeSource(connect, {
      parent: newState,
      connector: 'StateMachine',
      endpoint:{
        connectorOverlays:[ 
          [ "Arrow", { width:10, length:30, location:1, id:"arrow" } ], 
          [ "Label", { label:"foo", id:"label" } ]
        ]
      }
    });
    
    i++;    
  });  
});