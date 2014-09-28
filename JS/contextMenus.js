
function onClickHandler(info, tab) {
  //alert(JSON.stringify(info) + "\n\n" + JSON.stringify(tab))

        chrome.tabs.create({
            url: chrome.extension.getURL('dialog.html'),
            active: false
        }, function(tab) {
            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true,
                width: 650,
               height: 300
                // incognito, top, left, ...
            });
            chrome.runtime.sendMessage(info);
        });
  // if (info.menuItemId == "radio1" || info.menuItemId == "radio2") {
  //   console.log("radio item " + info.menuItemId +
  //               " was clicked (previous checked state was "  +
  //               info.wasChecked + ")");
  // } else if (info.menuItemId == "checkbox1" || info.menuItemId == "checkbox2") {
  //   console.log(JSON.stringify(info));
  //   console.log("checkbox item " + info.menuItemId +
  //               " was clicked, state is now: " + info.checked +
  //               " (previous state was " + info.wasChecked + ")");

  // } else {
  //   console.log("item " + info.menuItemId + " was clicked");
  //   console.log("info: " + JSON.stringify(info));
  //   console.log("tab: " + JSON.stringify(tab));
  // }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  //var contexts = ["page","selection","link","editable","image","video",
                  //"audio"];
  // for (var i = 0; i < contexts.length; i++) {
  //   var context = contexts[i];
  //   var title = "Test '" + context + "' menu item";
  //   var id = chrome.contextMenus.create({"title": title, "contexts":[context],
  //                                        "id": "context" + context});
  //   console.log("'" + context + "' item:" + id);
  // }
  var selection_id = chrome.contextMenus.create({"title": "Add to RoboTool...", "contexts":['selection'],
                                         "id": "context_selection"});
  //var selection_id2 = chrome.contextMenus.create({"title": "Set Login Regex", "contexts":['selection'],
                                         // "id": "context_selection2"});
  //alert("this")
  // // Create a parent item and two children.
  chrome.contextMenus.create({"title": "Add to RoboTool...", "id": "parent"});
  //chrome.contextMenus.create(
     // {"title": "Phantom", "parentId": "context_selection", "id": "phantom"});
  //chrome.contextMenus.create(
    //  {"title": "Node", "parentId": "parent", "id": "node"});
  //console.log("weqweq")
  // chrome.contextMenus.create(
  //     {"title": "Child 2", "parentId": "parent", "id": "child2"});
  // console.log("parent child1 child2");

  // // Create some radio items.
  // chrome.contextMenus.create({"title": "Radio 1", "type": "radio",
  //                             "id": "radio1"});
  // chrome.contextMenus.create({"title": "Radio 2", "type": "radio",
  //                             "id": "radio2"});
  // console.log("radio1 radio2");

  // // Create some checkbox items.
  // chrome.contextMenus.create(
  //     {"title": "Checkbox1", "type": "checkbox", "id": "checkbox1"});
  // chrome.contextMenus.create(
  //     {"title": "Checkbox2", "type": "checkbox", "id": "checkbox2"});
  // console.log("checkbox1 checkbox2");

  // // Intentionally create an invalid item, to show off error checking in the
  // // create callback.
  // console.log("About to try creating an invalid item - an error about " +
  //     "duplicate item child1 should show up");
  // chrome.contextMenus.create({"title": "Oops", "id": "child1"}, function() {
  //   if (chrome.extension.lastError) {
  //     console.log("Got expected error: " + chrome.extension.lastError.message);
  //   }
  // });
});

